# mirai-api-http(QQ)
1. `http`と`webhook`を起動する

2. `enableVerify`を起動してから、`VerifyKey`を設定する

3. webhookアドレスは`http://<ボットIP/URL>:<指定されたボットの実行ポート1>/<指定されたボットのパスワード>`に設定して

例:
```
http://127.0.0.1:8000/32eeAme5lwEG0KL
```

setting.ymlテンプレート  
*参考だけ*
``` yml
adapters:
  - http
  - webhook
enableVerify: true
verifyKey: 5eadce46qw58
debug: false
singleMode: false
cacheSize: 4096
adapterSettings:
  http:
    host: 0.0.0.0
    port: 8888
    cors: [*]
  webhook:
    destinations: 
    - 'http://127.0.0.1:8000/'
```