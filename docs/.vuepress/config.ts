import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { tocPlugin } from '@vuepress/plugin-toc'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    base: '/docs/',
    title: 'Milimoe Docs',
    description: 'Milimoe 开发文档',
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '指南',
                children: [
                    { text: 'FunGame', link: '/fungame/' },
                    { text: 'Oshima', link: '/oshima/' },
                    { text: 'RainBOT', link: '/rainbot/' },
                ],
            },
        ],
        sidebar: 'heading',
        repo: 'milimoe/docs',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: true
    }),
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {},
    }),
    plugins: [
        tocPlugin({
            componentName: 'TOC',
        }),
    ]
})
