const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"626a79c5fc35819958ce96b5f2265c2f",url:"./10308d12.html"},{revision:"b235885a849b45273635811602e8dd0c",url:"./14df227a.html"},{revision:"9ea52c9bbbda2e72c5a377bf75c42908",url:"./1640c2dd.html"},{revision:"c5e9dc61e6f0c3db867af5f6b2aa6ad2",url:"./1659fa3e.html"},{revision:"fc4dc9ffe10b63690e6f655a4c6b5bf1",url:"./16742c97.html"},{revision:"ecf9fbb997a9e1151502d0640d9e1054",url:"./1f321105.html"},{revision:"7dcdd868ff52b5271ec8a434c3f3afce",url:"./2004cd38.html"},{revision:"49ec5868f455eea49bad068e049f2f65",url:"./20e4c06c.html"},{revision:"e1b40f8933f7edf2f312f60413c8e87b",url:"./28580df5.html"},{revision:"a77c36bde284445884732dbcb5a7ec2a",url:"./347090d0.html"},{revision:"12c81b673f295cdcbc955e6abce24123",url:"./36060a3b.html"},{revision:"5c0232cb3f0d53c67677a283eb3e7b26",url:"./36b38058.html"},{revision:"183b5939c70fdb67100ce84e707c4fa2",url:"./404.html"},{revision:"f87423b739ea2558edf5fc8e308f1cd7",url:"./47109d5a.html"},{revision:"00fa8057cdb782efbbbf7dea437f3557",url:"./5496aeb4.html"},{revision:"5bb47360d762f7d0c714f267e83508df",url:"./5633b72d.html"},{revision:"5b4e0cf53e413a2ff3a9260eff4ae315",url:"./56782db4.html"},{revision:"abf72367db9bc55419eeab21a76e4260",url:"./6933ffae.html"},{revision:"3e3e898bb9eb832fad5008c6d4c3eb30",url:"./6e150933.html"},{revision:"84128953aa54d6d2481b11fa0b321e71",url:"./729dca89.html"},{revision:"d1c8582d60eda5fef805a13b3b877ed1",url:"./783f1e5f.html"},{revision:"c5f3b2a59d3ece57d9e88de824a7b52f",url:"./799f587.html"},{revision:"07dda33b8715f6b1f6d2dcf989e57a55",url:"./7c3563b0.html"},{revision:"4ae92d4728a938dd3f7a175608af38ef",url:"./857e383e.html"},{revision:"5e5876a703e935f2c8fca3e70e8b6860",url:"./91005645.html"},{revision:"256b109efdce2874b9ca4c48d1fed9c5",url:"./a0c0ece2.html"},{revision:"7e2ddf3fd11ce0b05135355bacdc6283",url:"./a10d2364.html"},{revision:"58c9552b22f5cdf778527333b2a21df7",url:"./a138b51e.html"},{revision:"48d370b5f2ce01645dbf46df36a42c78",url:"./a3cc4771.html"},{revision:"5989fb588fa84a5a14c33a0bd79e4f67",url:"./af10e3f2.html"},{revision:"8b0b8a79d04cbea67674f68977e9347b",url:"./archives/2020/10/index.html"},{revision:"0c8798e4febed316d79d34d4646c958c",url:"./archives/2020/12/index.html"},{revision:"1bd0f5299fdf781138f34bb93a706c8e",url:"./archives/2020/index.html"},{revision:"62880f7fcc85ffe23aeb94cf51b65f9c",url:"./archives/2021/01/index.html"},{revision:"dd8d014fa06817916eea6438d407b7c5",url:"./archives/2021/02/index.html"},{revision:"dfb64a36949d13ac738bd021ffd066c3",url:"./archives/2021/02/page/2/index.html"},{revision:"e43e1697587a95104065755a5760cfc5",url:"./archives/2021/03/index.html"},{revision:"caffa28ca07ccc83ced8fe698c4a9bb1",url:"./archives/2021/07/index.html"},{revision:"7dfe5a0408eb5ad32c7d8ef19afedb7c",url:"./archives/2021/10/index.html"},{revision:"a7a85fd785c71eae3abfda2a97f16e36",url:"./archives/2021/11/index.html"},{revision:"3ba915a41f7c64ec0ced005dcdc11ddd",url:"./archives/2021/12/index.html"},{revision:"aa81a1478748070aeec6ec45869c3b62",url:"./archives/2021/index.html"},{revision:"ac1fd82816f235496c96a5b2334d3920",url:"./archives/2021/page/2/index.html"},{revision:"4b4db81a6fa846167a6e3847f26ef1fb",url:"./archives/2021/page/3/index.html"},{revision:"d283c3bd4cc493105c902fad183c1306",url:"./archives/2021/page/4/index.html"},{revision:"9e3d72b9df4910611a013a34effd9636",url:"./archives/2021/page/5/index.html"},{revision:"f253a288cd02420b12b9420ac527ee26",url:"./archives/index.html"},{revision:"ae7284ad79cddb0efe570cd4a710d6da",url:"./archives/page/2/index.html"},{revision:"d20a3a44e1e7ef063b97e3af44e709e7",url:"./archives/page/3/index.html"},{revision:"eaed1985ce13c935d3417ef0955c2ba9",url:"./archives/page/4/index.html"},{revision:"56c796d2833e1628e1226f98d448b88f",url:"./archives/page/5/index.html"},{revision:"90c86d95da0020579e14e639ff5b56f7",url:"./archives/page/6/index.html"},{revision:"e52185fb16feb8aee948a90a51977a21",url:"./b1cf8b54.html"},{revision:"0608ddbbf94482a8010e0b58dbc11325",url:"./b77c21ed.html"},{revision:"88ea30eee253667769512d5723597783",url:"./b7c079be.html"},{revision:"2390060e4f35d6af3dcd21a901ff5aa9",url:"./c271dbbf.html"},{revision:"903c8e5af7659f7612057b9e5cbc2ebb",url:"./c29e6364.html"},{revision:"80fe68d14232ff1127dae081d4c15552",url:"./c7abe168.html"},{revision:"99a9ddb524498c7cfa4c2cb5a8ff1295",url:"./categories/《数据可视化》——基于Python的应用/index.html"},{revision:"885f3859bc216aa09998c9176a171969",url:"./categories/白票/index.html"},{revision:"cdc367a54c819e3a494ea9f45980f95e",url:"./categories/黑苹果/index.html"},{revision:"a36a15accba78dfadca7be772e88ed79",url:"./categories/爬虫/index.html"},{revision:"f179318355c4c2196bd1f73f28e439aa",url:"./categories/破解/index.html"},{revision:"f5191b217a620346861905b20b20be85",url:"./categories/三下乡/index.html"},{revision:"e1d16f6cc9d778fc5dc5f1d1a866dc11",url:"./categories/市场调研/index.html"},{revision:"e0cfbef79ac6c5b25cc82466acbdce0b",url:"./categories/数据可视化/index.html"},{revision:"47580d84ecc37cd6a3f58f7a2623acdc",url:"./categories/数学建模/index.html"},{revision:"33ad12e186d91793dc7fc510d4f30cdd",url:"./categories/Aria2/index.html"},{revision:"5372a05a606b3220fdddba2de5a2b0a4",url:"./categories/CIT/index.html"},{revision:"394f1feb25f4f11f9324e9ae4111cf7d",url:"./categories/Cloud/index.html"},{revision:"79029ea5993f0666fa89aef83885660a",url:"./categories/FFmpeg/index.html"},{revision:"f90e11d2c2799a9d991a44c755783ad8",url:"./categories/GIT/index.html"},{revision:"8b5ca8240cb4608fdbb50958d74b0fa5",url:"./categories/Hexo/index.html"},{revision:"9fc519068bc9c3904e4ccc77488ee6e2",url:"./categories/index.html"},{revision:"a6ee4ecc9bc0ff1c3d23bc11c1a18320",url:"./categories/Python/index.html"},{revision:"39a0e680d10735ac468cc11569bdc34a",url:"./cec18dd8.html"},{revision:"59593cd47f7b3cb20a25fb72c94ad059",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"457b025c750e670bd41734098a35de02",url:"./d3134430.html"},{revision:"1b67c695ffe339c4d6c80ab65a01c065",url:"./d340ea43.html"},{revision:"ed66ec9d6849bddde2a1ae9f2f9d8645",url:"./d746f3f.html"},{revision:"785eb162427f1e6e4e6154104b8c9b85",url:"./d8816516.html"},{revision:"f57614b3c412909c2ce0c9b1dca2b25a",url:"./daaed497.html"},{revision:"78fdca399872fcfa5e3954b68dc19866",url:"./df6316d8.html"},{revision:"f83116e59210735a6f9ea0835f4cdac7",url:"./ee2697c6.html"},{revision:"96b7300af5e8a50327b42e6d3754406f",url:"./f49b880f.html"},{revision:"3ce4f8cf096f21203b56937710deb9af",url:"./f50b5182.html"},{revision:"88def75ad1ecc7ebdee0452cfc57f1e8",url:"./f58e0e38.html"},{revision:"b748d14d7456879a954cde2dd228917d",url:"./f71317ac.html"},{revision:"dd41a11f81d062adef4daddfecd1d54d",url:"./fcb7524a.html"},{revision:"82499f910aaa613cd717426d63632297",url:"./fe4b7fcd.html"},{revision:"e7c7b2b9419b6d7c760865fd2c8fc20b",url:"./ff635cd4.html"},{revision:"576b933fc3567a3144d9f2c4e4b1a745",url:"./ff915ea5.html"},{revision:"1c56ca34434bf4c2db8598f8742c14ec",url:"./Gallery/desktop.html"},{revision:"e591e712593028ff269139b90a633789",url:"./Gallery/index.html"},{revision:"75ed8dbe2fc8c4946a3a67c4a36d4032",url:"./image/pwaicons/manifest.json"},{revision:"b5881d144f4bd5567a5c2c7eb7a2345f",url:"./index.html"},{revision:"240e062def7897dd4c03a12bf07fdc65",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"33b3c0e197c029d5b198059220bbd5ab",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"644a316614fa36b23c2dbd9fee84914a",url:"./link/index.html"},{revision:"944c55107e2eb89247479d3738d66fc8",url:"./music/index.html"},{revision:"9ba3349c5b953ab37e78f079b909eaf9",url:"./page/2/index.html"},{revision:"a34aa24834052db3b45b687fd9077f64",url:"./page/3/index.html"},{revision:"b5f5d3aef9a107c3444f15019ba26fe2",url:"./page/4/index.html"},{revision:"d264d8f21a0903d235bc3c606e0d25b7",url:"./page/5/index.html"},{revision:"ce0bb13d74e4666b9cb05326601ef228",url:"./page/6/index.html"},{revision:"166b34b3d7603d2c1ea2acd06a7d7876",url:"./tags/《数据可视化》——基于Python的应用/index.html"},{revision:"7fa40b95446fc57bd3d7ce44a7079b37",url:"./tags/白票/index.html"},{revision:"c3edec9c88a0ee856de1ecaec23b4596",url:"./tags/多系统/index.html"},{revision:"f37f46cb3ae1727ac68d09051cf6f41c",url:"./tags/分享/index.html"},{revision:"12bc5141b556119c26eccd6ce644d463",url:"./tags/共享/index.html"},{revision:"427f31471e7613c33d8ebeb97c9e50d6",url:"./tags/黑科技/index.html"},{revision:"62c30a46cde680e609478ecf954a0df3",url:"./tags/黑苹果/index.html"},{revision:"b2752d6ef5e32aa0cdc6d98fd0eb09fb",url:"./tags/爬虫/index.html"},{revision:"05e1f5c84d8796fd655b35e51b22c4c2",url:"./tags/破解/index.html"},{revision:"9f576e8c74ed5e836780858b9197b3a5",url:"./tags/情感分析/index.html"},{revision:"27e5633fe7b00edb8f3192f121b6643b",url:"./tags/三下乡/index.html"},{revision:"621106b1e01cd97e41fefffe089c2d51",url:"./tags/市场调研/index.html"},{revision:"2865908d46d1764312b6bb3eb23b7061",url:"./tags/数据可视化/index.html"},{revision:"ff9e8d3b0064a55cba8f278491a81925",url:"./tags/数据清洗/index.html"},{revision:"382e9f26f5d1f1a63e7aeda3d2632c49",url:"./tags/数学建模/index.html"},{revision:"be73c273343eb04e7feffc58393434d9",url:"./tags/图标/index.html"},{revision:"b635dbd523573141e6ab922d084d88f0",url:"./tags/系统/index.html"},{revision:"b10440896b391029738492ccc6d402a6",url:"./tags/选课/index.html"},{revision:"aa9c4ab266c8c28700c1081fff16dc5f",url:"./tags/自动化/index.html"},{revision:"c91e496c34b6bea44f006a343a6936c5",url:"./tags/Aria2/index.html"},{revision:"a4eb4be1917c1b306fb5cb14a6dfc808",url:"./tags/CIT/index.html"},{revision:"c9f95105b70a937a9c3cf8b34cfd3555",url:"./tags/Cloud/index.html"},{revision:"314fd7c0f596cbdef2b0bf4cf772c9dd",url:"./tags/FFmpeg/index.html"},{revision:"cc6d50bc94c5d73142e3944124c87773",url:"./tags/GIT/index.html"},{revision:"010502d607fd2c56a60dc9cb7ac8a57d",url:"./tags/Hexo/index.html"},{revision:"aab4d9be150b7dc34c8b38406aedb316",url:"./tags/index.html"},{revision:"1f5df04f6fdab9f2c77ea9f337160d09",url:"./tags/Matlab/index.html"},{revision:"5972061cae63d5d390aef8c83d426747",url:"./tags/MOOC/index.html"},{revision:"60be3504ddcb18cc965cf464dcc9313f",url:"./tags/Pandas/index.html"},{revision:"2db5acd8772acec43f4ed91f7509fb0b",url:"./tags/pyecharts/index.html"},{revision:"619143f32d856edbf5598d16dcb1d67a",url:"./tags/Python/index.html"},{revision:"ea15904925b50bbe60c03340b94b46dc",url:"./tags/WebScraper/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();