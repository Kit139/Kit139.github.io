"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"6908e5ae6552678a3ca0cb4a0dda8bb1",url:"./2020/12/24/第一篇Hexo blog文章——Hexo + Gitee 部署个人博客/index.html"},{revision:"ebba20b7574ba249ad9bab12edd0a2fa",url:"./2020/12/25/Gitkarken Pro版本的破解使用/index.html"},{revision:"193e07679f35a2d972e2d4875877ac12",url:"./2020/12/27/同济校友世纪互联白票/index.html"},{revision:"fa253a0e5f6cd03170c28ada4525190f",url:"./2020/12/28/给hexo Butterfly扩展图标/index.html"},{revision:"96e9d920718cc95dc31dc049e5e56dc2",url:"./2021/01/02/20210102寒假第一交流会——黑屏见翻车？不！我在检测认真质量/index.html"},{revision:"17a103194800fa85e90a13c066f46d73",url:"./2021/01/10/Python入门首选，Requests 库的基本使用/index.html"},{revision:"bbcc38ef0ceb647deb2c6ebf8102a9c7",url:"./2021/01/15/Python爬取股吧评论+情感分析/index.html"},{revision:"659bfbd818390ffaff66098057e32f99",url:"./2021/01/17/Pandas网页Table表格型数据爬虫+快代理实战/index.html"},{revision:"1481de67c9f766d422dfbe4be68ad82d",url:"./2021/01/24/20210124CITPython交流+WebScraper可视化爬虫/index.html"},{revision:"2b0f7ff6c31baa0c2fe5584ef77fcd0b",url:"./2021/01/31/Python3网络爬虫开发实战教程线上整理/index.html"},{revision:"8e56b82691eb5ab010673211ff02fb62",url:"./2021/02/01/Cloud Sharing/index.html"},{revision:"060cba69c6b93dfd8c46f4036b94819e",url:"./2021/02/02/Mac下Aria2c安装配置（附Win版Aria2懒人包）/index.html"},{revision:"667e6d7ecaf8fe624adad8f562ceb568",url:"./404.html"},{revision:"493de770f03297ae6810562b137ce38b",url:"./archives/2020/12/index.html"},{revision:"1afecec366aec9114ab89ef35bc11f56",url:"./archives/2020/index.html"},{revision:"c4dd985faef3dc7938b701ee9d519bda",url:"./archives/2021/01/index.html"},{revision:"20115ef3ddabf0953aa5fc801b28f10d",url:"./archives/2021/02/index.html"},{revision:"7957780e5a02b75c0e8571d3a0d75652",url:"./archives/2021/index.html"},{revision:"a4ea16ab551afab2b1f11e1d331ed081",url:"./archives/index.html"},{revision:"18088b95b4dd6f892bd7b37f29772cae",url:"./archives/page/2/index.html"},{revision:"2ada2deb2174e8d54e4e8154f36953ac",url:"./categories/白票/index.html"},{revision:"4235bc53580effe1252f53f101d07dec",url:"./categories/爬虫/index.html"},{revision:"80d8a18ddcbdedfc398fb231323dcd63",url:"./categories/破解/index.html"},{revision:"5afac0c8064bea6f5956e905ad35f144",url:"./categories/Aria2/index.html"},{revision:"7093ae5bab0f4e4970927759f2758da6",url:"./categories/CIT/index.html"},{revision:"11fa612e3908b95f2cb50a996a59ca8f",url:"./categories/Cloud/index.html"},{revision:"8507887eedfcfb62b04f5f95aa69830b",url:"./categories/Hexo/index.html"},{revision:"3f7ed759f26beca2fd7d127c3eeaeaf0",url:"./categories/index.html"},{revision:"3b9f4bdbd44734a6c553a07d1ac8f31c",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"f4fe77ebbe8816dff4819140ecdc1dc2",url:"./Gallery/desktop.html"},{revision:"929ea4bb2fd5c90b34cb5bca58b906f3",url:"./Gallery/index.html"},{revision:"d74ce21c3aabdadd057be0a946a600b9",url:"./image/pwaicons/manifest.json"},{revision:"95d45cd490ecfadd4a924d98327699ed",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"4ab2c667350bc2119cc2af504b9c0596",url:"./link/index.html"},{revision:"34f42c5be837470a11922754e35052b3",url:"./music/index.html"},{revision:"ab75b143ccaaabf03d8c6a92680c51db",url:"./page/2/index.html"},{revision:"e5a03e1175b342a0d239630ea51c34d0",url:"./tags/白票/index.html"},{revision:"46c25daa46a5640a8c813aa41005bc9e",url:"./tags/分享/index.html"},{revision:"96027b6fdd075850b4444c9f01467935",url:"./tags/共享/index.html"},{revision:"f98eca439fffe45e6e5701cdc3941dd3",url:"./tags/黑科技/index.html"},{revision:"42f59eada39eff2369de99f954cfd2b2",url:"./tags/爬虫/index.html"},{revision:"b33c2924320a7e7ce726395034c1e3e1",url:"./tags/破解/index.html"},{revision:"63fe498f3806e2abca62437cdd15b7cc",url:"./tags/情感分析/index.html"},{revision:"db629e91c233341e1f57f783c8fb490b",url:"./tags/图标/index.html"},{revision:"4af73b2eaa43bc0faab6b2dd5b6d92b4",url:"./tags/选课/index.html"},{revision:"61aed0c4bbc7be8af173b07f587ba1df",url:"./tags/自动化/index.html"},{revision:"43e6e915a5e23522cdc1041e99307ab9",url:"./tags/Aria2/index.html"},{revision:"b9634fdd0c14c7c3d998eeb32a4b13a1",url:"./tags/CIT/index.html"},{revision:"adb468c635894562eb9726c4c46c8292",url:"./tags/Cloud/index.html"},{revision:"a6f0d44e5b52b27e4112cce86a793568",url:"./tags/Hexo/index.html"},{revision:"fcac294fda26c1599bcebf8907489415",url:"./tags/index.html"},{revision:"e08531f69ee8dc302c548e0b3a2f204d",url:"./tags/Pandas/index.html"},{revision:"c030969d26b298419eb339fefe2aafa1",url:"./tags/Python/index.html"},{revision:"75b6e08bc2f1b3d229eb8f927208c478",url:"./tags/WebScraper/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();