// 游戏阶段
export type GameStage = 'tutorial' | 'free' | 'kol';

// 交易操作类型
export type TradeAction = 'buy' | 'sell' | 'idle';

// 代币类型
export interface Token {
  id: string;
  name: string;
  symbol: string;
  currentPrice: number;
}

// 持仓
export interface Position {
  tokenId: string;
  amount: number;
  averagePrice: number;
}

// 事件类型
export type EventType = 'basic' | 'onchain' | 'kol';

// 事件类别: G=全局, T=需T-Tool, A=需A-Tool
export type EventCategory = 'G' | 'T' | 'A';

// 事件影响
export interface EventImpact {
  tokenId: string;
  priceChange: number; // 百分比变化，如 10 表示 +10%, -15 表示 -15%
}

// 事件
export interface GameEvent {
  id: string;
  type: EventType;
  category: EventCategory;
  active: boolean;
  title: string;
  description: string;
  impacts: EventImpact[];
  // 触发后激活的事件ID列表
  activatesEvents?: string[];
  // 事件结果解释（结算时展示，不在新闻中透露）
  resultDescription?: string;
}

// 交易记录
export interface Trade {
  month: number;
  action: TradeAction;
  tokenId: string;
  amount: number;
  price: number;
  total: number;
}

// 结算信息
export interface SettlementInfo {
  month: number;
  priceChange: number;
  originalPriceChange: number;
  profitLoss: number;
  newBalance: number;
  eventId?: string; // 触发事件的ID，用于显示结果解释
}

// 游戏状态
export interface GameState {
  stage: GameStage;
  currentMonth: number;
  balance: number; // 当前现金
  positions: Position[]; // 持仓
  trades: Trade[]; // 交易历史
  currentEvent: GameEvent | null;
  unlockedTokens: string[]; // 已解锁的代币
  ownedApps: string[]; // 已购买的应用
  fans: number; // 粉丝数（KOL 阶段）
  isGameOver: boolean;
  settlementInfo: SettlementInfo | null; // 结算信息
}
