# Command

## Inquire the Wiki
1. `Wiki name:What to search`

Example:
```
mw:home
```

2. `[[What to search]]`

Example:
```
[[home]]
```

## /help
1. `/help`

**Help**

Example:
```
/help
```

## /userinfo
1. `/userinfo`

**Search for your own user information**

Example:
```
/userinfo
```

## /language
::: warning Wrning
The modification takes effect only for the user who runs the command and has a higher priority than the default configuration. If you need to modify the default configuration, modify the [configuration file](How-to-ues/configyml-template.md)
:::

1. `/language`

**Displays a list of available languages**

Example:
```
/language
```

2. `/language language`

**Change language**

Example:
```
/language zh-CN
```

## /wikiadd
::: warning Warning
The modification takes effect only for the user who runs the command and has a higher priority than the default configuration. If you need to modify the default configuration, modify the [configuration file](How-to-ues/configyml-template.md)
:::
::: tip About custom Wiki systems
Only `HTTP` sites can be added, and the target Wiki must be accessible to the robot's server

If MediaWiki is deployed in a non-root directory, then The `Wiki link` also need to fill in the corresponding path. For example, the wikipedia API address is `https://zh.wikipedia.org/w/api.php`, you need to fill out `zh.wikipedia.org/w`
:::

1. `/wikiadd <Wiki Name> <Wiki Link>`

**Add a MediaWiki site**

Example:
```
/wikiadd mg zh.moegirl.org.cn
```

## /wikiupdate
::: warning Warning
The modification takes effect only for the user who runs the command and has a higher priority than the default configuration. If you need to modify the default configuration, modify the [configuration file](How-to-ues/configyml-template.md)
:::

1. `/wikiupdate <Wiki Name> <Wiki Link>`

**Update the link to the MediaWiki site that you have added**

Example:
```
/wikiupdate mg zh.moegirl.org.cn
```

## /wikidelete
::: warning Warning
修改只针对执行指令的用户生效，优先级高于默认配置，如果需要修改默认配置，请修改[配置文件](How-to-ues/configyml-template.md)
:::

1. `/wikidelete <Wiki名字>`

**删除一个已经添加的MediaWiki站点**

例子:
```
/wikidelete mg
```

## /importdata
::: warning 注意
修改只针对执行指令的用户生效，优先级高于默认配置，如果需要修改默认配置，请修改[配置文件](How-to-ues/configyml-template.md)
:::

1. `/importdata <聊天软件名字> <对方的用户ID>`

**跨平台导入其他用户的配置数据，例如语言，Wiki站点等**

例子:
```
/importdata Telegram 1000000000
```
