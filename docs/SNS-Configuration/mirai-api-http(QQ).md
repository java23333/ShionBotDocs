# mirai-api-http(QQ)
1. 启用`htt`p和`webhook`

2. 启用`enableVerify`，并设置`VerifyKey`

3. 将webhook地址设置为`http://<机器人IP/URL地址>:<指定的机器人运行端口>/<指定的机器人密钥>`

例子:
```
http://127.0.0.1:8000/32eeAme5lwEG0KL
```

setting.yml模板  
*仅供参考*
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