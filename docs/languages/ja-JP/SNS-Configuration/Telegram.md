# Telegram
1. テルグラム WebHookのアップロードするアドレスはボットの受信アドレスに設定して`https://<ボットIP/URL>:<指定されたボットの実行ポート>/<指定されたボットのパスワード>`，詳しいのは[公式ファイル](https://core.telegram.org/bots/api#setwebhook)を見てください  
WebHookアドレスの例:
```
https://127.0.0.1:8000/32eeAme5lwEG0KL
```
::: warning 注意
LineのWebHookアップロードアドレスは`https`が必要なので、ボットのアップロードしたアドレスを逆方向プロキシする可能性もある
:::

2. もしあなたのサーバは中国にいたら、テルグラム Bot APIの逆方向プロキシを構築するも必要 どうやって構築できることに関して、これを見てください[テルグラムBotAPIプロキシするサーバの構築](#テルグラムBotAPIの逆方向プロキシするサーバの構築)

## テルグラムBotAPIの逆方向プロキシするサーバの構築
このガイダンスはこれからCloudFlare Workersを使って自分のテルグラム Bot APIの逆方向プロキシを構築する方法を教える

1. [CloudFlare Workers](https://workers.cloudflare.com/)アドレスにアクセスして、アカウントを新規に作成する それにWorkerも作成してください

2. スクリプトに以下のコードを入力してください  
`<Bot API Token>`:ボットtoken
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
3. 保存して部署する

4. 配置ドキュメントの中にある`BotAPILink`をこのWorkerのアドレスに変えたら完成
