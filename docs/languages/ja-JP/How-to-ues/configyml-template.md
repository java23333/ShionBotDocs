## config.ymlファイルテンプレート

::: warning 注意
如果你不需要使用某个机器人配置，请将`Switch`设置为`false`，而不是直接不填写
:::

``` yml
Run:
  #指定されたボットのWebHookが受信ボット
  WebHookPort: 8000
  #指定されたWebHookのパスワード(ローマ字と数字だけ使える)
  WebHookKey: 32eeAme5lwEG0KL
  #ボットの言語を選ぶ
  #中国語:zh-CN,英語:en-US,日本語ja-JP
  Language: zh-CN
SNS:
  QQ:
    #QQボット部分をONにするか
    Switch: true
    #HttpAPIアドレス
    APILink: http://127.0.0.1:8888
    #ボットのQQアプリ番号
    BotQQNumber: 1000000000
    #HttpAPIのVerifyKey
    VerifyKey: 5eadce46qw58
  テルグラム:
    #テルグラムボット部分をONにするか
    Switch: true
    #ボットtoekn
    Token: 688975899:DDFqpsdMwunUvwAsxzDTzl8z_UkYzStrewM
    #TelegramAPIアドレス
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
#Wikiアドレス 複数、一番目が優先のWiki
Wiki:
  - 
    #Wiki名前，コマンドのプレフィックス，例:mw:◯◯
    WikiName: mw
    #Wikiアドレス
    WikiLink: https://minewiki.net
  - 
    WikiName: me
    WikiLink: https://zh.moegirl.org.cn
```