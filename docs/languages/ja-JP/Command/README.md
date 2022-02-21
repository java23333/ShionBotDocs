# コマンド

## 検索Wiki
1. `Wiki名前:検索したいこと`

例:
```
mw:◯◯
```

2. `[[検索したいこと]]`

例:
```
[[◯◯]]
```

## /help
1. `/help`

**ヘルプ**

例:
```
/help
```

## /userinfo
1. `/userinfo`

**自分の情報を調べる**

例:
```
/userinfo
```

## /language
::: warning 注意
このコマンドは実行されるユーザーのみ有効になるので、デフォルト配置より優先される デフォルト配置を修正したい場合は[配置ファイル](How-to-ues/configyml-template.md)
:::

1. `/language`

**使える言語リストの表示**
  
例:
```
/language
```

2. `/language 言語`

**言語の変更**

例:
```
/language zh-CN
```

## /wikiadd
::: warning 注意
このコマンドは実行されるユーザーのみ有効になるので、デフォルト配置より優先される デフォルト配置を修正したい場合は[配置ファイル](How-to-ues/configyml-template.md)
:::
::: tip 本身定義Wikiシステムについて
`https`サイト追加のみ、また、ロボットが配置されているサーバーは、リンク先URLにアクセスできる必要がある

もしMediaWikiはルートディレクトリに設置されている場合、`<Wikiリンク>`に対応するパスを入力する必要もある 例えばwikipediaのapiリンクは`https://zh.wikipedia.org/w/api.php`の場合　`zh.wikipedia.org/w`と入力する必要がある
:::

1. `/wikiadd <Wiki名> <Wikiリンク>`

**MediaWikiサイトの追加**

例:
```
/wikiadd mg zh.moegirl.org.cn
```

## /wikiupdate
::: warning 注意
このコマンドは実行されるユーザーのみ有効になるので、デフォルト配置より優先される デフォルト配置を修正したい場合は[配置ファイル](How-to-ues/configyml-template.md)
:::

1. `/wikiupdate <Wiki名> <Wikiリンク>`

**追加されたMediaWikiサイトの更新**

例:
```
/wikiupdate mg zh.moegirl.org.cn
```

## /wikidelete
::: warning 注意
このコマンドは実行されるユーザーのみ有効になるので、デフォルト配置より優先される デフォルト配置を修正したい場合は[配置ファイル](How-to-ues/configyml-template.md)
:::

1. `/wikidelete <Wiki名>`

**追加されたMediaWikiサイトの削除**

例:
```
/wikidelete mg
```

## /importdata
::: warning 注意
このコマンドは実行されるユーザーのみ有効になるので、デフォルト配置より優先される デフォルト配置を修正したい場合は[配置ファイル](How-to-ues/configyml-template.md)
:::

1. `/importdata <SNS> <他のユーザーのID>`

**プラットフォームを跨って他のユーザーの配置をインポートする　例：言語やWikiサイトなど**

例:
```
/importdata Telegram 1000000000
```
