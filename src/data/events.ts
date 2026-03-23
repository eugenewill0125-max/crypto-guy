import { GameEvent, EventCategory } from '../types';

// 第一阶段：BTC 基础事件
export const tutorialEvents: GameEvent[] = [
  {
    id: 'evt_001',
    type: 'basic',
    category: 'G',
    active: true,
    title: '美联储宣布加息',
    description: '美联储宣布将基准利率上调 0.5%，市场对此反应强烈，投资者开始寻求避险资产。',
    impacts: [{ tokenId: 'btc', priceChange: -8 }]
  },
  {
    id: 'evt_002',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'Tesla 宣布接受 BTC 支付',
    description: 'Elon Musk 在 Twitter 上宣布 Tesla 将重新接受比特币作为支付方式，市场情绪高涨。',
    impacts: [{ tokenId: 'btc', priceChange: 12 }]
  },
  {
    id: 'evt_003',
    type: 'basic',
    category: 'G',
    active: true,
    title: '中国加强加密货币监管',
    description: '中国政府发布新规，加强对加密货币交易的监管，多家交易所暂停服务。',
    impacts: [{ tokenId: 'btc', priceChange: -15 }]
  },
  {
    id: 'evt_004',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'MicroStrategy 再次购入 BTC',
    description: 'MicroStrategy CEO 宣布公司再次购入价值 5 亿美元的比特币，表示对 BTC 长期价值的信心。',
    impacts: [{ tokenId: 'btc', priceChange: 10 }]
  },
  {
    id: 'evt_005',
    type: 'basic',
    category: 'G',
    active: true,
    title: '市场横盘震荡',
    description: '加密市场进入盘整期，交易量萎缩，投资者持观望态度。',
    impacts: [{ tokenId: 'btc', priceChange: -2 }]
  },
  {
    id: 'evt_006',
    type: 'basic',
    category: 'G',
    active: true,
    title: '比特币 ETF 获批',
    description: '美国 SEC 批准首个比特币现货 ETF，机构资金开始涌入。',
    impacts: [{ tokenId: 'btc', priceChange: 18 }]
  },
  {
    id: 'evt_007',
    type: 'basic',
    category: 'G',
    active: true,
    title: '大型交易所被黑客攻击',
    description: '某大型交易所遭受黑客攻击，价值 2 亿美元的加密资产被盗，市场恐慌情绪蔓延。',
    impacts: [{ tokenId: 'btc', priceChange: -12 }]
  },
  {
    id: 'evt_008',
    type: 'basic',
    category: 'G',
    active: true,
    title: '比特币减半临近',
    description: '距离比特币减半还有 3 个月，历史数据显示减半后通常迎来牛市。',
    impacts: [{ tokenId: 'btc', priceChange: 15 }]
  }
];

// 第二阶段：多币种事件
export const phase2Events: GameEvent[] = [
  {
    id: 'p2_001',
    type: 'basic',
    category: 'G',
    active: true,
    title: '以太坊 2.0 升级成功',
    description: '以太坊完成重大网络升级，交易速度大幅提升，Gas 费用降低 90%。',
    impacts: [
      { tokenId: 'eth', priceChange: 15 },
      { tokenId: 'btc', priceChange: 3 }
    ]
  },
  {
    id: 'p2_002',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'Meme 币狂潮',
    description: '社交媒体掀起 Meme 币热潮，DOGE 成为最受欢迎的 Meme 币之一。',
    impacts: [
      { tokenId: 'doge', priceChange: 25 },
      { tokenId: 'btc', priceChange: -2 }
    ]
  },
  {
    id: 'p2_003',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'Solana 网络宕机',
    description: 'Solana 网络遭遇严重宕机，持续 12 小时无法处理交易，社区信心受挫。',
    impacts: [
      { tokenId: 'sol', priceChange: -20 }
    ]
  },
  {
    id: 'p2_004',
    type: 'basic',
    category: 'G',
    active: true,
    title: '机构大举买入 ETH',
    description: '多家华尔街机构宣布将以太坊纳入投资组合，市场对 ETH 信心大增。',
    impacts: [
      { tokenId: 'eth', priceChange: 12 },
      { tokenId: 'sol', priceChange: 5 }
    ]
  },
  {
    id: 'p2_005',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'Elon Musk 发推支持 DOGE',
    description: 'Elon Musk 再次在推特力挺狗狗币，称其为"人民的加密货币"。',
    impacts: [
      { tokenId: 'doge', priceChange: 30 },
      { tokenId: 'btc', priceChange: -3 }
    ]
  },
  {
    id: 'p2_006',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'Solana DeFi 生态爆发',
    description: 'Solana 上多个 DeFi 协议 TVL 暴涨，生态系统活跃度创新高。',
    impacts: [
      { tokenId: 'sol', priceChange: 18 },
      { tokenId: 'eth', priceChange: -4 }
    ]
  },
  {
    id: 'p2_007',
    type: 'basic',
    category: 'G',
    active: true,
    title: '全球加密货币监管收紧',
    description: 'G20 峰会达成共识，将对加密货币实施更严格的全球监管框架。',
    impacts: [
      { tokenId: 'btc', priceChange: -10 },
      { tokenId: 'eth', priceChange: -8 },
      { tokenId: 'sol', priceChange: -12 },
      { tokenId: 'doge', priceChange: -15 }
    ]
  },
  {
    id: 'p2_008',
    type: 'basic',
    category: 'G',
    active: true,
    title: '比特币突破历史新高',
    description: '比特币价格突破历史新高，带动整个加密市场进入牛市行情。',
    impacts: [
      { tokenId: 'btc', priceChange: 20 },
      { tokenId: 'eth', priceChange: 10 },
      { tokenId: 'sol', priceChange: 8 },
      { tokenId: 'doge', priceChange: 5 }
    ]
  },
  {
    id: 'p2_009',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'NFT 市场回暖',
    description: 'NFT 交易量大幅回升，以太坊和 Solana 作为主要 NFT 平台受益。',
    impacts: [
      { tokenId: 'eth', priceChange: 8 },
      { tokenId: 'sol', priceChange: 10 }
    ]
  },
  {
    id: 'p2_010',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'DOGE 基金会解散',
    description: '狗狗币基金会宣布解散，项目未来发展充满不确定性。',
    impacts: [
      { tokenId: 'doge', priceChange: -18 }
    ]
  },
  {
    id: 'p2_011',
    type: 'basic',
    category: 'G',
    active: true,
    title: '以太坊 Layer 2 大规模采用',
    description: '多个主流应用宣布迁移到以太坊 Layer 2，链上活跃度飙升。',
    impacts: [
      { tokenId: 'eth', priceChange: 14 },
      { tokenId: 'btc', priceChange: 2 }
    ]
  },
  {
    id: 'p2_012',
    type: 'basic',
    category: 'G',
    active: true,
    title: '加密市场流动性危机',
    description: '多个做市商撤离加密市场，流动性急剧下降，价格出现剧烈波动。',
    impacts: [
      { tokenId: 'btc', priceChange: -7 },
      { tokenId: 'eth', priceChange: -9 },
      { tokenId: 'sol', priceChange: -15 },
      { tokenId: 'doge', priceChange: -20 }
    ]
  }
];

// The DAO 事件链
export const daoEvents: GameEvent[] = [
  {
    id: 'dao_001',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'The DAO 诞生',
    description: 'The DAO——以太坊上诞生的一个"去中心化自治投资基金"项目正式上线，吸引了大量投资者参与。',
    impacts: [{ tokenId: 'eth', priceChange: 2 }],
    activatesEvents: ['dao_002']
  },
  {
    id: 'dao_002',
    type: 'basic',
    category: 'A',
    active: false,
    title: 'The DAO 异常退款请求',
    description: '侦测到 The DAO 智能合约内收到大量退款请求。The DAO 智能合约中的漏洞被黑客利用，导致总供应量 5% 的 ETH 被盗走，市场恐慌蔓延。',
    impacts: [{ tokenId: 'eth', priceChange: -50 }]
  }
];

// 所有事件池（用于查找和激活）
export const allEvents: GameEvent[] = [...tutorialEvents, ...phase2Events, ...daoEvents];

// 根据事件ID查找事件
export const findEventById = (id: string): GameEvent | undefined => {
  return allEvents.find(e => e.id === id);
};

// 随机获取一个事件（考虑 active 和 category）
export const getRandomEvent = (
  eventPool: GameEvent[],
  unlockedCategories: EventCategory[] = ['G']
): GameEvent => {
  const available = eventPool.filter(e => e.active && unlockedCategories.includes(e.category));
  if (available.length === 0) {
    // fallback: 从全池中随机取一个 active 的 G 事件
    const fallback = eventPool.filter(e => e.active && e.category === 'G');
    if (fallback.length === 0) {
      // 最终 fallback
      const randomIndex = Math.floor(Math.random() * eventPool.length);
      return eventPool[randomIndex];
    }
    const randomIndex = Math.floor(Math.random() * fallback.length);
    return fallback[randomIndex];
  }
  const randomIndex = Math.floor(Math.random() * available.length);
  return available[randomIndex];
};
