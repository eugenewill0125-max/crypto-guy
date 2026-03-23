// 事件的中英文翻译
export const eventTranslations: Record<string, { title: { zh: string; en: string }; description: { zh: string; en: string }; resultDescription?: { zh: string; en: string } }> = {
  'evt_001': {
    title: {
      zh: '美联储宣布加息',
      en: 'Fed Announces Rate Hike'
    },
    description: {
      zh: '美联储宣布将基准利率上调 0.5%，市场对此反应不一。部分分析师认为这将稳定经济预期，也有人担忧流动性收紧的影响。',
      en: 'The Federal Reserve announces a 0.5% increase in the benchmark interest rate. Market reactions are mixed — some analysts believe this will stabilize economic expectations, while others worry about the impact of tightening liquidity.'
    }
  },
  'evt_002': {
    title: {
      zh: 'Tesla 宣布接受 BTC 支付',
      en: 'Tesla Accepts BTC Payments'
    },
    description: {
      zh: 'Elon Musk 在 Twitter 上宣布 Tesla 将重新接受比特币作为支付方式。支持者认为这是主流采用的信号，批评者则质疑此举的持续性和实际影响。',
      en: 'Elon Musk announces on Twitter that Tesla will accept Bitcoin as payment again. Supporters see it as a signal of mainstream adoption, while critics question the sustainability and real impact of the move.'
    }
  },
  'evt_003': {
    title: {
      zh: '中国加强加密货币监管',
      en: 'China Tightens Crypto Regulations'
    },
    description: {
      zh: '中国政府发布新规，加强对加密货币交易的监管，多家交易所暂停服务。有观点认为监管将净化市场环境，也有人担心短期内对交易活动造成冲击。',
      en: 'Chinese government issues new regulations to strengthen cryptocurrency trading oversight. Multiple exchanges suspend services. Some argue regulation will clean up the market, while others worry about short-term disruption to trading activity.'
    }
  },
  'evt_004': {
    title: {
      zh: 'MicroStrategy 再次购入 BTC',
      en: 'MicroStrategy Buys More BTC'
    },
    description: {
      zh: 'MicroStrategy CEO 宣布公司再次购入价值 5 亿美元的比特币。有人将此视为机构信心的体现，也有分析师认为过度集中持仓带来了新的风险。',
      en: 'MicroStrategy CEO announces the company has purchased another $500M worth of Bitcoin. Some see it as a sign of institutional confidence, while analysts warn that over-concentration poses new risks.'
    }
  },
  'evt_005': {
    title: {
      zh: '市场横盘震荡',
      en: 'Market Consolidation'
    },
    description: {
      zh: '加密市场进入盘整期，交易量明显下降。部分交易员认为这是暴风雨前的平静，也有人认为市场正在寻找新的方向。',
      en: 'Crypto market enters consolidation with trading volume declining notably. Some traders see this as the calm before the storm, while others believe the market is searching for a new direction.'
    }
  },
  'evt_006': {
    title: {
      zh: '比特币 ETF 获批',
      en: 'Bitcoin ETF Approved'
    },
    description: {
      zh: '美国 SEC 批准首个比特币现货 ETF。乐观者认为这将打开机构入场的大门，谨慎派则担忧监管套利和市场过热风险。',
      en: 'US SEC approves the first Bitcoin spot ETF. Optimists believe this opens the door for institutional entry, while cautious voices warn of regulatory arbitrage and overheating risks.'
    }
  },
  'evt_007': {
    title: {
      zh: '大型交易所被黑客攻击',
      en: 'Major Exchange Hacked'
    },
    description: {
      zh: '某大型交易所遭受黑客攻击，价值 2 亿美元的加密资产被盗。部分投资者担忧安全问题，但也有人指出历史上类似事件往往推动行业加强安全基础设施建设。',
      en: 'A major exchange suffers a hack with $200M in crypto assets stolen. Some investors worry about security, while others note that similar incidents historically drive the industry to strengthen security infrastructure.'
    }
  },
  'evt_008': {
    title: {
      zh: '比特币减半临近',
      en: 'Bitcoin Halving Approaching'
    },
    description: {
      zh: '距离比特币减半还有 3 个月。历史上减半前后行情走势各异，市场对本次减半的影响存在分歧。',
      en: 'Bitcoin halving is 3 months away. Historical price action around halvings has varied, and the market is divided on the impact this time.'
    }
  },
  // Phase 2 events
  'p2_001': {
    title: {
      zh: '以太坊 2.0 升级成功',
      en: 'Ethereum 2.0 Upgrade Success'
    },
    description: {
      zh: '以太坊完成重大网络升级，交易速度和 Gas 费用均有显著变化。社区对升级的长期效果看法不一，部分开发者对新架构的稳定性持保留态度。',
      en: 'Ethereum completes a major network upgrade with significant changes to transaction speed and gas fees. The community is divided on the long-term effects, with some developers expressing reservations about the new architecture\'s stability.'
    }
  },
  'p2_002': {
    title: {
      zh: 'Meme 币狂潮',
      en: 'Meme Coin Frenzy'
    },
    description: {
      zh: '社交媒体上 Meme 币相关讨论量激增，DOGE 成为话题焦点。有人认为这代表社区文化的力量，也有人警告投机情绪过浓。',
      en: 'Meme coin discussions surge on social media, with DOGE at the center of attention. Some see it as the power of community culture, while others warn of excessive speculation.'
    }
  },
  'p2_003': {
    title: {
      zh: 'Solana 网络宕机',
      en: 'Solana Network Outage'
    },
    description: {
      zh: 'Solana 网络出现中断，持续约 12 小时无法处理交易。团队迅速发布了修复方案，但社区对网络稳定性的讨论再度升温。',
      en: 'Solana network experiences an outage, unable to process transactions for about 12 hours. The team quickly released a fix, but community discussions about network stability have intensified.'
    }
  },
  'p2_004': {
    title: {
      zh: '机构大举买入 ETH',
      en: 'Institutions Buy ETH'
    },
    description: {
      zh: '多家华尔街机构宣布将以太坊纳入投资组合。支持者认为这标志着 ETH 获得主流认可，批评者则认为机构入场可能改变市场结构。',
      en: 'Multiple Wall Street institutions announce adding Ethereum to their portfolios. Supporters see this as mainstream validation for ETH, while critics argue institutional entry may reshape market dynamics.'
    }
  },
  'p2_005': {
    title: {
      zh: 'Elon Musk 发推支持 DOGE',
      en: 'Elon Musk Tweets About DOGE'
    },
    description: {
      zh: 'Elon Musk 再次在推特提及狗狗币，称其为"人民的加密货币"。市场对名人效应的持续性和实际价值意见不一。',
      en: 'Elon Musk mentions Dogecoin again on Twitter, calling it "the people\'s cryptocurrency." The market is divided on the sustainability and real value of celebrity influence.'
    }
  },
  'p2_006': {
    title: {
      zh: 'Solana DeFi 生态爆发',
      en: 'Solana DeFi Ecosystem Booms'
    },
    description: {
      zh: 'Solana 上多个 DeFi 协议 TVL 出现大幅变动，生态系统活跃度引发关注。有人认为这是生态成熟的标志，也有人质疑资金流入的可持续性。',
      en: 'Multiple DeFi protocols on Solana see significant TVL changes, drawing attention to ecosystem activity. Some see it as a sign of ecosystem maturity, while others question the sustainability of capital inflows.'
    }
  },
  'p2_007': {
    title: {
      zh: '全球加密货币监管收紧',
      en: 'Global Crypto Regulation Tightens'
    },
    description: {
      zh: 'G20 峰会达成共识，将制定统一的全球加密货币监管框架。部分业内人士认为清晰的规则有助于行业发展，也有人担忧合规成本将大幅增加。',
      en: 'G20 summit reaches consensus on establishing a unified global crypto regulatory framework. Some industry insiders believe clear rules will benefit the sector, while others worry about significantly increased compliance costs.'
    }
  },
  'p2_008': {
    title: {
      zh: '比特币突破历史新高',
      en: 'Bitcoin Hits All-Time High'
    },
    description: {
      zh: '比特币价格触及历史新高区域，交易量显著放大。有分析师认为突破将打开上行空间，也有人警告获利盘可能随时涌出。',
      en: 'Bitcoin price reaches the all-time high zone with significantly increased trading volume. Some analysts believe a breakout will open upside potential, while others warn that profit-taking could emerge at any time.'
    }
  },
  'p2_009': {
    title: {
      zh: 'NFT 市场回暖',
      en: 'NFT Market Recovery'
    },
    description: {
      zh: 'NFT 交易量出现明显回升，以太坊和 Solana 是主要交易平台。市场对 NFT 复苏的持续性看法不一，部分观察者认为这只是短期波动。',
      en: 'NFT trading volume shows a notable recovery, with Ethereum and Solana as the main platforms. The market is divided on whether the NFT recovery is sustainable, with some observers calling it a short-term fluctuation.'
    }
  },
  'p2_010': {
    title: {
      zh: 'DOGE 基金会解散',
      en: 'DOGE Foundation Dissolves'
    },
    description: {
      zh: '狗狗币基金会宣布解散，项目治理结构将发生变化。有人认为去中心化社区将接管发展方向，也有人对项目的组织协调能力表示担忧。',
      en: 'Dogecoin Foundation announces dissolution, with project governance set to change. Some believe the decentralized community will take over development, while others worry about the project\'s organizational capacity.'
    }
  },
  'p2_011': {
    title: {
      zh: '以太坊 Layer 2 大规模采用',
      en: 'Ethereum Layer 2 Mass Adoption'
    },
    description: {
      zh: '多个主流应用宣布迁移到以太坊 Layer 2，链上活跃度出现显著变化。有人认为这将巩固以太坊生态地位，也有人担心 Layer 2 碎片化问题加剧。',
      en: 'Multiple mainstream apps announce migration to Ethereum Layer 2, with notable changes in on-chain activity. Some believe this will strengthen Ethereum\'s ecosystem position, while others worry about increasing Layer 2 fragmentation.'
    }
  },
  'p2_012': {
    title: {
      zh: '加密市场流动性危机',
      en: 'Crypto Liquidity Crisis'
    },
    description: {
      zh: '多个做市商调整加密市场策略，市场流动性出现结构性变化。部分交易员认为这将带来更多套利机会，也有人对价格波动加剧表示警惕。',
      en: 'Multiple market makers adjust their crypto market strategies, causing structural changes in liquidity. Some traders see new arbitrage opportunities, while others are wary of increased price volatility.'
    }
  },
  // The DAO 事件链
  'dao_001': {
    title: {
      zh: 'The DAO 诞生',
      en: 'The DAO Launches'
    },
    description: {
      zh: 'The DAO——以太坊上诞生的一个"去中心化自治投资基金"项目正式上线，吸引了大量投资者参与。',
      en: 'The DAO — a "decentralized autonomous investment fund" project on Ethereum — officially launches, attracting a massive number of investors.'
    },
    resultDescription: {
      zh: 'The DAO 项目的上线为以太坊生态带来了积极影响，ETH 价格小幅上涨。',
      en: 'The launch of The DAO brought positive momentum to the Ethereum ecosystem, with ETH seeing a modest price increase.'
    }
  },
  'dao_002': {
    title: {
      zh: 'The DAO 资金异动',
      en: 'The DAO Fund Activity'
    },
    description: {
      zh: 'The DAO 智能合约内出现密集的资金分割操作，多个子合约被批量创建。社区对此看法不一：有人认为这是大户正常行使投票退出权，也有人猜测是项目方在进行技术升级测试。',
      en: 'Intensive fund-splitting operations detected in The DAO smart contract, with multiple child contracts being created in batch. The community is divided: some believe whales are simply exercising their voting exit rights, while others speculate the team is running technical upgrade tests.'
    },
    resultDescription: {
      zh: 'The DAO 智能合约中的"重入漏洞"被黑客利用，约 360 万枚 ETH 被盗走，市场恐慌蔓延，ETH 价格暴跌。',
      en: 'The DAO smart contract\'s "reentrancy vulnerability" was exploited by a hacker, draining ~3.6 million ETH. Panic spread and ETH price crashed.'
    }
  }
};
