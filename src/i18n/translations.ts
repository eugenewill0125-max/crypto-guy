export type Language = 'zh' | 'en';

export const translations = {
  zh: {
    // Header
    balance: '现金',
    totalAssets: '总资产',
    holdings: '持仓',
    month: '月份',
    
    // Event
    basicEvent: '📰 基础事件',
    onchainEvent: '⛓️ 链上事件',
    kolEvent: '👥 KOL事件',
    expectedImpact: '预期影响',
    loading: '加载中...',
    
    // Trade
    tradeOperations: '交易操作',
    price: '价格',
    maxBuy: '最大买入',
    maxSell: '最大卖出',
    tradeAmount: '交易数量',
    buy: '买入',
    sell: '卖出',
    hold: '持仓',
    endMonth: '结束当月',
    
    // Alerts
    invalidAmount: '请输入有效数量',
    insufficientBalance: '余额不足！',
    insufficientHoldings: '持仓不足！',
    
    // Settlement
    monthlySettlement: '月末结算',
    priceChange: '价格变化',
    profitLoss: '持仓盈亏',
    
    // Game Over
    gameOver: '游戏结束',
    gameOverDesc: '你的资金已归零！',
    survivedMonths: '你在加密市场生存了',
    months: '个月',
    restart: '重新开始',
    
    // Game Title
    gameTitle: 'CRYPTO GUY',
    
    // SEC Chair
    secChair: 'SEC 主席',
    profit: '收益',
    loss: '亏损',
    term: '任期'
  },
  
  en: {
    // Header
    balance: 'Cash',
    totalAssets: 'Total Assets',
    holdings: 'Holdings',
    month: 'Month',
    
    // Event
    basicEvent: '📰 Market News',
    onchainEvent: '⛓️ On-chain Event',
    kolEvent: '👥 KOL Event',
    expectedImpact: 'Expected Impact',
    loading: 'Loading...',
    
    // Trade
    tradeOperations: 'Trade Operations',
    price: 'Price',
    maxBuy: 'Max Buy',
    maxSell: 'Max Sell',
    tradeAmount: 'Amount',
    buy: 'Buy',
    sell: 'Sell',
    hold: 'Hold',
    endMonth: 'End Month',
    
    // Alerts
    invalidAmount: 'Please enter a valid amount',
    insufficientBalance: 'Insufficient balance!',
    insufficientHoldings: 'Insufficient holdings!',
    
    // Settlement
    monthlySettlement: 'Monthly Settlement',
    priceChange: 'Price Change',
    profitLoss: 'P/L',
    
    // Game Over
    gameOver: 'Game Over',
    gameOverDesc: 'Your funds have reached zero!',
    survivedMonths: 'You survived',
    months: 'months',
    restart: 'Restart',
    
    // Game Title
    gameTitle: 'CRYPTO GUY',
    
    // SEC Chair
    secChair: 'SEC Chair',
    profit: 'Profit',
    loss: 'Loss',
    term: 'Term'
  }
};

export type TranslationKey = keyof typeof translations.zh;
