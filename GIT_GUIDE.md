# Git 版本控制指南

## 📋 分支策略

### 主要分支

- **main** - 稳定版本分支，只包含已测试的完整功能
- **develop** - 开发分支，用于日常开发和功能添加

### 工作流程

```bash
# 1. 切换到开发分支
git checkout develop

# 2. 开发新功能...

# 3. 提交更改
git add .
git commit -m "feat: 添加新功能"

# 4. 功能完成并测试通过后，合并到主分支
git checkout main
git merge develop
```

---

## 🔄 常用命令

### 查看状态

```bash
# 查看当前分支和文件状态
git status

# 查看提交历史
git log --oneline --graph --all

# 查看最近5次提交
git log --oneline -5
```

### 提交更改

```bash
# 添加所有更改
git add .

# 添加特定文件
git add src/components/NewComponent.tsx

# 提交（使用规范的 commit message）
git commit -m "feat: 添加新功能"
git commit -m "fix: 修复bug"
git commit -m "docs: 更新文档"
git commit -m "refactor: 重构代码"
```

### 分支操作

```bash
# 查看所有分支
git branch -a

# 创建新分支
git checkout -b feature/multi-token

# 切换分支
git checkout main
git checkout develop

# 删除分支
git branch -d feature/old-feature
```

### 撤销操作

```bash
# 撤销工作区的修改（谨慎使用！）
git checkout -- src/file.tsx

# 撤销暂存区的文件
git reset HEAD src/file.tsx

# 回退到上一次提交（保留更改）
git reset --soft HEAD~1

# 回退到上一次提交（丢弃更改，谨慎！）
git reset --hard HEAD~1

# 回退到指定提交
git reset --hard 708adc2
```

### 查看差异

```bash
# 查看未暂存的更改
git diff

# 查看已暂存的更改
git diff --staged

# 查看两次提交之间的差异
git diff main develop
```

---

## 📝 Commit Message 规范

使用 Conventional Commits 规范：

```
<类型>: <简短描述>

[可选的详细描述]

[可选的脚注]
```

### 常用类型

- **feat**: 新功能
- **fix**: 修复 bug
- **docs**: 文档更新
- **style**: 代码格式调整（不影响功能）
- **refactor**: 重构代码
- **perf**: 性能优化
- **test**: 测试相关
- **chore**: 构建工具或辅助工具的变动

### 示例

```bash
git commit -m "feat: 添加多代币交易系统"

git commit -m "fix: 修复持仓计算错误
  
- 修正了平均成本价计算逻辑
- 更新了盈亏百分比显示"

git commit -m "docs: 更新 README 和配置文档"
```

---

## 🎯 开发阶段标记

### 当前提交历史

```
708adc2 - feat: 初始提交 - 教程阶段（仅 BTC）
```

### 计划中的里程碑

```
main
  └─ 708adc2 feat: 教程阶段（仅 BTC）

develop
  └─ [待开发] feat: 第二阶段 - 多代币系统
      ├─ 代币配置和自动解锁
      ├─ 代币选择器
      ├─ 多代币事件
      └─ 应用商店（A-Tool, T-Tool）
```

---

## 💡 最佳实践

### 1. 频繁提交

```bash
# ✅ 好的做法：小步提交
git commit -m "feat: 添加代币数据结构"
git commit -m "feat: 实现代币选择器UI"
git commit -m "feat: 添加多代币交易逻辑"

# ❌ 不好的做法：一次性提交所有更改
git commit -m "完成第二阶段所有功能"
```

### 2. 有意义的提交信息

```bash
# ✅ 好的做法
git commit -m "fix: 修复 BTC 价格计算精度问题"

# ❌ 不好的做法
git commit -m "修复bug"
git commit -m "更新"
```

### 3. 在开发分支工作

```bash
# ✅ 好的做法
git checkout develop
# 开发...
git add .
git commit -m "feat: 新功能"

# ❌ 不好的做法
# 直接在 main 分支开发
```

### 4. 定期合并到主分支

```bash
# 功能完成并测试通过后
git checkout main
git merge develop --no-ff
git tag v1.1.0
```

---

## 🔖 标签管理

### 创建标签

```bash
# 创建轻量标签
git tag v1.0.0

# 创建附注标签（推荐）
git tag -a v1.0.0 -m "版本 1.0.0 - 教程阶段"

# 为历史提交打标签
git tag -a v1.0.0 708adc2 -m "版本 1.0.0"
```

### 查看标签

```bash
# 列出所有标签
git tag

# 查看标签详情
git show v1.0.0
```

---

## 🚨 紧急回退

如果需要回退到某个稳定版本：

```bash
# 1. 查看提交历史，找到要回退的版本
git log --oneline

# 2. 回退到指定提交（保留更改在工作区）
git reset --soft <commit-hash>

# 3. 或硬回退（丢弃所有更改，谨慎！）
git reset --hard <commit-hash>

# 4. 示例：回退到教程版本
git reset --hard 708adc2
```

---

## 📚 参考资源

- [Git 官方文档](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git 可视化工具](https://git-school.github.io/visualizing-git/)

---

_最后更新: 2026-02-19_
