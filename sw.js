const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"85f2d50ed587e566d8e90bec999a1def",url:"./10308d12.html"},{revision:"360d9b155ba10b8c6bf83904861fc339",url:"./1640c2dd.html"},{revision:"3c981cbb55095af54e63c4c00e4f58e2",url:"./1659fa3e.html"},{revision:"890811bf008e19f21efada3e5ac4f5b1",url:"./16742c97.html"},{revision:"2aaeeaaa330550aaa32ffc2d9986e374",url:"./20e4c06c.html"},{revision:"619f9c1c01c46ddb5fbe0b31e8443c67",url:"./28580df5.html"},{revision:"95574fbad33894ab0aed861e80c0ed54",url:"./347090d0.html"},{revision:"c83692f0fff64478813fa6c4bfcb7e55",url:"./404.html"},{revision:"35cc2183e91d0857e343c2d526feade7",url:"./47109d5a.html"},{revision:"ce088e6ee8a67a1c3dadfcb094ab0b0f",url:"./5496aeb4.html"},{revision:"e363cf7b158124af0c4b51646ea8ec7a",url:"./5633b72d.html"},{revision:"0f84fa6d9701dce825914c9c6f54e589",url:"./56782db4.html"},{revision:"8e139ebf95aef63a68b28a12dd1f81a6",url:"./6933ffae.html"},{revision:"2aff2755b71f6974986b6a00b9df3b1c",url:"./6e150933.html"},{revision:"f562a702d90fd5ac397bdfd7ef7d41bb",url:"./729dca89.html"},{revision:"bcd5d867d4bc592496102a01087e12a3",url:"./783f1e5f.html"},{revision:"cfba1fbf9f61ef62ff44805daa9e45e7",url:"./7c3563b0.html"},{revision:"4c29bc239f285bf162b857ae6ee19e69",url:"./857e383e.html"},{revision:"463474fc265f90cbc042eabd12be5cb8",url:"./91005645.html"},{revision:"b599efd1abda600ebfe8e10965b17f1b",url:"./a0c0ece2.html"},{revision:"86a4e88076e4db71cdfb750f660256a7",url:"./a10d2364.html"},{revision:"14ddcea461a20aa4eea2afd92be04468",url:"./a138b51e.html"},{revision:"46ebb729136772216b1a3d9e0b1fe604",url:"./a3cc4771.html"},{revision:"938c79cd589274d3549375137cfc3d14",url:"./af10e3f2.html"},{revision:"dfde49eca5d3cd37d11ffc3192eca141",url:"./archives/2020/10/index.html"},{revision:"ce25920cd8a87c25d37db2b457a19985",url:"./archives/2020/12/index.html"},{revision:"93566cd14149c403c8df5e753cffa47e",url:"./archives/2020/index.html"},{revision:"d7e5f4d3828701431a255f050bd20b17",url:"./archives/2021/01/index.html"},{revision:"15d9e5919778c461fa4104dd807c7012",url:"./archives/2021/02/index.html"},{revision:"b950ed5f3a59fcfcef363d287b3d4354",url:"./archives/2021/02/page/2/index.html"},{revision:"a0c2da50066a2e82965a87b4903e6467",url:"./archives/2021/03/index.html"},{revision:"3de31bf25acf3faa121765bf1b9e50b5",url:"./archives/2021/07/index.html"},{revision:"5ed989454ab34ab34d572b04246c4542",url:"./archives/2021/10/index.html"},{revision:"38ea712f36ceed9976c49c89f6d92911",url:"./archives/2021/11/index.html"},{revision:"95cf9b7c67112bf8a6936c8d83b4c0dd",url:"./archives/2021/index.html"},{revision:"5b4875fb7ef069fa562e413b2be05c79",url:"./archives/2021/page/2/index.html"},{revision:"91353b9c7a14f14b3ff41c40d56bee49",url:"./archives/2021/page/3/index.html"},{revision:"f757bdfbfcfafe133a2801d36b2aec3b",url:"./archives/2021/page/4/index.html"},{revision:"8cd7d02cf56a6e2a9c48105485e62614",url:"./archives/index.html"},{revision:"dfee800be57bdc64907ae9614757c769",url:"./archives/page/2/index.html"},{revision:"99adaa6966bd7f8ec7812e20b1862940",url:"./archives/page/3/index.html"},{revision:"9d76ab936c08b645689967934ac946a4",url:"./archives/page/4/index.html"},{revision:"585488bec7aae1c03379f4fd632222bb",url:"./archives/page/5/index.html"},{revision:"3ce2a735620feb4c0e2189636049c797",url:"./b1cf8b54.html"},{revision:"25b35d20bf5d2c7f0dd571411b6e52fc",url:"./b77c21ed.html"},{revision:"add8ea39f0793e459e769998d84c0ede",url:"./b7c079be.html"},{revision:"bebf521c7ca8a2fee76864815397f7cf",url:"./c271dbbf.html"},{revision:"7226337429f6e4474ac90f665d25eabb",url:"./c29e6364.html"},{revision:"017b2ab72ee9920379c60a4a3113d168",url:"./c7abe168.html"},{revision:"31ed849c5f89873774c49afa65f66514",url:"./categories/白票/index.html"},{revision:"012f5ad06e6506943e24a582856cc75d",url:"./categories/黑苹果/index.html"},{revision:"7a7157702166faa70c78709fa0f92e5b",url:"./categories/爬虫/index.html"},{revision:"58293d993c721b7378126f5c7f15aea2",url:"./categories/破解/index.html"},{revision:"9bb265e9638f4e01a0c63ed449957bb6",url:"./categories/三下乡/index.html"},{revision:"88dfb18af33340d032bba1881a668abf",url:"./categories/市场调研/index.html"},{revision:"9e21f754c1e2cbae119fde98f0b1f7f1",url:"./categories/数据可视化/index.html"},{revision:"13cca91b16be865789e7cf7b922cc89b",url:"./categories/数学建模/index.html"},{revision:"84676d73127eeaec1639e83a002cfc28",url:"./categories/Aria2/index.html"},{revision:"f1435e1d1114fd87383434209703eeb6",url:"./categories/CIT/index.html"},{revision:"c17f09021b8cc3cce6eafef0b1a87c9f",url:"./categories/Cloud/index.html"},{revision:"928c487291d726db6bb4e559152bdd7f",url:"./categories/FFmpeg/index.html"},{revision:"a373cd33535e46e8f9c6756278089b0a",url:"./categories/GIT/index.html"},{revision:"143893348687d9b2e17b4a5e20636d70",url:"./categories/Hexo/index.html"},{revision:"3416b9cce4ba3c896cd4388beb21b370",url:"./categories/index.html"},{revision:"dd5589df7e0228d220dbc433267097c0",url:"./categories/Python/index.html"},{revision:"787bda2fdadfa7af9a16748445d8eaa8",url:"./cec18dd8.html"},{revision:"59593cd47f7b3cb20a25fb72c94ad059",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"3ed513570fced2c8ef5cde03cdce5a51",url:"./d3134430.html"},{revision:"65c5a94a90935ccfca7302296263005f",url:"./d340ea43.html"},{revision:"ab2cbcd0b1b748e17c141bdd899a54e9",url:"./d746f3f.html"},{revision:"5761b4096852ff9f757a230bec5c90d4",url:"./d8816516.html"},{revision:"c07b625ea98f05d6038451df5e7046cc",url:"./daaed497.html"},{revision:"38b7ca33ce5711927f48e609c3a7cdfc",url:"./df6316d8.html"},{revision:"a264ca3425d46e8d2e67fa6c2701ecaf",url:"./ee2697c6.html"},{revision:"aebc86321e7ea94f92b2a2e6428c5bb3",url:"./f50b5182.html"},{revision:"e0088b0c3322d7edab72ea06e6aa3d6f",url:"./f58e0e38.html"},{revision:"2c7e56d16d4b6f5e7ff62ee794cf79a0",url:"./f71317ac.html"},{revision:"cfb90197751aa6154d229fb301ac9e0e",url:"./fcb7524a.html"},{revision:"6a498010df1e2bd203370b2a1f0595c6",url:"./fe4b7fcd.html"},{revision:"b4fa4c86e936dbd53793c9954a3655ca",url:"./Gallery/desktop.html"},{revision:"36e9b42e881701dd2b772d23e7cc751d",url:"./Gallery/index.html"},{revision:"75ed8dbe2fc8c4946a3a67c4a36d4032",url:"./image/pwaicons/manifest.json"},{revision:"5078ad3c4ad53de8197488e2a213b2cb",url:"./index.html"},{revision:"240e062def7897dd4c03a12bf07fdc65",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"33b3c0e197c029d5b198059220bbd5ab",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"f52c0146ebfb3ea524bffcb64f06f629",url:"./link/index.html"},{revision:"d2cc4e7ee1dbe141565076236616fa49",url:"./music/index.html"},{revision:"47611e6171a0b20164a4ec68d9d685f3",url:"./page/2/index.html"},{revision:"48fa9d9a78baaf1ad2e71fb40223b9f1",url:"./page/3/index.html"},{revision:"f5c545bd08b2dcfef61939c4895b0e65",url:"./page/4/index.html"},{revision:"a5033a8a119499b482ac97d356ddda19",url:"./page/5/index.html"},{revision:"e962132898e8edce5ee68e9704bfe9ef",url:"./tags/白票/index.html"},{revision:"7b0dc3e9dc8188eabc7c686e78c8bf40",url:"./tags/多系统/index.html"},{revision:"0b19e59097c3521b95ec25bb45e8df54",url:"./tags/分享/index.html"},{revision:"0a3251353962696fff79a4453d3c7345",url:"./tags/共享/index.html"},{revision:"b29c10e485aa2df6d1dc200112caf300",url:"./tags/黑科技/index.html"},{revision:"b8136984e88b2d46dfb9b4bd1725ae97",url:"./tags/黑苹果/index.html"},{revision:"157257b64a436f44396b7cb1be9d969c",url:"./tags/爬虫/index.html"},{revision:"5ba21ba8898ce16c1d68bc02f56426e4",url:"./tags/破解/index.html"},{revision:"e1f7cf10477b7ca74a97958fef08472e",url:"./tags/情感分析/index.html"},{revision:"4164703dd0e07e752354f460715cc693",url:"./tags/三下乡/index.html"},{revision:"48d68490c79efa653302535821dd1c52",url:"./tags/市场调研/index.html"},{revision:"3da66a0b95e61f6ad55175b994ae950b",url:"./tags/数据可视化/index.html"},{revision:"a32fdf8dfd0dc79af671c3814efb933c",url:"./tags/数据清洗/index.html"},{revision:"1f0f2d3bdd21cf73f7925f840fabf689",url:"./tags/数学建模/index.html"},{revision:"e88ee667cb5ab9e9635675a15e59c3ee",url:"./tags/图标/index.html"},{revision:"1b93cf01357f13bb6eec7b09bd647878",url:"./tags/系统/index.html"},{revision:"70ccb417f208d45d954f4496a87e1e95",url:"./tags/选课/index.html"},{revision:"b883cacbdcc42a7ffa8cd4a00e8cb6d9",url:"./tags/自动化/index.html"},{revision:"1e68938a16f533ed25426397530df9e2",url:"./tags/Aria2/index.html"},{revision:"78b99e5a8a32a75e4a0d425f7f0572ae",url:"./tags/CIT/index.html"},{revision:"61c8e4c3c1b4b812f63eba017da7fdd0",url:"./tags/Cloud/index.html"},{revision:"e7af155704c010d47ce9f428d973997f",url:"./tags/FFmpeg/index.html"},{revision:"d75918dbeb85583d4fab517ced43f315",url:"./tags/GIT/index.html"},{revision:"3cefa98e92002640e4f2620fb036a958",url:"./tags/Hexo/index.html"},{revision:"a8aff7178fb0bcbb610d1597790b3558",url:"./tags/index.html"},{revision:"16b2de2eb89953c5b804385dd4c56be4",url:"./tags/Matlab/index.html"},{revision:"d49c2d02da71e7a555d67e43caa609b1",url:"./tags/MOOC/index.html"},{revision:"3b1323468928af95f82264d757e9f6c3",url:"./tags/Pandas/index.html"},{revision:"cec79fa1a9b36406d7951c1a004204cd",url:"./tags/pyecharts/index.html"},{revision:"74e1f18b53ed637aa9e9cf3921be0e8f",url:"./tags/Python/index.html"},{revision:"a8ee4d8585a0f8c12fc2eb75581f1edf",url:"./tags/WebScraper/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();