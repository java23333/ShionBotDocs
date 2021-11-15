## config.yml template

::: warning 注意
如果你不需要使用某个机器人配置，请将`Switch`设置为`false`，而不是直接不填写
:::

``` yml
Run:
  #Specify Webhook receiving port
  WebHookPort: 8000
  #Robot WebHook Key (only letter and number)
  WebHookKey: 32eeAme5lwEG0KL
  #Language
  #Chinese:zh-CN,English:en-US,Japanese:ja-JP
  Language: zh-CN
SNS:
  QQ:
    #Whether to enable the QQ robot function
    Switch: true
    #HttpAPI address
    APILink: http://127.0.0.1:8888
    #QQ number of the robot
    BotQQNumber: 1000000000
    #HttpAPI‘s VerifyKey
    VerifyKey: 5eadce46qw58
  Telegram:
    #Whether to enable thr Telegram robot function
    Switch: true
    #Robot toekn
    Token: 688975899:DDFqpsdMwunUvwAsxzDTzl8z_UkYzStrewM
    #TelegramAPI address
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
#Wiki urls. Multiple URLs can be added. The first one is the default Wiki
Wiki:
  - 
    #Wiki name, the prefix of the command，example: mw:home
    WikiName: mw
    #Wiki's URLs
    WikiLink: https://minewiki.net
  - 
    WikiName: mg
    WikiLink: https://zh.moegirl.org.cn
```