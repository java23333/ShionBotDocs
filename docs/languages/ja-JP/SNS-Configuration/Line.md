# Line
1. Line Bot WebHookのアップロードするアドレスを設定して`https://<ボットIP/URL>:<設定されたボットの実行ポート>/<設定されたボットのパスワード>`，[Developersのコンソール](https://developers.line.biz/console/)で設定できる それに、[APIを使う設定](https://developers.line.biz/en/reference/messaging-api/#set-webhook-endpoint-url)も使ってもいい  
WebHookアドレス例:
```
https://127.0.0.1:8000/32eeAme5lwEG0KL
```
::: warning 注意
LineのWebHookアップロードアドレスは`https`が必要なので、ボットのアップロードしたアドレスを逆方向プロキシする可能性もある
:::

2. もしあなたのサーバは中国にいたら、Telegram Bot APIの逆方向プロキシを構築するも必要 どうやって構築できることに関して、これを見てください[LineBotAPIのプロキシするサーバの構築](l#linebotapi反向代理服务器搭建)

## LineBotAPI反向代理服务器搭建
本篇教程将告诉你如何使用CloudFlare Workers搭建一个自己的LineBotAPI反向代理服务器  
如果你懒得搭建，可以使用我已经搭建好的服务，地址：[https://linebotapi.h123hh.workers.dev/](https://linebotapi.h123hh.workers.dev/)  
1. 前往[CloudFlare Workers](https://workers.cloudflare.com/)官网，注册一个账号，并新建一个Worker

2. 在脚本中写入以下代码  
``` js
const whitelist = ["/v2/bot"];
const tg_host = "api.line.me";

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