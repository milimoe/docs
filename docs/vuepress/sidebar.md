---
prev: navbar
next: /vuepress/
---

# 侧边栏的配置

在 VuePress 中，侧边栏配置提供了多种选项，灵活性和可定制性都很高。以下是对侧边栏配置的详细总结：

## 1. 禁用侧边栏

将侧边栏设置为 `false` 可以禁用侧边栏：

```js
module.exports = {
  themeConfig: {
    sidebar: false,
  },
};
```

或者在某个页面的 Frontmatter 中禁用：

```markdown
---
sidebar: false
---

# 这个页面没有侧边栏
```

## 2. 自动生成侧边栏（基于标题）

将侧边栏设置为 `'heading'` 时，侧边栏会根据页面标题自动生成：

```js
module.exports = {
  themeConfig: {
    sidebar: 'heading',
  },
};
```

可以在页面的 Frontmatter 中单独配置：

```markdown
---
sidebar: 'heading'
---

# 自动生成的侧边栏
```

## 3. 自定义侧边栏配置

### 单个侧边栏配置

你可以手动定义侧边栏的内容：

```js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        children: [
          '/guide/introduction.md',
          '/guide/getting-started.md',
        ],
      },
      {
        text: 'Reference',
        collapsible: true,
        children: [
          '/reference/configuration.md',
          '/reference/api.md',
        ],
      },
    ],
  },
};
```

### 多个侧边栏配置（基于路径）

根据路径定义不同的侧边栏配置：

```js
module.exports = {
  themeConfig: {
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsible: true,
          children: [
            '/guide/introduction.md',
            '/guide/getting-started.md',
          ],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          collapsible: true,
          children: [
            '/reference/configuration.md',
            '/reference/api.md',
          ],
        },
      ],
    },
  },
};
```

## 4. 使用插件自动生成侧边栏

使用 `vuepress-auto-sidebar` 插件可以根据文件系统结构自动生成侧边栏：

### 安装插件

```bash
npm install vuepress-auto-sidebar --save-dev
# 或者使用 yarn
yarn add vuepress-auto-sidebar --dev
```

### 配置插件

在 `.vuepress/config.js` 中配置插件：

```js
const { autoSidebarPlugin } = require('vuepress-auto-sidebar');

module.exports = {
  plugins: [
    autoSidebarPlugin({
      // 可根据需要配置插件选项
    }),
  ],
};
```

## 5. 综合示例

结合不同的配置方式，根据具体需求设置侧边栏：

```js
const { autoSidebarPlugin } = require('vuepress-auto-sidebar');

module.exports = {
  plugins: [
    autoSidebarPlugin(),
  ],
  themeConfig: {
    sidebar: {
      '/guide/': 'heading',
      '/reference/': [
        {
          text: 'Reference',
          collapsible: true,
          children: [
            '/reference/configuration.md',
            '/reference/api.md',
          ],
        },
      ],
    },
  },
};
```

## 总结

在 VuePress 中，侧边栏配置具有很高的灵活性，可以通过禁用、自动生成、手动配置以及使用插件等多种方式来实现。根据项目需求，可以选择最合适的配置方式，以优化文档的导航体验。