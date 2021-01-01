const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Serok's Blog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"83bb466890dc00b55c9278d6ea912559","url":"./2020/12/24/第一篇Hexo-blog文章/index.html"},{"revision":"b2945b21f4a9eb93853718bbf844cb83","url":"./2020/12/25/Gitkarken在6.50之后的破解使用Pro版本/index.html"},{"revision":"7038aa4b132599a47e6a0467c7cfe685","url":"./2020/12/27/同济校友世纪互联白女票/index.html"},{"revision":"7d9afad11a5b9f94c3bf01d2f7eb7256","url":"./2020/12/28/给hexo Butterfly扩展图标/index.html"},{"revision":"ebc415d8bf33e7e01a5285bb841f18b3","url":"./2021/01/01/hello-world/index.html"},{"revision":"2fdabff0e9feedbe15e1f55d6c48f7db","url":"./404.html"},{"revision":"9389dee66b7072aa90258959e50e36a3","url":"./archives/2020/12/index.html"},{"revision":"5228a68522f99552b1d92d54353df46e","url":"./archives/2020/index.html"},{"revision":"c454ab2ea13f7fdbfbf9791562e68040","url":"./archives/2021/01/index.html"},{"revision":"167f30e27891057cb6e860ab9daede35","url":"./archives/2021/index.html"},{"revision":"99879f3a15f66d6e26d574c30787005c","url":"./archives/index.html"},{"revision":"98fdb5b0c4baef231208d4a01399cc1f","url":"./categories/Hexo/index.html"},{"revision":"fef2db3cc18960b55c8f288b1eec399c","url":"./categories/index.html"},{"revision":"1a9c5ac193e6a2dd13d8c782ad3ab9ae","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"2fbc0ec3a16b888dbe8100dd04707278","url":"./Gallery/desktop.html"},{"revision":"ee07900a47578f69b591086dd2435c6b","url":"./Gallery/index.html"},{"revision":"b0651c768ddcdc30d780ae317e06221e","url":"./image/pwaicons/manifest.json"},{"revision":"9922699221ad8fbac5e3ee87156e8f95","url":"./index.html"},{"revision":"f7efbacdf5c8e57ad57deace1198b010","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"c4143f44069249bddd0986269aa15960","url":"./link/index.html"},{"revision":"70f299a0bb2082cf4c1acf367ecbf190","url":"./music/index.html"},{"revision":"196f423c63b1ed07f781d522a4623797","url":"./tags/Hexo/index.html"},{"revision":"a850ae0bd01b54482b806e5417c5de43","url":"./tags/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();