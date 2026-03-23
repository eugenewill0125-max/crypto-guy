import { GameEvent, EventCategory } from '../types';

// 第一阶段：BTC 基础事件
export const tutorialEvents: GameEvent[] = [
  {
    id: 'evt_001',
    type: 'basic',
    category: 'G',
    active: true,
    title: '美联储宣布加息',
    description: '美联储宣布将基准利率上调 0.5%，市场对此反应不一。部分分析师认为这将稳定经济预期，也有人担忧流动性收紧的影响。',
    impacts: [{ tokenId: 'btc', priceChange: -8 }]
  },
  {
    id: 'evt_002',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'Tesla 宣布接受 BTC 支付',
    description: 'Elon Musk 在 Twitter 上宣布 Tesla 将重新接受比特币作为支付方式。支持者认为这是主流采用的信号，批评者则质疑此举的持续性和实际影响。',
    impacts: [{ tokenId: 'btc', priceChange: 12 }]
  },
  {
    id: 'evt_003',
    type: 'basic',
    category: 'G',
    active: true,
    title: '中国加强加密货币监管',
    description: '中国政府发布新规，加强对加密货币交易的监管，多家交易所暂停服务。有观点认为监管将净化市场环境，也有人担心短期内对交易活动造成冲击。',
    impacts: [{ tokenId: 'btc', priceChange: -15 }]
  },
  {
    id: 'evt_004',
    type: 'basic',
    category: 'G',
    active: true,
    title: 'MicroStrategy 再次购入 BTC',
    description: 'MicroStrategy CEO 宣布公司再次购入价值 5 亿美元的比特币。有人将此视为机构信心的体现，也有分析师认为过度集中持仓带来了新的风险。',
    impacts: [{ tokenId: 'btc', priceChange: 10 }]
  },
  {
    id: 'evt_005',
    type: 'basic',
    category: 'G',
    active: true,
    title: '市场横盘震荡',
    description: '加密市场进入盘整期，交易量明显下降。部分交易员认为这是暴风雨前的平静，也有人认为市场正在寻找新的方向。',
    impacts: [{ tokenId: 'btc', priceChange: -2 }]
  },
  {
    id: 'evt_006',
    type: 'basic',
    category: 'G',
    active: true,
    title: '比特币 ETF 获批',
    description: '美国 SEC 批准首个比特币现货 ETF。乐观者认为这将打开机构入场的大门，谨慎派则担忧监管套利和市场过热风险。',
    impacts: [{ tokenId: 'btc', priceChange: 18 }]
  },
  {
    id: 'evt_007',
    type: 'basic',
    category: 'G',
    active: true,
    title: '大型交易所被黑客攻击',
    description: '某大型交易所遭受黑客攻击，价值 2 亿美元的加密资产被盗。部分投资者担忧安全问题，但也有人指出历史上类似事件往往推动行业加强安全基础设施建设。',
    impacts: [{ tokenId: 'btc', priceChange: -12 }]
  },
  {
    id: 'evt_008',
    type: 'basic',
    category: 'G',
    active: true,
    title: '比特币减半临近',
    description: '距离比特币减半还有 3 个月。历史上减半前后行情走势各异，市场对本次减半的影响存在分歧。',
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
    description: '以太坊完成重大网络升级，交易速度和 Gas 费用均有显著变化。社区对升级的长期效果看法不一，部分开发者对新架构的稳定性持保留态度。',
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
    description: '社交媒体上 Meme 币相关讨论量激增，DOGE 成为话题焦点。有人认为这代表社区文化的力量，也有人警告投机情绪过浓。',
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
    description: 'Solana 网络出现中断，持续约 12 小时无法处理交易。团队迅速发布了修复方案，但社区对网络稳定性的讨论再度升温。',
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
    description: '多家华尔街机构宣布将以太坊纳入投资组合。支持者认为这标志着 ETH 获得主流认可，批评者则认为机构入场可能改变市场结构。',
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
    description: 'Elon Musk 再次在推特提及狗狗币，称其为"人民的加密货币"。市场对名人效应的持续性和实际价值意见不一。',
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
    description: 'Solana 上多个 DeFi 协议 TVL 出现大幅变动，生态系统活跃度引发关注。有人认为这是生态成熟的标志，也有人质疑资金流入的可持续性。',
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
    description: 'G20 峰会达成共识，将制定统一的全球加密货币监管框架。部分业内人士认为清晰的规则有助于行业发展，也有人担忧合规成本将大幅增加。',
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
    description: '比特币价格触及历史新高区域，交易量显著放大。有分析师认为突破将打开上行空间，也有人警告获利盘可能随时涌出。',
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
    description: 'NFT 交易量出现明显回升，以太坊和 Solana 是主要交易平台。市场对 NFT 复苏的持续性看法不一，部分观察者认为这只是短期波动。',
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
    description: '狗狗币基金会宣布解散，项目治理结构将发生变化。有人认为去中心化社区将接管发展方向，也有人对项目的组织协调能力表示担忧。',
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
    description: '多个主流应用宣布迁移到以太坊 Layer 2，链上活跃度出现显著变化。有人认为这将巩固以太坊生态地位，也有人担心 Layer 2 碎片化问题加剧。',
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
    description: '多个做市商调整加密市场策略，市场流动性出现结构性变化。部分交易员认为这将带来更多套利机会，也有人对价格波动加剧表示警惕。',
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
    resultDescription: 'The DAO 项目的上线为以太坊生态带来了积极影响，ETH 价格小幅上涨。',
    impacts: [{ tokenId: 'eth', priceChange: 2 }],
    activatesEvents: ['dao_002']
  },
  {
    id: 'dao_002',
    type: 'basic',
    category: 'A',
    active: false,
    title: 'The DAO 资金异动',
    description: 'The DAO 智能合约内出现密集的资金分割操作，多个子合约被批量创建。社区对此看法不一：有人认为这是大户正常行使投票退出权，也有人猜测是项目方在进行技术升级测试。',
    resultDescription: 'The DAO 智能合约中的"重入漏洞"被黑客利用，约 360 万枚 ETH 被盗走，市场恐慌蔓延，ETH 价格暴跌。',
    impacts: [{ tokenId: 'eth', priceChange: -50 }],
    sourceUrl: 'https://x.com/el33th4xor/status/743819598701674496'
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
