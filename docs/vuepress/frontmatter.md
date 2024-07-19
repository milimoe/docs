---
prev: /vuepress/
next: github
---

# 前言介绍

在 VuePress 中，Frontmatter 是每个 Markdown 文件顶部的 YAML 或 JSON 格式的数据块，用于配置页面的元数据和一些特定功能。以下是对 VuePress 中 Frontmatter 配置的详细总结：

## 1. 标题和描述

设置页面的标题和描述，有助于 SEO 和社交分享：

```markdown
---
title: 页面标题
description: 这是一段页面描述
---
```

## 2. 路径和重定向

配置页面的自定义路径或设置重定向：

```markdown
---
permalink: /custom-path/
redirect_from:
  - /old-path/
---
```

## 3. 导航和侧边栏

### 侧边栏

配置页面的侧边栏：

```markdown
---
sidebar: 'heading'  # 自动生成侧边栏
sidebar: false  # 禁用侧边栏
sidebarDepth: 2  # 侧边栏标题深度
---
```

### 目录

是否在页面中显示目录：

```markdown
---
toc: true  # 显示目录
---
```

## 4. 布局和组件

### 布局

指定页面的布局：

```markdown
---
layout: LayoutName
---
```

### 组件

启用或禁用页面的某些组件：

```markdown
---
navbar: false  # 禁用导航栏
footer: false  # 禁用页脚
---
```

## 5. Meta 标签

为页面添加自定义 meta 标签：

```markdown
---
head:
  - - meta
    - name: keywords
      content: vuepress, docs
  - - meta
    - name: author
      content: YourName
---
```

## 6. 自定义 CSS 和 JS

在页面中添加自定义的 CSS 或 JS：

```markdown
---
styles:
  - /path/to/custom.css
scripts:
  - /path/to/custom.js
---
```

## 7. 显示和状态

### 状态标签

为页面设置状态标签，如草稿、发布等：

```markdown
---
status: draft
---
```

### 版权信息

设置页面的版权信息：

```markdown
---
copyright: © 2024 YourName
---
```

## 8. 多语言支持

设置页面的语言信息：

```markdown
---
lang: en-US
---
```

## 9. 自定义 Frontmatter

添加自定义的 Frontmatter 字段，以便在模板或组件中使用：

```markdown
---
customField: customValue
---
```

## 综合示例

```markdown
---
title: My Page Title
description: This is a detailed description of my page.
permalink: /custom-path/
redirect_from:
  - /old-path/
sidebar: 'heading'
sidebarDepth: 2
toc: true
layout: CustomLayout
navbar: false
footer: false
head:
  - - meta
    - name: keywords
      content: vuepress, docs
  - - meta
    - name: author
      content: YourName
styles:
  - /styles/custom.css
scripts:
  - /scripts/custom.js
status: draft
copyright: © 2024 YourName
lang: en-US
customField: customValue
---
```

## 上下页导航

在 VuePress 中，使用 Frontmatter 配置上一页和下一页导航，可以帮助读者更轻松地浏览文档。可以通过以下方式设置：

### 上一篇和下一篇导航配置

使用 Frontmatter 中的 `prev` 和 `next` 字段来指定上一页和下一页。

#### 示例

在 Markdown 文件中设置 `prev` 和 `next` 字段：

```markdown
---
title: 当前页面标题
prev: /path/to/previous-page
next: /path/to/next-page
---
```

例如：

```markdown
---
title: 第二章
prev: /chapter-1/
next: /chapter-3/
---
```

这样，在页面底部会自动生成指向前一篇和后一篇的链接。

### 自动生成上一篇和下一篇

如果不手动配置 `prev` 和 `next`，VuePress 会自动根据目录结构生成这些导航链接。确保你的文档按照正确的顺序组织在文件夹中，并且在 `.vuepress/config.js` 中配置好侧边栏：

```js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        text: '章节',
        children: [
          '/chapter-1.md',
          '/chapter-2.md',
          '/chapter-3.md',
        ],
      },
    ],
  },
};
```

### 自定义组件

你也可以自定义上一页和下一页导航组件。创建一个自定义组件并在模板中使用：

```vue
<template>
  <div class="navigation-links">
    <router-link v-if="$page.frontmatter.prev" :to="$page.frontmatter.prev">上一页</router-link>
    <router-link v-if="$page.frontmatter.next" :to="$page.frontmatter.next">下一页</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    prev() {
      return this.$page.frontmatter.prev;
    },
    next() {
      return this.$page.frontmatter.next;
    },
  },
};
</script>
```

将这个组件放在页面模板中，确保导航链接按预期显示。

## 总结

在 VuePress 中，Frontmatter 配置为每个页面提供了丰富的定制选项。通过配置标题、描述、路径、侧边栏、布局、组件、自定义 meta 标签、CSS 和 JS、多语言支持等，你可以灵活地控制每个页面的呈现方式和功能。这使得 VuePress 在创建结构化文档和技术文档时变得非常强大和易用。
