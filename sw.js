const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"your name"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"22a333e9f549177a50ad0d6bc961ac7a",url:"./10308d12.html"},{revision:"fa90ffc0c90fc90c59ed14953c4ec5c3",url:"./1640c2dd.html"},{revision:"653d3edf3a1c1a936a91519a8cb6f0b5",url:"./1659fa3e.html"},{revision:"c5672567683b6664ec06166586911864",url:"./16742c97.html"},{revision:"6d5cf1b2650565c6c291b187eba2cf51",url:"./20e4c06c.html"},{revision:"069a5b77bd9cd17f004255d8a6ecc9ed",url:"./28580df5.html"},{revision:"044c241caeda34e75f48fbdc8b58ea2e",url:"./347090d0.html"},{revision:"a3607c39ec744e0deb73a054683f7d23",url:"./404.html"},{revision:"4b7e65286da54475fdf6b91b48e87e5a",url:"./47109d5a.html"},{revision:"f15ab5bf7df32392ca248f255cbb0d56",url:"./5496aeb4.html"},{revision:"f8db15b38c42a6b272441535f0459103",url:"./5633b72d.html"},{revision:"6baf2962269b9a526bd4ffc20b3709c0",url:"./56782db4.html"},{revision:"f1890b64063447969a8452474dcd1eb3",url:"./6933ffae.html"},{revision:"853c62395c9d662ad14207f7b20373ea",url:"./6e150933.html"},{revision:"90f682fac9c8b708b94bdee0205826e8",url:"./729dca89.html"},{revision:"cd3f1d5bf8a3332b368bd3e993cf8093",url:"./783f1e5f.html"},{revision:"6e41344a4702ef52d17c5644ccb793c3",url:"./7c3563b0.html"},{revision:"ce56addcbc153ebee8b603a678bec0f5",url:"./857e383e.html"},{revision:"fb7f7fc90fd406fd53b54003d2ccd193",url:"./91005645.html"},{revision:"9176cd5a4139818fd9ac00f32d9aa526",url:"./a0c0ece2.html"},{revision:"009537875345888662ebd32b22a5b263",url:"./a10d2364.html"},{revision:"291ddadf2716c3f7615ad1be3a9fe47e",url:"./a138b51e.html"},{revision:"9c2db220ed37b99a6cdae784ca971d65",url:"./a3cc4771.html"},{revision:"6b4c7602fb0901ca23f51c4aa96f901e",url:"./af10e3f2.html"},{revision:"0d6ecd58e526600f43bf37d97c6bf406",url:"./archives/2020/10/index.html"},{revision:"c1f104fa9e7a583ddf89ed2a5857fce4",url:"./archives/2020/12/index.html"},{revision:"0d4388e7a327f4c49b43dbd955660160",url:"./archives/2020/index.html"},{revision:"0012b5018037a7a46cbe6bd1f7f690ff",url:"./archives/2021/01/index.html"},{revision:"cac4a1cac58df6d5842c33ed10388aec",url:"./archives/2021/02/index.html"},{revision:"7e50cfeb5f97bd693d1190f2b91b1b9e",url:"./archives/2021/02/page/2/index.html"},{revision:"4ef1ccd130549efd0126c511c168be34",url:"./archives/2021/03/index.html"},{revision:"eb80fd33292d6a7d4459c72b0735449f",url:"./archives/2021/07/index.html"},{revision:"d1c9a8de29e08ec0d8d4a8eb9fb25536",url:"./archives/2021/10/index.html"},{revision:"67ecbc76aab645464407ef8ee41fc160",url:"./archives/2021/11/index.html"},{revision:"b98a6966e4fc1d1dd11b0ce87b1ed8f8",url:"./archives/2021/index.html"},{revision:"e726eef371b706d460c126b84a2de9f7",url:"./archives/2021/page/2/index.html"},{revision:"5fceb8890caf0dc9c5679607b8b7315a",url:"./archives/2021/page/3/index.html"},{revision:"a916b4b22ff9354f15fe08de0250f166",url:"./archives/2021/page/4/index.html"},{revision:"4a4bdd8cf97cc427e8281e81a2cc0103",url:"./archives/index.html"},{revision:"8db4fdfdfddfdc89c1c2a3d21e8e0d91",url:"./archives/page/2/index.html"},{revision:"fcb242ff13b7714a10f9785b9c67f39e",url:"./archives/page/3/index.html"},{revision:"540c14edde0d8ef72ce2f7668f7e60c7",url:"./archives/page/4/index.html"},{revision:"7279244747c368efb8343dccf2b50591",url:"./b1cf8b54.html"},{revision:"85b54496edcbe411f68052fc5b618486",url:"./b77c21ed.html"},{revision:"5bccf20e7893e6964d71078a48e631d0",url:"./b7c079be.html"},{revision:"54599ce448d7758062a74d9263b7a69d",url:"./c271dbbf.html"},{revision:"8a4d475049a843b3c4f40f77a765cdd5",url:"./c7abe168.html"},{revision:"1e919e769570b6e696c7d31167d305a3",url:"./categories/白票/index.html"},{revision:"4e7c822a0f3dfc50238b12e377456c5f",url:"./categories/黑苹果/index.html"},{revision:"39356a5d5cc96d7ca6b827989a90b8ed",url:"./categories/爬虫/index.html"},{revision:"0267eb6bef88a842dec14fa7ffdbff66",url:"./categories/破解/index.html"},{revision:"5b4bb35b182a0a032627b4f08dcd961e",url:"./categories/三下乡/index.html"},{revision:"7ba6a845250b751f0a3b53c72183d3b7",url:"./categories/市场调研/index.html"},{revision:"9908ef03bc928fedefad90a037192290",url:"./categories/数据可视化/index.html"},{revision:"9aaa7f9683ac079167955ef33de47ece",url:"./categories/数学建模/index.html"},{revision:"817f62ba5dbf71637cd4a366cd6bd040",url:"./categories/Aria2/index.html"},{revision:"f36636cb0d0c01d01f6bf268bec37d26",url:"./categories/CIT/index.html"},{revision:"fc18d2b9a71550b9c34f77192ff40f5e",url:"./categories/Cloud/index.html"},{revision:"59e566982bab8ed012333dd1b9cf1c17",url:"./categories/FFmpeg/index.html"},{revision:"c68f28ace2897a6a0342c8188b933616",url:"./categories/GIT/index.html"},{revision:"a81792d18b509cec490ecd4d7b458c85",url:"./categories/Hexo/index.html"},{revision:"b8938b09492d6e1b2ebb392a98cf2f98",url:"./categories/index.html"},{revision:"ea9e3a2c18d884342af4f059213fcfaf",url:"./categories/Python/index.html"},{revision:"c64dddfa422117471ed46355335acd94",url:"./cec18dd8.html"},{revision:"59593cd47f7b3cb20a25fb72c94ad059",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"244addc55514fdfaa28351c9ca591d93",url:"./d3134430.html"},{revision:"e34956bfa284b9b2cc121537848b5ac8",url:"./d340ea43.html"},{revision:"750fdf34a9bb8a2120bac7a0cb599447",url:"./d746f3f.html"},{revision:"b49dc210ee53a06492c88f2a4f056cb9",url:"./d8816516.html"},{revision:"24d60e9475c4c6ca96f0c4c1b5ac261e",url:"./daaed497.html"},{revision:"11f6a3cc22c1b4120c47f300c7d3e651",url:"./ee2697c6.html"},{revision:"51776d24557874efdd515be168f4c068",url:"./f50b5182.html"},{revision:"dd05a512f8b04fd1e373730d693ab621",url:"./f58e0e38.html"},{revision:"d3aca3d4184805783c06f9dc4bf58000",url:"./f71317ac.html"},{revision:"785c12a3863b89ba077a231ee9f55b4e",url:"./fcb7524a.html"},{revision:"82ecfa577c2e0850649e851a92fa53bb",url:"./fe4b7fcd.html"},{revision:"c023f3311178d57724518ea8ab2064d1",url:"./Gallery/desktop.html"},{revision:"8ca88b003a4d3fdecf3d2a224bd65e09",url:"./Gallery/index.html"},{revision:"75ed8dbe2fc8c4946a3a67c4a36d4032",url:"./image/pwaicons/manifest.json"},{revision:"e8440b00f6f0820753be1fe8190ec79d",url:"./index.html"},{revision:"240e062def7897dd4c03a12bf07fdc65",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"33b3c0e197c029d5b198059220bbd5ab",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"72d59dd5c182da85f518005543da2fb6",url:"./link/index.html"},{revision:"77b20626ebe182ea13c9f7c86197cec5",url:"./music/index.html"},{revision:"f30af621aa9f325d75176e83e4a263d1",url:"./page/2/index.html"},{revision:"251baa3fd875b539ac2277abc48eee23",url:"./page/3/index.html"},{revision:"1c3170cdebc461c11246d2b9c7abafc0",url:"./page/4/index.html"},{revision:"0acaf6115394f65bc4c0e5aef889833c",url:"./tags/白票/index.html"},{revision:"c79d2c1a9991ddfe58aff96e20875c00",url:"./tags/多系统/index.html"},{revision:"eed108560b9c2c7ab3defb9033b08b38",url:"./tags/分享/index.html"},{revision:"ff2e90b085ea7ee5a224822d3a49716f",url:"./tags/共享/index.html"},{revision:"3cd532b40df2010947103566aec188ae",url:"./tags/黑科技/index.html"},{revision:"30dfc77f8113925094ef75f9979c0950",url:"./tags/黑苹果/index.html"},{revision:"95ae12e6e36b7be625fd3778e5005a6a",url:"./tags/爬虫/index.html"},{revision:"66e020d71ee6a3982a76c3eefad14803",url:"./tags/破解/index.html"},{revision:"c9b54f4618da76e127ffe23210a93298",url:"./tags/情感分析/index.html"},{revision:"f332bbbe591ed5cd7779d8716efa93e0",url:"./tags/三下乡/index.html"},{revision:"bdaa8d8a1f020410dbf91a5baf20b1af",url:"./tags/市场调研/index.html"},{revision:"48d30f9810e5043044b822b5a9a329f5",url:"./tags/数据可视化/index.html"},{revision:"4bccfa3cbeea1bbe97c8f47b4e169d5b",url:"./tags/数据清洗/index.html"},{revision:"db576b48ca3230b8a04a74827ea6a9bf",url:"./tags/数学建模/index.html"},{revision:"4094e2ce613b569385c79a491bb0ae40",url:"./tags/图标/index.html"},{revision:"846f77caa9a12ecccd95dac561c6dc13",url:"./tags/系统/index.html"},{revision:"fcef6f399de08c86bc992ecb9634bb61",url:"./tags/选课/index.html"},{revision:"83d3ded2d6dff252b5c8eb435c0850d0",url:"./tags/自动化/index.html"},{revision:"0ae074659d5a5109b068c1a985061a12",url:"./tags/Aria2/index.html"},{revision:"4da04ba9f930c9863b862cee0360302a",url:"./tags/CIT/index.html"},{revision:"5ef3568fd7afb93c042ee6ce79a777c1",url:"./tags/Cloud/index.html"},{revision:"15a72b817918775782453a6b8f8d40b4",url:"./tags/FFmpeg/index.html"},{revision:"92c35bdbbcaacfbbb7f38f2d5f0637f9",url:"./tags/GIT/index.html"},{revision:"eb2da8daa35ce5109a66af79c05dbd5d",url:"./tags/Hexo/index.html"},{revision:"e54b5948e79eb58ea64b47ef19a2d8a5",url:"./tags/index.html"},{revision:"395534507b7c93067d2045f7b3b22c21",url:"./tags/Matlab/index.html"},{revision:"22a0825e7e0ee7966e0e901afee3e501",url:"./tags/MOOC/index.html"},{revision:"ffcf133989f3ac1d373bed92c98e4ac6",url:"./tags/Pandas/index.html"},{revision:"80a8d986f6740c5179d62a98c81d7a2f",url:"./tags/pyecharts/index.html"},{revision:"a66fd15cad796779d6cb31f9241d65f2",url:"./tags/Python/index.html"},{revision:"88950fbe1888c39000cd59e2d89c0cc6",url:"./tags/WebScraper/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();