import { GameEvent } from '../types';

// 第一阶段：BTC 基础事件
export const tutorialEvents: GameEvent[] = [
  {
    id: 'evt_001',
    type: 'basic',
    title: '美联储宣布加息',
    description: '美联储宣布将基准利率上调 0.5%，市场对此反应强烈，投资者开始寻求避险资产。',
    impacts: [{ tokenId: 'btc', priceChange: -8 }]
  },
  {
    id: 'evt_002',
    type: 'basic',
    title: 'Tesla 宣布接受 BTC 支付',
    description: 'Elon Musk 在 Twitter 上宣布 Tesla 将重新接受比特币作为支付方式，市场情绪高涨。',
    impacts: [{ tokenId: 'btc', priceChange: 12 }]
  },
  {
    id: 'evt_003',
    type: 'basic',
    title: '中国加强加密货币监管',
    description: '中国政府发布新规，加强对加密货币交易的监管，多家交易所暂停服务。',
    impacts: [{ tokenId: 'btc', priceChange: -15 }]
  },
  {
    id: 'evt_004',
    type: 'basic',
    title: 'MicroStrategy 再次购入 BTC',
    description: 'MicroStrategy CEO 宣布公司再次购入价值 5 亿美元的比特币，表示对 BTC 长期价值的信心。',
    impacts: [{ tokenId: 'btc', priceChange: 10 }]
  },
  {
    id: 'evt_005',
    type: 'basic',
    title: '市场横盘震荡',
    description: '加密市场进入盘整期，交易量萎缩，投资者持观望态度。',
    impacts: [{ tokenId: 'btc', priceChange: -2 }]
  },
  {
    id: 'evt_006',
    type: 'basic',
    title: '比特币 ETF 获批',
    description: '美国 SEC 批准首个比特币现货 ETF，机构资金开始涌入。',
    impacts: [{ tokenId: 'btc', priceChange: 18 }]
  },
  {
    id: 'evt_007',
    type: 'basic',
    title: '大型交易所被黑客攻击',
    description: '某大型交易所遭受黑客攻击，价值 2 亿美元的加密资产被盗，市场恐慌情绪蔓延。',
    impacts: [{ tokenId: 'btc', priceChange: -12 }]
  },
  {
    id: 'evt_008',
    type: 'basic',
    title: '比特币减半临近',
    description: '距离比特币减半还有 3 个月，历史数据显示减半后通常迎来牛市。',
    impacts: [{ tokenId: 'btc', priceChange: 15 }]
  }
];

// 随机获取一个事件
export const getRandomEvent = (eventPool: GameEvent[]): GameEvent => {
  const randomIndex = Math.floor(Math.random() * eventPool.length);
  return eventPool[randomIndex];
};
