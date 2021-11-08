const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d169f2abaaabede4816675d111da6dd6",url:"./10308d12.html"},{revision:"e81d19eb63edae46fd195d66454a45d9",url:"./1640c2dd.html"},{revision:"a895e6800ca80070b611248cce2f0526",url:"./1659fa3e.html"},{revision:"b444bc371b9d842fe3192cd15f3b56a7",url:"./20e4c06c.html"},{revision:"d02a8a9b1630fc4d5d0c93f41eafb455",url:"./28580df5.html"},{revision:"bd4a53d3f5b76c9bd27eb0b40a3a662d",url:"./347090d0.html"},{revision:"f53f876e56dfc5476ef9427e519b1a7b",url:"./404.html"},{revision:"e0f77cb543eb83e91367885504388270",url:"./47109d5a.html"},{revision:"cfa9966d1e4739916dc48f42d6828498",url:"./5496aeb4.html"},{revision:"d26463d038f68b0a6c27c6058a9ab4a4",url:"./5633b72d.html"},{revision:"d7ae15d3207df670e8040e730c8ce155",url:"./56782db4.html"},{revision:"5d0957e4a10405f37bd0abf58db9888f",url:"./6933ffae.html"},{revision:"be972df610d16d05b302a894e53991b1",url:"./6e150933.html"},{revision:"0ee26b18a80058db1e461df3e397c323",url:"./729dca89.html"},{revision:"8b0b7f20d4646a1315dc92239717e525",url:"./783f1e5f.html"},{revision:"d7ab8339d390b676a78b74ff74401e8c",url:"./7c3563b0.html"},{revision:"a69096bcc2a01c8e786b9c19ff4b64aa",url:"./857e383e.html"},{revision:"1aa67ef6dc14352f1e2fcdee4af796ac",url:"./91005645.html"},{revision:"0b2e17f0dae93b4d5555fc8ccbc69160",url:"./a0c0ece2.html"},{revision:"e261f389ad2b639eb615d0b9e94cfb6b",url:"./a10d2364.html"},{revision:"db2038dab47160f43e73518cab858dbe",url:"./a138b51e.html"},{revision:"ed6a0603b890f560829a4020e2318aee",url:"./a3cc4771.html"},{revision:"0e885fa3fddf7fbd01e0b5c7fafe2bda",url:"./af10e3f2.html"},{revision:"254f77f7a12edcde8b20b2d27a429efc",url:"./archives/2020/10/index.html"},{revision:"4b7c1b1c20ece52994d9e191f2c6a6b5",url:"./archives/2020/12/index.html"},{revision:"3e00cc148754124c0b6d74f49bb5d517",url:"./archives/2020/index.html"},{revision:"dba08d05764f0dfe64e08ba5fa22ce30",url:"./archives/2021/01/index.html"},{revision:"f66a7e89bbf628808c688e141d1817c1",url:"./archives/2021/02/index.html"},{revision:"1e51f8259d54262c2d40b3b999a966e3",url:"./archives/2021/02/page/2/index.html"},{revision:"7bc5b52a82ed1903ba35db8f12fa5b76",url:"./archives/2021/03/index.html"},{revision:"fd1c535b0aa183dddf4ea3de41e608d9",url:"./archives/2021/07/index.html"},{revision:"7cb3f5b089eae18f979cbb242c676bf4",url:"./archives/2021/11/index.html"},{revision:"f1177232438734eb6708061f017409cc",url:"./archives/2021/index.html"},{revision:"9bd5c1f63991c12b709f3a7487a87c61",url:"./archives/2021/page/2/index.html"},{revision:"caa3004e865c146faa6133bae830c44a",url:"./archives/2021/page/3/index.html"},{revision:"46115b099f63aad5cacebff2f8793264",url:"./archives/2021/page/4/index.html"},{revision:"a9a0d33331cc3e3ad5cd7db6e037dece",url:"./archives/index.html"},{revision:"62e0e64b6caf69f82da5430b9f1acdda",url:"./archives/page/2/index.html"},{revision:"2b50d8bbf1a290a06d1cbd6966c6c440",url:"./archives/page/3/index.html"},{revision:"0289cffa8fed2f00d541a2d1e8d92e20",url:"./archives/page/4/index.html"},{revision:"0060a670f1435f5776a36fc1c31fc3a2",url:"./b1cf8b54.html"},{revision:"e90aab29eec37778b07665c77eaceb17",url:"./b77c21ed.html"},{revision:"4bc848703bfb089a1b9e4bb18a5273e1",url:"./b7c079be.html"},{revision:"75e0ad411be30d93d67baf8ce30dce0d",url:"./c271dbbf.html"},{revision:"aeffcfe71f44a6f75a6d07282d23701f",url:"./categories/白票/index.html"},{revision:"1f3d218e18ee9c83a46e73f375397834",url:"./categories/黑苹果/index.html"},{revision:"e1a63347b6084c5940451a8dcca1a44f",url:"./categories/爬虫/index.html"},{revision:"4c3065bd7361c254a6e9f46cc3f8dc60",url:"./categories/破解/index.html"},{revision:"b12a13197d61e9c5200bad7c89b96878",url:"./categories/三下乡/index.html"},{revision:"b1da47c978565288979c6bb7027f4ef9",url:"./categories/市场调研/index.html"},{revision:"0eb122e1d5e1fcf9db6d5cd380a82526",url:"./categories/数据可视化/index.html"},{revision:"bf5fbb9f0d4a2a870ccfb2fd52048ca7",url:"./categories/数学建模/index.html"},{revision:"83b475b6b47355a8715eb75d84615d7e",url:"./categories/Aria2/index.html"},{revision:"485ac7eade83f36186b529ae4ea92942",url:"./categories/CIT/index.html"},{revision:"ba4c16b9b235219ffb28643ad6c289ce",url:"./categories/Cloud/index.html"},{revision:"5c744ae9ee730359946d7f567924e488",url:"./categories/FFmpeg/index.html"},{revision:"b57e558a4d3ce082317d05d635ba1acf",url:"./categories/Hexo/index.html"},{revision:"ef563d682f402368feb0331ce0418f31",url:"./categories/index.html"},{revision:"3b9f4bdbd44734a6c553a07d1ac8f31c",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"7b1747a8d7f6a3cda7c2cb17f08546ce",url:"./d3134430.html"},{revision:"aa73d51567ef631be624a9f30b1b3dc0",url:"./d340ea43.html"},{revision:"51bcca3ae1e17c2a176306e2296f30db",url:"./d746f3f.html"},{revision:"f3a1213df9ea0c74fb681e99caafcff4",url:"./d8816516.html"},{revision:"3b9631ec7e1c6f54f3d091a9df613985",url:"./daaed497.html"},{revision:"f938551e7c8851366fd0dc5938f1a262",url:"./ee2697c6.html"},{revision:"d451ef2a240f2f1523fa62182157eddc",url:"./f50b5182.html"},{revision:"8236309241b22f7da6227dca7c414006",url:"./f58e0e38.html"},{revision:"ea02b78183285c150bde1c569fbd25ba",url:"./f71317ac.html"},{revision:"61e1415ec4a6f6a1c3afd1e4a3a362ce",url:"./fcb7524a.html"},{revision:"7a06f48f237b5fc1f6f372f014381d5d",url:"./fe4b7fcd.html"},{revision:"b2b4fc41072bf571daec165cb019cb35",url:"./Gallery/desktop.html"},{revision:"8c1c7198a243f14a9a09dcea825ec861",url:"./Gallery/index.html"},{revision:"75ed8dbe2fc8c4946a3a67c4a36d4032",url:"./image/pwaicons/manifest.json"},{revision:"46756ff2dc3de4b844d409bdaa59f0e0",url:"./index.html"},{revision:"f7efbacdf5c8e57ad57deace1198b010",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"9c96b06052f549e0378f5f4f7d360c73",url:"./link/index.html"},{revision:"ab66bbabea14fb4c429ee0eae1f93c33",url:"./music/index.html"},{revision:"27439c219227ecdcd9d09976ae0124fa",url:"./page/2/index.html"},{revision:"d0c448ac56078334b6c4eaeb1882abb0",url:"./page/3/index.html"},{revision:"a3cb3c913644a8623be5f12ff9e62e01",url:"./page/4/index.html"},{revision:"ba40cf41407fa308993a1fde6ffe1656",url:"./tags/白票/index.html"},{revision:"672b5bb22d171c204ed7b85eb7d3a414",url:"./tags/多系统/index.html"},{revision:"9f446030a3731818ba577cf866a7451e",url:"./tags/分享/index.html"},{revision:"b5654e68d217f52459e19502e27a268d",url:"./tags/共享/index.html"},{revision:"b82662ddd328f6745b064b653baeb0ad",url:"./tags/黑科技/index.html"},{revision:"9c809822867c9c977a8833deb8fcdadb",url:"./tags/黑苹果/index.html"},{revision:"4b64b84d211b8cc235e8d4e7ca9fca5e",url:"./tags/爬虫/index.html"},{revision:"45f0b3c815519f17a0347cd93482daa6",url:"./tags/破解/index.html"},{revision:"a715bff42c80c84441bbd66061633378",url:"./tags/情感分析/index.html"},{revision:"3b13c4b95bf497e081ac530509a2a0ff",url:"./tags/三下乡/index.html"},{revision:"23d2460f1218be6217f7ed127c8029bd",url:"./tags/市场调研/index.html"},{revision:"b939da4cb51dfc39f12e5c613aa9d51e",url:"./tags/数据可视化/index.html"},{revision:"8a5662415e73d8de6e68abe36c12a75d",url:"./tags/数据清洗/index.html"},{revision:"beb462284ade1fe2571df8369ee8414f",url:"./tags/数学建模/index.html"},{revision:"11bd5e606d47354f684dca4df0c9c6c8",url:"./tags/图标/index.html"},{revision:"321d9db7fc43857796f8d5aa92c5aab8",url:"./tags/系统/index.html"},{revision:"49b1bcd173c77a8b302d227d1aedd7bb",url:"./tags/选课/index.html"},{revision:"e7847a6b43a25b0e3e4ff06fc600576e",url:"./tags/自动化/index.html"},{revision:"f0212df3a34c1be85d4ff12a9ecd07ff",url:"./tags/Aria2/index.html"},{revision:"e4d4e761afa6e9991d9626c7f71da752",url:"./tags/CIT/index.html"},{revision:"edfb3ebc49468afb251ba1ef537ae05a",url:"./tags/Cloud/index.html"},{revision:"3f3f781b665263e5c140c7da6f740299",url:"./tags/FFmpeg/index.html"},{revision:"7e585f1f402526db99be946bcb1e2c75",url:"./tags/Hexo/index.html"},{revision:"0d3ed7ad2ccccbc8947be54ef18f221a",url:"./tags/index.html"},{revision:"e7b8e725c4702eae6144aad793c476e7",url:"./tags/Matlab/index.html"},{revision:"65f993d85e44f25a55d987fa8eda5777",url:"./tags/MOOC/index.html"},{revision:"377bc96af0f2091d095bd053bcc3c661",url:"./tags/Pandas/index.html"},{revision:"b11599a855a251687f210c2bf45aef42",url:"./tags/pyecharts/index.html"},{revision:"240d81ddfa69e64776b4e55bebe4f7f4",url:"./tags/Python/index.html"},{revision:"fe0051d5621af7567dd34d735a3e33a2",url:"./tags/WebScraper/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();