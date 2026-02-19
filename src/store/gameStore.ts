import { create } from 'zustand';
import { GameState, TradeAction, Position } from '../types';
import { getRandomEvent, tutorialEvents } from '../data/events';
import { tokens } from '../data/tokens';
import { getCurrentSECChair } from '../data/secChairs';

interface GameStore extends GameState {
  // Actions
  startGame: () => void;
  executeTrade: (action: TradeAction, amount: number) => void;
  endMonth: () => void;
  resetGame: () => void;
  skipTutorial: () => void;
  closeSettlement: () => void;
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

  // 开始游戏
  startGame: () => {
    const firstEvent = getRandomEvent(tutorialEvents);
    set({
      currentEvent: firstEvent,
      currentMonth: 1,
      balance: INITIAL_BALANCE,
      positions: [],
      trades: [],
      isGameOver: false
    });
  },

  // 执行交易
  executeTrade: (action: TradeAction, amount: number) => {
    const state = get();
    const tokenId = 'btc'; // 第一阶段只有 BTC
    const token = tokens[tokenId];
    const currentPrice = token.currentPrice;

    if (action === 'buy') {
      const cost = amount * currentPrice;
      if (cost > state.balance) {
        // Alert will be shown by component with i18n
        return;
      }

      // 购买
      const newBalance = state.balance - cost;
      const existingPosition = state.positions.find(p => p.tokenId === tokenId);

      let newPositions: Position[];
      if (existingPosition) {
        // 更新现有持仓
        const totalAmount = existingPosition.amount + amount;
        const totalCost = existingPosition.averagePrice * existingPosition.amount + cost;
        const newAvgPrice = totalCost / totalAmount;
        
        newPositions = state.positions.map(p =>
          p.tokenId === tokenId
            ? { ...p, amount: totalAmount, averagePrice: newAvgPrice }
            : p
        );
      } else {
        // 新建持仓
        newPositions = [...state.positions, { tokenId, amount, averagePrice: currentPrice }];
      }

      set({
        balance: newBalance,
        positions: newPositions,
        trades: [...state.trades, {
          month: state.currentMonth,
          action,
          tokenId,
          amount,
          price: currentPrice,
          total: cost
        }]
      });

    } else if (action === 'sell') {
      const position = state.positions.find(p => p.tokenId === tokenId);
      if (!position || position.amount < amount) {
        // Alert will be shown by component with i18n
        return;
      }

      // 卖出
      const revenue = amount * currentPrice;
      const newBalance = state.balance + revenue;
      
      const newPositions = state.positions.map(p =>
        p.tokenId === tokenId
          ? { ...p, amount: p.amount - amount }
          : p
      ).filter(p => p.amount > 0);

      set({
        balance: newBalance,
        positions: newPositions,
        trades: [...state.trades, {
          month: state.currentMonth,
          action,
          tokenId,
          amount,
          price: currentPrice,
          total: revenue
        }]
      });

    } else if (action === 'idle') {
      // 什么都不做
      set({
        trades: [...state.trades, {
          month: state.currentMonth,
          action,
          tokenId,
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

    // 获取当前 SEC 主席
    const secChair = getCurrentSECChair(state.currentMonth);

    // 应用事件影响
    const impact = state.currentEvent.impacts.find(i => i.tokenId === 'btc');
    if (impact) {
      const originalPriceChange = impact.priceChange;
      let priceChangePercent = impact.priceChange / 100;
      
      // 应用 SEC 主席修正
      if (priceChangePercent > 0) {
        // 收益：应用收益修正
        priceChangePercent = priceChangePercent * (1 + secChair.profitModifier / 100);
      } else if (priceChangePercent < 0) {
        // 亏损：应用亏损修正
        priceChangePercent = priceChangePercent * (1 + secChair.lossModifier / 100);
      }
      
      const newPrice = tokens.btc.currentPrice * (1 + priceChangePercent);
      tokens.btc.currentPrice = Math.round(newPrice);

      // 计算持仓盈亏
      const btcPosition = state.positions.find(p => p.tokenId === 'btc');
      let profitLoss = 0;
      if (btcPosition) {
        const newValue = btcPosition.amount * newPrice;
        const oldValue = btcPosition.amount * btcPosition.averagePrice;
        profitLoss = newValue - oldValue;
      }

      // 计算总资产
      const totalValue = state.balance + state.positions.reduce((sum, p) => {
        return sum + p.amount * tokens[p.tokenId].currentPrice;
      }, 0);

      // 检查游戏是否结束
      if (totalValue <= 0) {
        set({ isGameOver: true });
        return;
      }

      // 进入下一月并显示结算信息
      const nextEvent = getRandomEvent(tutorialEvents);
      set({
        currentMonth: state.currentMonth + 1,
        currentEvent: nextEvent,
        settlementInfo: {
          month: state.currentMonth + 1,
          priceChange: priceChangePercent * 100,
          originalPriceChange: originalPriceChange,
          profitLoss: profitLoss,
          newBalance: totalValue
        }
      });
    }
  },

  // 重置游戏
  resetGame: () => {
    tokens.btc.currentPrice = 45000; // 重置 BTC 价格
    get().startGame();
  },

  // 跳过教程
  skipTutorial: () => {
    const nextEvent = getRandomEvent(tutorialEvents);
    set({
      stage: 'free', // 进入自由交易阶段
      currentMonth: 13, // 从第13个月开始（第二阶段）
      currentEvent: nextEvent,
      unlockedTokens: ['btc'] // 暂时仍只有 BTC
    });
  },

  // 关闭结算弹窗
  closeSettlement: () => {
    set({ settlementInfo: null });
  }
}));
