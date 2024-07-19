---
next: markdown/
---

# 米粒的糖果屋

本文档基于 `VuePress` 。

## 项目结构

本项目的结构如下：

```
docs/ * 网站的根目录 *
├── .vuepress/ * vuepress的配置文件 *
├── fungame/ * 此目录下存放 `FunGame` 相关的文档 *
├───── README.md * 这是默认展示的页面 *
├── .../ * 可以添加任何目录 *
├── README.md * 这是网站的首页 *
└── ... * 可以添加任何md文件 *
```

## Markdown 语法

文档使用 *Markdown* 语法编写，第一次使用，请参见 [Markdown](markdown.html) 。

## 添加新的页面

在 VuePress 中添加一个新的页面非常简单。以下是添加一个新页面的步骤：

1. **创建新的 Markdown 文件**：在你的文档目录（通常是 `docs` 目录）中创建一个新的 Markdown 文件。
2. **重新启动 VuePress**（如果需要）：确保你的开发服务器正在运行，或者重新启动它。

### 1. 创建新的 Markdown 文件

在你的文档目录中创建一个新的 Markdown 文件。例如，如果你的文档目录是 `docs`，你可以创建一个名为 `new-page.md` 的文件：

```markdown
docs/
└── new-page.md
```

在 `new-page.md` 文件中，添加一些内容：

```markdown
---
title: 新页面标题
---

# 新页面标题

这是新页面的内容。
```

### 2. 重新启动 VuePress

确保你的开发服务器正在运行，或者重新启动它：

```bash
yarn docs:dev
```

访问 `http://localhost:8080/new-page`，你应该可以看到新创建的页面。

> 如果没有看到新页面，请尝试重新启动，或者在 [test](test.html) 页面测试。

### 完整示例

#### 文件结构

```plaintext
docs/
├── .vuepress/
│   └── config.js
└── new-page.md
```

#### `docs/new-page.md`

```markdown
---
title: 新页面标题
---

# 新页面标题

这是新页面的内容。
```

### 总结

以上步骤展示了如何在 VuePress 中新建一个页面。

## 更多 VuePress 帮助

参见 [VuePress](vuepress/) 页面以获得更多帮助。