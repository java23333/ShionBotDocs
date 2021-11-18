# 指令

## 查询Wiki
1. `<Wiki名字>:<需要查询的内容>`

例子:
```
mw:首页
```

2. `[[<需要查询的内容>]]`

例子:
```
[[首页]]
```

## /help
1. `/help`

**查看帮助**

例子:
```
/help
```

## /language
::: warning 注意
修改只针对执行指令的用户生效，优先级高于默认配置，如果需要修改默认配置，请修改[配置文件](How-to-ues/configyml-template.md)
:::

1. `/language`

**展示可用语言列表**

例子:
```
/language
```

2. `/language <语言>`

**修改语言**

例子:
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