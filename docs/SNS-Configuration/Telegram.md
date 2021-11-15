# Telegram
1. 设置Telegram WebHook上报地址为机器人的接收地址`https://<机器人IP/URL地址>:<指定的机器人运行端口>/<指定的机器人密钥>`，设置方法请查看[官方文档](https://core.telegram.org/bots/api#setwebhook)  
WebHook地址例子:
```
https://127.0.0.1:8000/32eeAme5lwEG0KL
```
::: warning 注意
Telegram的WebHook上报地址需要`https`，这可能需要对机器人接收上报的地址做反向代理
:::

2. 如果你的服务器位于中国大陆，你还需要搭建Telegram Bot API的反向代理服务，关于如何搭建，请查看[TelegramBotAPI反向代理服务器搭建](#telegrambotapi反向代理服务器搭建)

## TelegramBotAPI反向代理服务器搭建
本篇教程将告诉你如何使用CloudFlare Workers搭建一个自己的TelegramBotAPI反向代理服务器

1. 前往[CloudFlare Workers](https://workers.cloudflare.com/)官网，注册一个账号，并新建一个Worker

2. 在脚本中写入以下代码  
`<Bot API Token>`:你的机器人token
``` js
const whitelist = ["/bot<Bot API Token>"];
const tg_host = "api.telegram.org";

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function validate(path) {
    for (var i = 0; i < whitelist.length; i++) {
        if (path.startsWith(whitelist[i]))
            return true;
    }
    return false;
}

async function handleRequest(request) {
    var u = new URL(request.url);
    u.host = tg_host;
    if (!validate(u.pathname))
        return new Response('Unauthorized', {
            status: 403
        });
    var req = new Request(u, {
        method: request.method,
        headers: request.headers,
        body: request.body
    });
    const result = await fetch(req);
    return result;
}
```
3. 点击保存并部署

4. 在将配置文件中的`BotAPILink`修改为这个Worker的地址即可