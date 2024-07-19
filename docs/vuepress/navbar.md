---
prev: github
next: sidebar
---

# 导航栏的配置

在 VuePress 中，导航栏（navbar）配置提供了多种选项，以满足不同项目的需求。以下是对导航栏配置的详细总结：

## 1. 基本导航栏配置

在 `.vuepress/config.js` 文件中配置 `navbar`：

```js
module.exports = {
  themeConfig: {
    navbar: [
      // 使用 text 和 link 创建导航项
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' },
    ],
  },
};
```

## 2. 分组导航项

使用 `children` 属性将导航项分组：

```js
module.exports = {
  themeConfig: {
    navbar: [
      {
        text: 'Guide',
        children: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'Reference',
        children: [
          { text: 'Configuration', link: '/reference/configuration' },
          { text: 'API', link: '/reference/api' },
        ],
      },
    ],
  },
};
```

## 3. 外部链接

导航项可以链接到外部网站：

```js
module.exports = {
  themeConfig: {
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'External', link: 'https://www.example.com' },
    ],
  },
};
```

## 4. 图标导航项

在导航项中使用图标：

```js
module.exports = {
  themeConfig: {
    navbar: [
      { text: 'Home', link: '/' },
      {
        text: 'GitHub',
        link: 'https://github.com/your-repo',
        icon: 'fab fa-github', // 使用 Font Awesome 图标
      },
    ],
  },
};
```

## 5. 多语言支持

为多语言站点配置导航栏：

```js
module.exports = {
  themeConfig: {
    locales: {
      '/': {
        lang: 'en-US',
        title: 'VuePress',
        description: 'Vue-powered Static Site Generator',
        navbar: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
        ],
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'VuePress',
        description: 'Vue 驱动的静态网站生成器',
        navbar: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/' },
        ],
      },
    },
  },
};
```

## 6. 自定义导航栏布局

可以使用自定义组件替换导航栏部分或整体：

```js
module.exports = {
  themeConfig: {
    navbar: false, // 禁用默认导航栏
  },
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-custom-block'), {
      // 自定义 Markdown 插件配置
    });
  },
};
```

在 `.vuepress/theme/components` 目录中创建自定义导航栏组件并在布局中引用。

## 7. 结合插件扩展导航栏功能

使用插件为导航栏添加额外功能，如搜索、用户认证等。

### 安装插件

```bash
npm install vuepress-plugin-search --save-dev
# 或者使用 yarn
yarn add vuepress-plugin-search --dev
```

### 配置插件

```js
const { searchPlugin } = require('vuepress-plugin-search');

module.exports = {
  plugins: [
    searchPlugin({
      // 配置插件选项
    }),
  ],
  themeConfig: {
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Search', link: '/search/' },
    ],
  },
};
```

## 总结

在 VuePress 中，导航栏（navbar）配置提供了灵活多样的选项，可以通过基本配置、分组导航项、外部链接、图标导航、多语言支持、自定义布局和插件扩展等方式来实现。根据项目需求，选择合适的配置方式，以优化用户的导航体验。