# mirai-api-http(QQ)
1. Enable the `http` and `webhook`

2. Enable the `enableVerify` and enter your `VerifyKey`

3. Set the webhook address as `http://<IP/URL>:<Port>/<Robot Key>`

Example:
```
http://127.0.0.1:8000/32eeAme5lwEG0KL
```

setting.yml template  
*The template is for reference only*
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