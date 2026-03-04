import { create } from 'zustand';
import { GameState, TradeAction, Position } from '../types';
import { getRandomEvent, tutorialEvents, phase2Events } from '../data/events';
import { tokens, initialPrices } from '../data/tokens';
import { getCurrentSECChair } from '../data/secChairs';

interface GameStore extends GameState {
  // Actions
  startGame: () => void;
  executeTrade: (action: TradeAction, amount: number, tokenId?: string) => void;
  endMonth: () => void;
  resetGame: () => void;
  skipTutorial: () => void;
  closeSettlement: () => void;
  enterPhase2: () => void;
  showingPhaseTransition: boolean;
  dismissPhaseTransition: () => void;
}

const INITIAL_BALANCE = 8000;

export const useGameStore = create<GameStore>((set, get) => ({
  // Initial state
  stage: 'tutorial',
  currentMonth: 1,
  balance: INITIAL_BALANCE,
  positions: [],
  trades: [],
  currentEvent: null,
  unlockedTokens: ['btc'],
  ownedApps: [],
  fans: 0,
  isGameOver: false,
  settlementInfo: null,
  showingPhaseTransition: false,

  // 开始游戏
  startGame: () => {
    const firstEvent = getRandomEvent(tutorialEvents);
    set({
      currentEvent: firstEvent,
      currentMonth: 1,
      balance: INITIAL_BALANCE,
      positions: [],
      trades: [],
      isGameOver: false,
      stage: 'tutorial',
      unlockedTokens: ['btc'],
      showingPhaseTransition: false
    });
  },

  // 进入第二阶段
  enterPhase2: () => {
    set({
      showingPhaseTransition: true
    });
  },

  dismissPhaseTransition: () => {
    const nextEvent = getRandomEvent(phase2Events);
    set({
      showingPhaseTransition: false,
      stage: 'free',
      unlockedTokens: ['btc', 'eth', 'sol', 'doge'],
      currentEvent: nextEvent
    });
  },

  // 执行交易
  executeTrade: (action: TradeAction, amount: number, tokenId?: string) => {
    const state = get();
    const tid = tokenId || 'btc';
    const token = tokens[tid];
    if (!token) return;
    const currentPrice = token.currentPrice;

    if (action === 'buy') {
      const cost = amount * currentPrice;
      if (cost > state.balance) return;

      const newBalance = state.balance - cost;
      const existingPosition = state.positions.find(p => p.tokenId === tid);

      let newPositions: Position[];
      if (existingPosition) {
        const totalAmount = existingPosition.amount + amount;
        const totalCost = existingPosition.averagePrice * existingPosition.amount + cost;
        const newAvgPrice = totalCost / totalAmount;
        newPositions = state.positions.map(p =>
          p.tokenId === tid
            ? { ...p, amount: totalAmount, averagePrice: newAvgPrice }
            : p
        );
      } else {
        newPositions = [...state.positions, { tokenId: tid, amount, averagePrice: currentPrice }];
      }

      set({
        balance: newBalance,
        positions: newPositions,
        trades: [...state.trades, {
          month: state.currentMonth,
          action,
          tokenId: tid,
          amount,
          price: currentPrice,
          total: cost
        }]
      });

    } else if (action === 'sell') {
      const position = state.positions.find(p => p.tokenId === tid);
      if (!position || position.amount < amount) return;

      const revenue = amount * currentPrice;
      const newBalance = state.balance + revenue;
      const newPositions = state.positions.map(p =>
        p.tokenId === tid
          ? { ...p, amount: p.amount - amount }
          : p
      ).filter(p => p.amount > 0);

      set({
        balance: newBalance,
        positions: newPositions,
        trades: [...state.trades, {
          month: state.currentMonth,
          action,
          tokenId: tid,
          amount,
          price: currentPrice,
          total: revenue
        }]
      });

    } else if (action === 'idle') {
      set({
        trades: [...state.trades, {
          month: state.currentMonth,
          action,
          tokenId: tid,
          amount: 0,
          price: currentPrice,
          total: 0
        }]
      });
    }
  },

  // 结束当月
  endMonth: () => {
    const state = get();
    if (!state.currentEvent) return;

    const secChair = getCurrentSECChair(state.currentMonth);

    // Apply all impacts from the event
    for (const impact of state.currentEvent.impacts) {
      const token = tokens[impact.tokenId];
      if (!token) continue;

      let priceChangePercent = impact.priceChange / 100;

      // Apply SEC chair modifier
      if (priceChangePercent > 0) {
        priceChangePercent = priceChangePercent * (1 + secChair.profitModifier / 100);
      } else if (priceChangePercent < 0) {
        priceChangePercent = priceChangePercent * (1 + secChair.lossModifier / 100);
      }

      const newPrice = token.currentPrice * (1 + priceChangePercent);
      token.currentPrice = Math.max(0.001, newPrice);
    }

    // Calculate total P/L across all positions
    let totalProfitLoss = 0;
    for (const pos of state.positions) {
      const token = tokens[pos.tokenId];
      if (!token) continue;
      const currentValue = pos.amount * token.currentPrice;
      const costBasis = pos.amount * pos.averagePrice;
      totalProfitLoss += currentValue - costBasis;
    }

    // Calculate total assets
    const totalValue = state.balance + state.positions.reduce((sum, p) => {
      const token = tokens[p.tokenId];
      return sum + (token ? p.amount * token.currentPrice : 0);
    }, 0);

    if (totalValue <= 0) {
      set({ isGameOver: true });
      return;
    }

    // Get primary impact for settlement display (BTC or first impact)
    const primaryImpact = state.currentEvent.impacts.find(i => i.tokenId === 'btc') || state.currentEvent.impacts[0];
    const originalPriceChange = primaryImpact ? primaryImpact.priceChange : 0;
    let displayPriceChange = originalPriceChange;
    if (primaryImpact) {
      let pct = primaryImpact.priceChange / 100;
      if (pct > 0) pct = pct * (1 + secChair.profitModifier / 100);
      else if (pct < 0) pct = pct * (1 + secChair.lossModifier / 100);
      displayPriceChange = pct * 100;
    }

    // Check if tutorial phase should transition to phase 2
    const nextMonth = state.currentMonth + 1;
    const shouldTransition = state.stage === 'tutorial' && nextMonth > 12;

    // Get next event from appropriate pool
    const eventPool = (state.stage === 'free' || shouldTransition) ? phase2Events : tutorialEvents;
    const nextEvent = getRandomEvent(eventPool);

    set({
      currentMonth: nextMonth,
      currentEvent: nextEvent,
      settlementInfo: {
        month: nextMonth,
        priceChange: displayPriceChange,
        originalPriceChange: originalPriceChange,
        profitLoss: totalProfitLoss,
        newBalance: totalValue
      }
    });

    // Trigger phase transition after 12 months
    if (shouldTransition) {
      // Will show transition after settlement is closed
      set({ stage: 'free', unlockedTokens: ['btc', 'eth', 'sol', 'doge'] });
      // Delay showing transition so settlement shows first
      setTimeout(() => {
        get().enterPhase2();
      }, 100);
    }
  },

  // 重置游戏
  resetGame: () => {
    // Reset all token prices
    for (const [id, price] of Object.entries(initialPrices)) {
      if (tokens[id]) tokens[id].currentPrice = price;
    }
    get().startGame();
  },

  // 跳过教程
  skipTutorial: () => {
    set({ showingPhaseTransition: true });
  },

  // 关闭结算弹窗
  closeSettlement: () => {
    set({ settlementInfo: null });
  }
}));
