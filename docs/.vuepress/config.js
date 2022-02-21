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
                    { text: '文档', link: '/How-to-ues/Start' },
                    { text: 'GitHub', link: 'https://github.com/nyancatda/ShionBot' }
                ],
                sidebar: [
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
                    },
                    ['/Multi-language', '多语言支持'],
                    ['/About', '关于这个项目']
                ]
            },
            '/languages/en-US/': {
                selectText: 'Language',
                label: 'English',
                nav: [
                    { text: 'Docs', link: '/languages/en-US/How-to-ues/Start' },
                    { text: 'GitHub', link: 'https://github.com/nyancatda/ShionBot' }
                ],
                sidebar: [
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
                    },
                    ['/languages/en-US/Multi-language', 'Multi-language'],
                    ['/languages/en-US/About', 'About']
                ]
            },
            '/languages/ja-JP/': {
                selectText: '言語を選ぶ',
                label: '日本語',
                nav: [
                    { text: 'ドキュメント', link: '/languages/ja-JP/How-to-ues/Start' },
                    { text: 'GitHub', link: 'https://github.com/nyancatda/ShionBot' }
                ],
                sidebar: [
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
            description: 'Shion Bot文档 | 通过聊天软件对MediaWiki进行信息查询的机器人',
        },
        '/languages/en-US/': {
            lang: 'en-US',
            title: 'Shion Bot',
            description: 'Shion Bot Docs',
        },
        '/languages/ja-JP/': {
            lang: 'ja-JP',
            title: 'Shion Bot',
            description: 'Shion Botドキュメント',
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