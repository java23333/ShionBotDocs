---
sidebar: false
---
<style>
.button-go {
   background-color: #3eaf7c;
   border: none;
   color: white;
   padding: 15px 32px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 20px;
   border-radius: 4px;
   cursor:pointer;
}
</style>
<div align="center">
   <img width="160" :src="$withBase('/img/logo.png')" alt="logo">
   <h1>ShionBot</h1>
   <p>通过聊天软件对MediaWiki进行信息查询的机器人</p>
   <a href="How-to-ues/Start.html">
      <button class="button-go">立即开始 →</button>
   </a>
</div>
<br>
----
<br>

可以对使用聊天软件对MediaWiki搭建的站点进行信息查询，支持多种语言，跨平台兼容，支持QQ，Telegram，Line，KaiHeiLa

基于Gin和[mirai-api-http](https://github.com/project-mirai/mirai-api-http)制作