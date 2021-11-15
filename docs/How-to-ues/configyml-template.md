## config.yml文件模板

::: warning 注意
如果你不需要使用某个机器人配置，请将`Switch`设置为`false`，而不是直接不填写
:::

``` yml
Run:
  #指定机器人的运行端口
  WebHookPort: 8000
  #指定机器人的WebHook密钥(只能使用字母与数字)
  WebHookKey: 32eeAme5lwEG0KL
  #指定机器人的语言
  #中文:zh-CN,英语:en-US,日语ja-JP
  Language: zh-CN
SNS:
  QQ:
    #是否启用QQ机器人部分
    Switch: true
    #HttpAPI地址
    APILink: http://127.0.0.1:8888
    #机器人QQ号
    BotQQNumber: 1000000000
    #HttpAPI的VerifyKey
    VerifyKey: 5eadce46qw58
  Telegram:
    #是否启用Telegram机器人部分
    Switch: true
    #机器人toekn
    Token: 688975899:DDFqpsdMwunUvwAsxzDTzl8z_UkYzStrewM
    #TelegramAPI地址
    BotAPILink: https://api.telegram.org/
  Line:
    #是否启用Line机器人部分
    Switch: true
    #机器人的访问token
    ChannelAccessToken: Qik9O7sP49vCeY/b6zWaDa0......
    #LineBotAPI地址
    BotAPILink: https://api.line.me/
  KaiHeiLa:
    #是否启用KaiHeiLa机器人部分
    Switch: true
    #机器人的token
    Token: 5/SYT1Jxy=/mSkjHYtjsqq/2JY==
#Wiki链接，支持多个，第一个为主Wiki
Wiki:
  - 
    #Wiki名字，即使命令前缀，例如mw:首页
    WikiName: mw
    #Wiki的链接
    WikiLink: https://minewiki.net
  - 
    WikiName: mg
    WikiLink: https://zh.moegirl.org.cn
```