## config.yml file template

::: warning 
If you don't need to use a robot configuration, set 'Switch' to 'false' instead of leaving it blank
:::

::: tip 
You can specify the configuration file location with the '-config' parameter. The default is the program level directory
:::

``` yml
Run:
  #Specifies the port of the robot
  WebHookPort: 8000
  #Specifies WebHook Key (only letters and numbers)
  WebHookKey: 32eeAme5lwEG0KL
  #Specifies the language of the robot
  #Chinese:zh-CN,English:en-US,Japanese:ja-JP
  Language: zh-CN
SNS:
  QQ:
    #Whether to enable the QQ robot function
    Switch: true
    #HttpAPI address
    APILink: http://127.0.0.1:8888
    #Robot QQ number
    BotQQNumber: 1000000000
    #HttpAPI的VerifyKey
    VerifyKey: 5eadce46qw58
  Telegram:
    #Whether to enable the Telegram robot function
    Switch: true
    #Robot access toekn
    Token: 688975899:DDFqpsdMwunUvwAsxzDTzl8z_UkYzStrewM
    #TelegramAPI address
    BotAPILink: https://api.telegram.org/
  Line:
    #Whether to enable the Line robot function
    Switch: true
    #Robot access token
    ChannelAccessToken: Qik9O7sP49vCeY/b6zWaDa0......
    #LineBotAPI address
    BotAPILink: https://api.line.me/
  KaiHeiLa:
    #Whether to enable the KaiHeiLa robot function
    Switch: true
    #Robot access token
    Token: 5/SYT1Jxy=/mSkjHYtjsqq/2JY==
#Wiki Link, Support multiple, First is the main Wiki
Wiki:
  - 
    #Wiki Name, Instruction prefix, Like mw:Home
    WikiName: mw
    #Wiki's Link
    WikiLink: https://minewiki.net
  - 
    WikiName: mg
    WikiLink: https://zh.moegirl.org.cn
```
