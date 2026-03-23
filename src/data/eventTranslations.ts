// 事件的中英文翻译
export const eventTranslations: Record<string, { title: { zh: string; en: string }; description: { zh: string; en: string }; resultDescription?: { zh: string; en: string } }> = {
  'evt_001': {
    title: {
      zh: '美联储宣布加息',
      en: 'Fed Announces Rate Hike'
    },
    description: {
      zh: '美联储宣布将基准利率上调 0.5%，市场对此反应强烈，投资者开始寻求避险资产。',
      en: 'The Federal Reserve announces a 0.5% increase in the benchmark interest rate. The market reacts strongly as investors seek safe-haven assets.'
    }
  },
  'evt_002': {
    title: {
      zh: 'Tesla 宣布接受 BTC 支付',
      en: 'Tesla Accepts BTC Payments'
    },
    description: {
      zh: 'Elon Musk 在 Twitter 上宣布 Tesla 将重新接受比特币作为支付方式，市场情绪高涨。',
      en: 'Elon Musk announces on Twitter that Tesla will accept Bitcoin as payment again. Market sentiment surges.'
    }
  },
  'evt_003': {
    title: {
      zh: '中国加强加密货币监管',
      en: 'China Tightens Crypto Regulations'
    },
    description: {
      zh: '中国政府发布新规，加强对加密货币交易的监管，多家交易所暂停服务。',
      en: 'Chinese government issues new regulations to strengthen cryptocurrency trading oversight. Multiple exchanges suspend services.'
    }
  },
  'evt_004': {
    title: {
      zh: 'MicroStrategy 再次购入 BTC',
      en: 'MicroStrategy Buys More BTC'
    },
    description: {
      zh: 'MicroStrategy CEO 宣布公司再次购入价值 5 亿美元的比特币，表示对 BTC 长期价值的信心。',
      en: 'MicroStrategy CEO announces the company has purchased another $500M worth of Bitcoin, expressing confidence in BTC\'s long-term value.'
    }
  },
  'evt_005': {
    title: {
      zh: '市场横盘震荡',
      en: 'Market Consolidation'
    },
    description: {
      zh: '加密市场进入盘整期，交易量萎缩，投资者持观望态度。',
      en: 'Crypto market enters consolidation phase with declining trading volume as investors remain cautious.'
    }
  },
  'evt_006': {
    title: {
      zh: '比特币 ETF 获批',
      en: 'Bitcoin ETF Approved'
    },
    description: {
      zh: '美国 SEC 批准首个比特币现货 ETF，机构资金开始涌入。',
      en: 'US SEC approves the first Bitcoin spot ETF. Institutional money begins flowing in.'
    }
  },
  'evt_007': {
    title: {
      zh: '大型交易所被黑客攻击',
      en: 'Major Exchange Hacked'
    },
    description: {
      zh: '某大型交易所遭受黑客攻击，价值 2 亿美元的加密资产被盗，市场恐慌情绪蔓延。',
      en: 'A major exchange suffers a hack with $200M in crypto assets stolen. Panic spreads across the market.'
    }
  },
  'evt_008': {
    title: {
      zh: '比特币减半临近',
      en: 'Bitcoin Halving Approaching'
    },
    description: {
      zh: '距离比特币减半还有 3 个月，历史数据显示减半后通常迎来牛市。',
      en: 'Bitcoin halving is 3 months away. Historical data shows bull markets typically follow halvings.'
    }
  },
  // Phase 2 events
  'p2_001': {
    title: {
      zh: '以太坊 2.0 升级成功',
      en: 'Ethereum 2.0 Upgrade Success'
    },
    description: {
      zh: '以太坊完成重大网络升级，交易速度大幅提升，Gas 费用降低 90%。',
      en: 'Ethereum completes a major network upgrade. Transaction speed increases significantly and gas fees drop by 90%.'
    }
  },
  'p2_002': {
    title: {
      zh: 'Meme 币狂潮',
      en: 'Meme Coin Frenzy'
    },
    description: {
      zh: '社交媒体掀起 Meme 币热潮，DOGE 成为最受欢迎的 Meme 币之一。',
      en: 'Social media sparks a meme coin craze. DOGE becomes one of the most popular meme coins.'
    }
  },
  'p2_003': {
    title: {
      zh: 'Solana 网络宕机',
      en: 'Solana Network Outage'
    },
    description: {
      zh: 'Solana 网络遭遇严重宕机，持续 12 小时无法处理交易，社区信心受挫。',
      en: 'Solana network suffers a major outage, unable to process transactions for 12 hours. Community confidence shaken.'
    }
  },
  'p2_004': {
    title: {
      zh: '机构大举买入 ETH',
      en: 'Institutions Buy ETH'
    },
    description: {
      zh: '多家华尔街机构宣布将以太坊纳入投资组合，市场对 ETH 信心大增。',
      en: 'Multiple Wall Street institutions announce adding Ethereum to their portfolios. Market confidence in ETH surges.'
    }
  },
  'p2_005': {
    title: {
      zh: 'Elon Musk 发推支持 DOGE',
      en: 'Elon Musk Tweets About DOGE'
    },
    description: {
      zh: 'Elon Musk 再次在推特力挺狗狗币，称其为"人民的加密货币"。',
      en: 'Elon Musk tweets in support of Dogecoin again, calling it "the people\'s cryptocurrency".'
    }
  },
  'p2_006': {
    title: {
      zh: 'Solana DeFi 生态爆发',
      en: 'Solana DeFi Ecosystem Booms'
    },
    description: {
      zh: 'Solana 上多个 DeFi 协议 TVL 暴涨，生态系统活跃度创新高。',
      en: 'Multiple DeFi protocols on Solana see TVL surge. Ecosystem activity reaches new highs.'
    }
  },
  'p2_007': {
    title: {
      zh: '全球加密货币监管收紧',
      en: 'Global Crypto Regulation Tightens'
    },
    description: {
      zh: 'G20 峰会达成共识，将对加密货币实施更严格的全球监管框架。',
      en: 'G20 summit reaches consensus on implementing stricter global regulatory framework for cryptocurrencies.'
    }
  },
  'p2_008': {
    title: {
      zh: '比特币突破历史新高',
      en: 'Bitcoin Hits All-Time High'
    },
    description: {
      zh: '比特币价格突破历史新高，带动整个加密市场进入牛市行情。',
      en: 'Bitcoin breaks its all-time high, driving the entire crypto market into a bull run.'
    }
  },
  'p2_009': {
    title: {
      zh: 'NFT 市场回暖',
      en: 'NFT Market Recovery'
    },
    description: {
      zh: 'NFT 交易量大幅回升，以太坊和 Solana 作为主要 NFT 平台受益。',
      en: 'NFT trading volume recovers significantly. Ethereum and Solana benefit as major NFT platforms.'
    }
  },
  'p2_010': {
    title: {
      zh: 'DOGE 基金会解散',
      en: 'DOGE Foundation Dissolves'
    },
    description: {
      zh: '狗狗币基金会宣布解散，项目未来发展充满不确定性。',
      en: 'Dogecoin Foundation announces dissolution. Future development of the project is uncertain.'
    }
  },
  'p2_011': {
    title: {
      zh: '以太坊 Layer 2 大规模采用',
      en: 'Ethereum Layer 2 Mass Adoption'
    },
    description: {
      zh: '多个主流应用宣布迁移到以太坊 Layer 2，链上活跃度飙升。',
      en: 'Multiple mainstream apps announce migration to Ethereum Layer 2. On-chain activity skyrockets.'
    }
  },
  'p2_012': {
    title: {
      zh: '加密市场流动性危机',
      en: 'Crypto Liquidity Crisis'
    },
    description: {
      zh: '多个做市商撤离加密市场，流动性急剧下降，价格出现剧烈波动。',
      en: 'Multiple market makers exit the crypto market. Liquidity drops sharply and prices become highly volatile.'
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
