const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"55b80f6b4720ec5274ac0b0ce62b539b",url:"./10308d12.html"},{revision:"46822ada6b371585806bd01409ee317b",url:"./1640c2dd.html"},{revision:"e166df14b4f102b4b094183cded2844f",url:"./16742c97.html"},{revision:"08d625d1756eb164847752b1bdc487c2",url:"./20e4c06c.html"},{revision:"1c463f5d354e5e2b795f61ff4d67f5fa",url:"./28580df5.html"},{revision:"b03adb0de6377c4386a1a5a90f568255",url:"./347090d0.html"},{revision:"fbc8ecdf2b43a187fe70d070cd77ae1a",url:"./404.html"},{revision:"25a8687fb2a55215c5c8f09fe8c02e45",url:"./47109d5a.html"},{revision:"0335a8c9ca5bafacf10d2dd9b6d2e27d",url:"./5496aeb4.html"},{revision:"66a8438146422adcfc945cb4840c71e9",url:"./5633b72d.html"},{revision:"d91740b792235e596ebd73c81fdba103",url:"./56782db4.html"},{revision:"550bc954e6f3cf65377751f11d5c0545",url:"./6933ffae.html"},{revision:"16737aba931f534c027892f6fe457a8c",url:"./6e150933.html"},{revision:"86cd832ca30be54af74f540c89ddf4af",url:"./729dca89.html"},{revision:"f44945edc28b16ec2f769cf34b433994",url:"./783f1e5f.html"},{revision:"bd583ca5bd673895b4a3e00b8be12f73",url:"./7c3563b0.html"},{revision:"78caa5399dc9adb239bbae773d07de89",url:"./857e383e.html"},{revision:"199cc616def085d6b6978d48ffded6fb",url:"./91005645.html"},{revision:"ecbba644eb9332719163453ffb3deaa5",url:"./a0c0ece2.html"},{revision:"c1e1aff7fb918a8ad22f256dcde5b24d",url:"./a10d2364.html"},{revision:"20324879488167145580b803e66abea2",url:"./a138b51e.html"},{revision:"c0a2adf4a7768cf28109a73e0d350944",url:"./a3cc4771.html"},{revision:"a9d18212ae29383863ed1e3ca1e6baa8",url:"./af10e3f2.html"},{revision:"95b70cf7128d92a4c5ec77a4acba1b2a",url:"./archives/2020/10/index.html"},{revision:"88eadf02cbf53d1b60d209a35e34bf6a",url:"./archives/2020/12/index.html"},{revision:"152cbfb320d13634ee25551c5715a4f2",url:"./archives/2020/index.html"},{revision:"27ddcbb69e0080d1fce69e9b7658f194",url:"./archives/2021/01/index.html"},{revision:"507998e043bda1dd6144860affca1ed1",url:"./archives/2021/02/index.html"},{revision:"7d1c86c4ea08faf2deaf0be25db51a2a",url:"./archives/2021/02/page/2/index.html"},{revision:"c504430d68c735cbc444a5a806dd2570",url:"./archives/2021/03/index.html"},{revision:"3ee4cd797f203e97105c9e0fd04a9240",url:"./archives/2021/07/index.html"},{revision:"0955fb3302af71cabf4ebe18b1cbf11c",url:"./archives/2021/11/index.html"},{revision:"fe244602f0df2d142e1640590d39096b",url:"./archives/2021/index.html"},{revision:"4f8092dedfc67cbac3ba81d2258b0fe6",url:"./archives/2021/page/2/index.html"},{revision:"aa5b038776e4db90517dc6e939a9eaf6",url:"./archives/2021/page/3/index.html"},{revision:"ac1e6c1d97ed52f66887d147b0405535",url:"./archives/2021/page/4/index.html"},{revision:"03700fddb74e87e913f716749cfe412a",url:"./archives/index.html"},{revision:"c9ac5525e965be1586580c2336b293c4",url:"./archives/page/2/index.html"},{revision:"ee7ba03e27763f5d0597616256f2018e",url:"./archives/page/3/index.html"},{revision:"faef9eedebb0b7272e0b3be67ed331e2",url:"./archives/page/4/index.html"},{revision:"c85688467c5459b0ef247026733730fb",url:"./b1cf8b54.html"},{revision:"2279190b6578f54e79d6f10c1bb2e49a",url:"./b77c21ed.html"},{revision:"d9637bc9383b7dce4119dc724f402834",url:"./b7c079be.html"},{revision:"d577b621816e6899e1d703464d5272b3",url:"./c271dbbf.html"},{revision:"458ddde5823fd0480fc6b1b3299721c1",url:"./categories/白票/index.html"},{revision:"8237fe334b33d0720369260ffbef4d5c",url:"./categories/黑苹果/index.html"},{revision:"4d615f7441677c7d99065c981023cd24",url:"./categories/爬虫/index.html"},{revision:"64340f2afba387ce3d8c1364eb420d1d",url:"./categories/破解/index.html"},{revision:"11752776ddd865cf78c7a3d05a61f719",url:"./categories/三下乡/index.html"},{revision:"06fe029ae279bc83eb66fd3543aeea1e",url:"./categories/市场调研/index.html"},{revision:"d9ea5b150e34937c69829894153e20e5",url:"./categories/数据可视化/index.html"},{revision:"6ba770515c8eefe476c5aacf12d2cec6",url:"./categories/数学建模/index.html"},{revision:"ec5d9208a1998dbcf211a4d957156193",url:"./categories/Aria2/index.html"},{revision:"a37ebbaf0cfa12bbfd39902b6018e892",url:"./categories/CIT/index.html"},{revision:"baa09b53907045f28445648bdae4658d",url:"./categories/Cloud/index.html"},{revision:"e653544c866ccaa714d50a41f3c53716",url:"./categories/FFmpeg/index.html"},{revision:"02cccf9483ea4a67f6dd98244f6486a0",url:"./categories/GIT/index.html"},{revision:"310a348c561735f6f1bb35f3e3ea82b0",url:"./categories/Hexo/index.html"},{revision:"d499a6b207aae828a3f7d43c6c030665",url:"./categories/index.html"},{revision:"3b9f4bdbd44734a6c553a07d1ac8f31c",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"41e44674bad6e2cc7d723ada9696adcd",url:"./d3134430.html"},{revision:"4a3569efc7f5ff5ddb45d7fb81434fba",url:"./d340ea43.html"},{revision:"d84ddc06109305c7b83d9e899710c367",url:"./d746f3f.html"},{revision:"40834611bde3c22de0dc2158ff4099c2",url:"./d8816516.html"},{revision:"7fdb33c7f639f65a3f0398c6ae4f15f9",url:"./daaed497.html"},{revision:"aabb7ee4f202ab9a6e1af04b70dadb4c",url:"./ee2697c6.html"},{revision:"9e171c1f0f6b24f91be31f413312b579",url:"./f50b5182.html"},{revision:"8328b666b0b4e52c08cd3dcc9e4cd84d",url:"./f58e0e38.html"},{revision:"b4de0e16b8038292d54ebd387161c04b",url:"./f71317ac.html"},{revision:"8ab90e195906ff91e28627756f8fd8c7",url:"./fcb7524a.html"},{revision:"d18e973ca3b3f9575cf5019c895e1ce8",url:"./fe4b7fcd.html"},{revision:"8199266fa22fa67b623c2213e75d94a4",url:"./Gallery/desktop.html"},{revision:"7d7e2813ab0b9196c8ee1e40391148e4",url:"./Gallery/index.html"},{revision:"75ed8dbe2fc8c4946a3a67c4a36d4032",url:"./image/pwaicons/manifest.json"},{revision:"4ed6220d23922d8038b01c6007fc836d",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"3e488af1fcd581fd87aa94ae96b0091a",url:"./link/index.html"},{revision:"fa63c267c8c81562c7fafdad0413dd2b",url:"./music/index.html"},{revision:"e64cbee2568e77b1c3b4c6b19aa67a53",url:"./page/2/index.html"},{revision:"3b63a201fae1e8fe39b72a7a8a79e2ac",url:"./page/3/index.html"},{revision:"3463b217bccae0f4d4dcefe13befe965",url:"./page/4/index.html"},{revision:"94bc17bfba4c9272d45564ac782dbff9",url:"./tags/白票/index.html"},{revision:"9cdad5dfdc0d7948006b9937c022e273",url:"./tags/多系统/index.html"},{revision:"5d2cabef751233d1aa9e640ee19a7990",url:"./tags/分享/index.html"},{revision:"9e25afb9f59c81513c41b0b1397233c8",url:"./tags/共享/index.html"},{revision:"9cc3f11c9547990247e5e4b340edaa35",url:"./tags/黑科技/index.html"},{revision:"2eb294cbddd58f4ed0e394046bb23aa8",url:"./tags/黑苹果/index.html"},{revision:"732d149f62d56a009c978620dd4c2994",url:"./tags/爬虫/index.html"},{revision:"55a666bfe481cee37270c44fc79685b1",url:"./tags/破解/index.html"},{revision:"f8982dc63cf6784e0f318103f23189cb",url:"./tags/情感分析/index.html"},{revision:"08ab3f68a9b583f6efe1454fe48643b6",url:"./tags/三下乡/index.html"},{revision:"ac924e4b8b5a678374e0a31da804c5a6",url:"./tags/市场调研/index.html"},{revision:"007434df9b051864ad1523cfcd749bbf",url:"./tags/数据可视化/index.html"},{revision:"7bf889f36cc394450b269c77f41be474",url:"./tags/数据清洗/index.html"},{revision:"98a8a4791a375b62ed107f69c995190a",url:"./tags/数学建模/index.html"},{revision:"0fb77b53bcbfeea0c682c8337040910c",url:"./tags/图标/index.html"},{revision:"0d414c3707819ce4bf9fffad5b6bad29",url:"./tags/系统/index.html"},{revision:"3b6d8e8583bd1d5f41bc8deedbaa7738",url:"./tags/选课/index.html"},{revision:"3ca0cf30f3c02c63ce7ed420ac64e662",url:"./tags/自动化/index.html"},{revision:"1ac844fd8b2f73710a00b1087711d4f9",url:"./tags/Aria2/index.html"},{revision:"2dab66b442707d698c6df448350808ad",url:"./tags/CIT/index.html"},{revision:"d7d934ce8b59c591eb09e9cbd9f57b4e",url:"./tags/Cloud/index.html"},{revision:"6b96028a83ec53726a15d1ad857e9a34",url:"./tags/FFmpeg/index.html"},{revision:"86fc381d5925ff951fae87dba22e314c",url:"./tags/GIT/index.html"},{revision:"76fbe13c218c9e2684cde69ea2ab41f3",url:"./tags/Hexo/index.html"},{revision:"9db0016dcf4033901ff7dbad6ce7da98",url:"./tags/index.html"},{revision:"c1875448616e8c4fc67e8344fc5b4b80",url:"./tags/Matlab/index.html"},{revision:"524f94c355d052e8b350a266e43437cf",url:"./tags/MOOC/index.html"},{revision:"f813860c201b8b16e65ee5b275a36af0",url:"./tags/Pandas/index.html"},{revision:"bdda6a9bf3d9293f9a0cf8fb438d4e37",url:"./tags/pyecharts/index.html"},{revision:"7c58401d24b4ba33496678d38dc1487f",url:"./tags/Python/index.html"},{revision:"917eff5ab6a4ed13c917384767730143",url:"./tags/WebScraper/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();