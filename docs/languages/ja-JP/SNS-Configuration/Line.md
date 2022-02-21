# Line
1. Line Bot WebHookのアップロードするアドレスを設定して`https://<ボットIP/URL>:<設定されたボットの実行ポート>/<設定されたボットのパスワード>`，[Developersのコンソール](https://developers.line.biz/console/)で設定できる それに、[APIを使う設定](https://developers.line.biz/en/reference/messaging-api/#set-webhook-endpoint-url)も使ってもいい  
WebHookアドレス例:
```
https://127.0.0.1:8000/32eeAme5lwEG0KL
```
::: warning 注意
LineのWebHookアップロードアドレスは`https`が必要なので、ボットのアップロードしたアドレスを逆方向プロキシする可能性もある
:::

2. もしあなたのサーバは中国にいたら、LINE Bot APIの逆方向プロキシを構築するも必要 どうやって構築できることに関して、これを見てください[LineBotAPIの逆方向プロキシするサーバの構築](l#LineBotAPIの逆方向プロキシするサーバの構築)

## LineBotAPIの逆方向プロキシサーバの構築
このガイダンスはこれからCloudFlare Workersを使って自分のLINE Bot APIの逆方向プロキシを構築する方法を教える  
もし自分が構築したくないなら、私がもう構築したものを使ってもいい，アドレス：[https://linebotapi.h123hh.workers.dev/](https://linebotapi.h123hh.workers.dev/)  
1. [CloudFlare Workers](https://workers.cloudflare.com/)アドレスにアクセスして、アカウントを新規に作成する それにWorkerも作成してください

2. スクリプトに以下のコードを入力してください  
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
3. 保存して部署する  
4. 配置ドキュメントの中にある`BotAPILink`をこのWorkerのアドレスに変えたら完成
