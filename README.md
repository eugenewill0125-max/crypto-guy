# Crypto Guy - 加密货币模拟交易游戏

基于策划文档的第一阶段（Tutorial）实现。

## 功能特性

✅ 初始资金 $1,000
✅ BTC 交易（买入/卖出/持仓）
✅ 随机事件系统
✅ 月度结算
✅ 移动端适配
✅ 像素风格 UI

## 技术栈

- React 18 + TypeScript
- Vite
- Zustand (状态管理)
- TailwindCSS
- Press Start 2P 字体

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 部署

推荐部署到：
- Vercel
- Netlify
- Cloudflare Pages

只需连接 GitHub 仓库，自动构建部署。

## Twitter 分享优化

已配置 Open Graph meta 标签，分享到 Twitter 时会显示卡片预览。

需要添加 `/public/preview.png` (1200x630) 作为预览图。

## 后续开发

- [ ] 第二阶段：多币种 + 应用系统
- [ ] 第三阶段：KOL 养成
- [ ] 更多事件
- [ ] 数据可视化
- [ ] 音效
- [ ] 动画效果

## 游戏说明

1. 阅读当月事件
2. 根据事件判断买入/卖出/持仓
3. 点击"结束当月"查看结算
4. 资金归零游戏结束

目标：在加密市场中尽可能生存更久！
