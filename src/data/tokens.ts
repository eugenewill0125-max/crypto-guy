import { Token } from '../types';

export const tokens: Record<string, Token> = {
  btc: {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    currentPrice: 45000
  },
  eth: {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    currentPrice: 2500
  },
  sol: {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    currentPrice: 100
  },
  doge: {
    id: 'doge',
    name: 'Dogecoin',
    symbol: 'DOGE',
    currentPrice: 0.15
  }
};

// 初始价格，用于重置
export const initialPrices: Record<string, number> = {
  btc: 45000,
  eth: 2500,
  sol: 100,
  doge: 0.15
};
