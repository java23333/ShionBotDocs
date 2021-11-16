const autometa_options = {
    site: {
        name: 'ShionBot',
    },
    canonical_base: 'https://shionbot.xyz',
};

module.exports = {
    title: 'Shion Bot',
    description: 'Shion Bot文档',
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        locales: {
            '/': {
                selectText: '语言',
                label: '简体中文',
                nav: [
                    { text: 'GitHub', link: 'https://github.com/nyancatda/ShionBot' }
                ],
                sidebar: [
                    ['/', '简介'],
                    {
                        title: '如何使用',
                        collapsable: false,
                        children: [
                            ['How-to-ues/Start', '部署'],
                            ['How-to-ues/configyml-template', 'config.yml模板']
                        ],
                    },
                    {
                        title: '聊天软件配置',
                        collapsable: false,
                        path: '/SNS-Configuration/',
                        children: [
                            ['SNS-Configuration/mirai-api-http(QQ)', 'mirai-api-http(QQ)'],
                            ['SNS-Configuration/Telegram', 'Telegram'],
                            ['SNS-Configuration/Line', 'Line'],
                            ['SNS-Configuration/KaiHeiLa', 'KaiHeiLa']
                        ],
                    },
                    {
                        title: '指令',
                        collapsable: false,
                        path: '/Command/',
                        children: [
                            ['Command/Inquire-the-Wiki', '查询Wiki'],
                            ['Command/help', '/help'],
                            ['Command/language', '/language'],
                        ],
                    },
                    ['/Multi-language', '多语言支持'],
                    ['/About', '关于这个项目']
                ]
            },
            '/languages/en-US/': {
                selectText: 'Language',
                label: 'English',
                nav: [
                    { text: 'GitHub', link: 'https://github.com/nyancatda/ShionBot' }
                ],
                sidebar: [
                    ['/languages/en-US/', 'Introduce'],
                    {
                        title: 'How to ues',
                        collapsable: false,
                        children: [
                            ['/languages/en-US/How-to-ues/Start', 'Start'],
                            ['/languages/en-US/How-to-ues/configyml-template', 'config.yml template']
                        ],
                    },
                    {
                        title: 'SNS Configuration',
                        collapsable: false,
                        path: '/languages/en-US/SNS-Configuration/',
                        children: [
                            ['/languages/en-US/SNS-Configuration/mirai-api-http(QQ)', 'mirai-api-http(QQ)'],
                            ['/languages/en-US/SNS-Configuration/Telegram', 'Telegram'],
                            ['/languages/en-US/SNS-Configuration/Line', 'Line'],
                            ['/languages/en-US/SNS-Configuration/KaiHeiLa', 'KaiHeiLa']
                        ],
                    },
                    {
                        title: 'Command',
                        collapsable: false,
                        path: '/languages/en-US/Command/',
                        children: [
                            ['/languages/en-US/Command/Inquire-the-Wiki', 'Inquire the Wiki'],
                            ['/languages/en-US/Command/help', '/help'],
                            ['/languages/en-US/Command/language', '/language'],
                        ],
                    },
                    ['/languages/en-US/Multi-language', 'Multi-language'],
                    ['/languages/en-US/About', 'About']
                ]
            },
            '/languages/ja-JP/': {
                selectText: 'Language',
                label: '日本語',
                nav: [
                    { text: 'GitHub', link: 'https://github.com/nyancatda/ShionBot' }
                ],
                sidebar: [
                    ['/languages/ja-JP/', '概要'],
                    {
                        title: '使い方',
                        collapsable: false,
                        children: [
                            ['/languages/ja-JP/How-to-ues/Start', 'スタートアップ'],
                            ['/languages/ja-JP/How-to-ues/configyml-template', 'config.ymlファイルテンプレート']
                        ],
                    },
                    {
                        title: 'チャットソフトのコンフィグ',
                        collapsable: false,
                        path: '/languages/ja-JP/SNS-Configuration/',
                        children: [
                            ['/languages/ja-JP/SNS-Configuration/mirai-api-http(QQ)', 'mirai-api-http(QQ)'],
                            ['/languages/ja-JP/SNS-Configuration/Telegram', 'Telegram'],
                            ['/languages/ja-JP/SNS-Configuration/Line', 'Line'],
                            ['/languages/ja-JP/SNS-Configuration/KaiHeiLa', 'KaiHeiLa']
                        ],
                    },
                    {
                        title: 'コマンド',
                        collapsable: false,
                        path: '/languages/ja-JP/Command/',
                        children: [
                            ['/languages/ja-JP/Command/Inquire-the-Wiki', '検索Wiki'],
                            ['/languages/ja-JP/Command/help', '/help'],
                            ['/languages/ja-JP/Command/language', '/language'],
                        ],
                    },
                    ['/languages/ja-JP/Multi-language', '多语言アダプテーション'],
                    ['/languages/ja-JP/About', 'について']
                ]
            }
        }
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Shion Bot',
            description: 'Shion Bot文档',
        },
        '/languages/en-US/': {
            lang: 'en-US',
            title: 'Shion Bot',
            description: 'Shion Bot Docs',
        },
        '/languages/ja-JP/': {
            lang: 'ja-JP',
            title: 'Shion Bot',
            description: 'Shion Bot文档',
        }
    },
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-task-checkbox'))
        }
    },
    plugins: ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],
    plugins: ['@vuepress/back-to-top'],
    plugins: ['autometa', autometa_options],
    plugins: {
        'sitemap': {
            hostname: 'https://shionbot.xyz',
            exclude: ["/404.html"]
        },
    }
}