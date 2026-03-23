# Crypto Guy 开发日志

> 最后更新: 2026-03-23
> 维护者: PaoPao 🫧

## 📅 更新记录

### 2026-03-23 — 事件系统重构 + UI 美化 + 交易面板改版
**分支:** `eugene/event-types-and-dao`

**事件系统重构:**
- 新增事件类别字段 (`category`): G(全局) / T(需T-Tool) / A(需A-Tool)
- 新增事件激活字段 (`active`): 仅 active=true 的事件才会被抽取，触发后自动关闭
- 新增事件链机制 (`activatesEvents`): 事件触发后可自动激活后续事件
- 新增事件结果字段 (`resultDescription`): 结果在结算弹窗展示，不在新闻中透露
- 所有已有事件标记为 `category: 'G', active: true`

**The DAO 事件链 (首个事件链):**
- The DAO 诞生 (G类, ETH+2%) → 触发后激活 The DAO 黑客攻击
- The DAO 资金异动 (A类, ETH-50%) → 描述故意模糊，玩家难以判断好坏
- 结算弹窗展示真实历史事件解释 + 推文链接

**UI 美化:**
- Market News 板块添加像素风背景图 (`public/market-bg.jpg`)
- A 类事件使用专属背景图 (`public/market-bg-a.jpg`)
- Trade Operations 板块添加像素风背景图 (`public/trade-bg.jpg`)
- 买入/卖出按钮颜色偏暖黄，融合背景
- 输入框和百分比按钮暗色调适配背景

**交易面板改版:**
- 移除 Hold 按钮
- 保留 Amount 输入框 + Buy/Sell 按钮（手动输入数量交易）
- Buy/Sell 悬浮显示 25%/50%/75%/MAX 百分比按钮（按余额/持仓百分比交易）
- Buy 的 MAX 悬浮变为红色 "ALL IN" 抖动效果
- 余额/持仓不足时弹出提示

**结算弹窗增强:**
- 新增「📰 事件结果」区域，展示事件后果解释
- 支持中英文翻译

---

## 项目概述
像素风加密货币模拟交易游戏，React 18 + TypeScript + Vite + Zustand + TailwindCSS

**仓库:** https://github.com/eugenewill0125-max/crypto-guy
**本地路径:** /Users/mac/EugenePrivate/crypto-guy

---

## ✅ 已完成功能

### Phase 1: 教程阶段 (Tutorial)
- **BTC 交易系统** — 买入/卖出/持仓，月度结算
- **随机事件系统** — 8 个基础事件影响 BTC 价格
- **SEC 主席系统** — 不同主席有不同的收益/亏损修正
- **游戏结束判定** — 总资产归零则 Game Over
- **主菜单 & 电脑框架 UI** — 像素风显示器/键盘/鼠标装饰
- **中英文 i18n** — 全文案双语支持
- **移动端适配**

| 文件 | 说明 |
|------|------|
| `src/App.tsx` | 主应用入口，游戏流程控制 |
| `src/store/gameStore.ts` | Zustand 状态管理（核心逻辑） |
| `src/types/index.ts` | TypeScript 类型定义 |
| `src/components/MainMenu.tsx` | 主菜单 |
| `src/components/ComputerFrame.tsx` | 电脑框架 UI 容器 |
| `src/components/Header.tsx` | 顶部信息栏（余额/资产/持仓） |
| `src/components/EventCard.tsx` | 事件卡片展示 |
| `src/components/TradePanel.tsx` | 交易面板（买/卖/持仓 + 代币选择） |
| `src/components/SettlementModal.tsx` | 月度结算弹窗 |
| `src/components/GameOver.tsx` | 游戏结束画面 |
| `src/components/SECChairPanel.tsx` | SEC 主席面板（电脑窗口外右侧） |
| `src/components/TutorialSkip.tsx` | 教程跳过按钮 |
| `src/data/events.ts` | 事件数据（tutorialEvents + phase2Events） |
| `src/data/eventTranslations.ts` | 事件翻译 |
| `src/data/tokens.ts` | 代币数据（BTC/ETH/SOL/DOGE） |
| `src/data/secChairs.ts` | SEC 主席数据 |
| `src/i18n/translations.ts` | UI 文案翻译 |
| `src/i18n/LanguageContext.tsx` | 语言切换 Context |
| `src/index.css` | 全局样式 + 像素风动画 |
| `src/main.tsx` | Vite 入口 |

### Phase 2: 多币种交易
- **新代币** — ETH ($2,500), SOL ($100), DOGE ($0.15)
- **Phase 2 事件** — 12 个多币种联动事件
- **代币选择器** — TradePanel 支持切换代币
- **阶段过渡动画** — 教程结束后展示 T-tool logo + Phase 2 文字
- **Header 多币种显示** — 所有代币价格和持仓

| 文件 | 说明 |
|------|------|
| `src/components/PhaseTransition.tsx` | 阶段过渡动画组件 |

### T-Tool 系统
- **T-Tool 面板** — 电脑窗口外左侧（与 SEC 主席对称）
- **锁定/购买机制** — 初始锁定，$5,000 解锁
- **购买弹窗** — 余额检测，不足提示，购买成功动画

| 文件 | 说明 |
|------|------|
| `src/components/TToolPanel.tsx` | T-Tool 面板（锁定/购买） |
| `public/t-tool-logo.jpg` | T-Tool logo 图片 |

---

## 🔧 进行中

### T-Tool 解锁后功能（待定）
- 解锁后 T-Tool 具体提供什么交易能力待策划

---

## 📋 待开发 (Roadmap)

- [ ] Phase 3: KOL 养成
- [ ] T-Tool 解锁后的具体功能
- [ ] 数据可视化图表
- [ ] 音效系统
- [ ] 动画效果增强
- [ ] ZEC 代币加入（echo17666 建议）
- [ ] 存档/读档功能
- [ ] Twitter 分享 + OG 预览图

---

## 📝 配置信息

- **初始余额:** $10,000 (INITIAL_BALANCE in gameStore.ts)
- **T-Tool 价格:** $5,000 (TTOOL_PRICE in TToolPanel.tsx)
- **BTC 初始价:** $45,000
- **ETH 初始价:** $2,500
- **SOL 初始价:** $100
- **DOGE 初始价:** $0.15

---

## 🔗 外部关联

- **Moltbook 账号:** paopao-dev (API key 在 ~/.config/moltbook/credentials.json)
- **Moltbook 帖子:** builds / general / agents 三个社区已发招募帖
- **GitHub Issues:** #1 zyun818-kaito (策划), #2 echo17666 (ZEC 建议)
