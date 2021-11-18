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

## /language
::: warning 注意
修改只针对执行指令的用户生效，优先级高于默认配置，如果需要修改默认配置，请修改[配置文件](How-to-ues/configyml-template.md)
:::

1. `/language`

**展示可用语言列表**

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
::: warning 注意
修改只针对执行指令的用户生效，优先级高于默认配置，如果需要修改默认配置，请修改[配置文件](How-to-ues/configyml-template.md)
:::

1. `/wikiadd <Wiki名字> <Wiki链接>`

**添加一个Wiki站点**

例子:
```
/wikiadd mg zh.moegirl.org.cn
```

## /wikiupdate
::: warning 注意
修改只针对执行指令的用户生效，优先级高于默认配置，如果需要修改默认配置，请修改[配置文件](How-to-ues/configyml-template.md)
:::

1. `/wikiupdate <Wiki名字> <Wiki链接>`

**更新一个已经添加的Wiki站点的链接**

例子:
```
/wikiupdate mg zh.moegirl.org.cn
```

## /wikidelete
::: warning 注意
修改只针对执行指令的用户生效，优先级高于默认配置，如果需要修改默认配置，请修改[配置文件](How-to-ues/configyml-template.md)
:::

1. `/wikidelete <Wiki名字>`

**删除一个已经添加的Wiki站点**

例子:
```
/wikidelete mg
```