---
prev: frontmatter
next: navbar
---

# 启用 GitHub 关联

在 VuePress 中，你可以在每个页面的底部添加一个“编辑此页”链接，指向 GitHub 仓库中的对应文件。这样读者可以方便地提出改进建议或直接编辑文档。以下是详细的配置步骤：

## 配置 GitHub 编辑此页链接

### 1. 配置 `.vuepress/config.js`

在你的 VuePress 项目中，打开或创建 `.vuepress/config.js` 文件，并添加如下配置：

```js
module.exports = {
  themeConfig: {
    repo: 'your-github-username/your-repo-name', // GitHub 仓库的 URL
    docsDir: 'docs', // 文档所在目录，如果不是默认的 `docs` 目录，请更改此值
    editLinks: true, // 启用编辑链接
    editLinkText: '在 GitHub 上编辑此页', // 编辑链接的文本
  },
};
```

### 2. Frontmatter 设置（可选）

如果需要为特定页面设置不同的编辑链接，可以在该页面的 Frontmatter 中添加 `editLink` 字段。例如：

```markdown
---
title: 特定页面
editLink: true
---
```

## 示例

假设你的 GitHub 仓库名为 `your-repo-name`，文档位于仓库的 `docs` 目录中：

```js
module.exports = {
  themeConfig: {
    repo: 'your-github-username/your-repo-name',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
  },
};
```

*完整示例*

```js
module.exports = {
  themeConfig: {
    repo: 'your-github-username/your-repo-name',
    docsDir: 'docs',
    docsBranch: 'main', // 如果文档在其他分支，请设置此项，默认为 `main` 或 `master`
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
  },
};
```

## 效果

配置完成后，每个页面的底部都会显示一个“在 GitHub 上编辑此页”的链接，点击该链接会跳转到 GitHub 仓库中对应文件的编辑页面。这样，读者可以方便地对文档进行编辑和改进。

## 总结

通过上述配置，你可以在 VuePress 文档的每个页面底部添加“在 GitHub 上编辑此页”链接，提升文档的协作性和易用性。这对于开源项目和需要社区贡献的文档尤其有用。