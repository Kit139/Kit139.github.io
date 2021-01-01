const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Serok's Blog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d6ee6cfb8a1158dfca6f346f68f76fea","url":"./2020/12/24/第一篇Hexo-blog文章/index.html"},{"revision":"020cb10872ba62278738ec4323246499","url":"./2020/12/25/Gitkarken在6.50之后的破解使用Pro版本/index.html"},{"revision":"1f8aeb40af2f5c48495aa17ec77f3adf","url":"./2020/12/27/同济校友世纪互联白女票/index.html"},{"revision":"6b1ca0ba3167465a17084ec5deaca237","url":"./2020/12/28/给hexo Butterfly扩展图标/index.html"},{"revision":"189a9987ec33d6d60f6e71c257cc55e1","url":"./2021/01/01/hello-world/index.html"},{"revision":"1740bef5d4a4ff067aa5db7cc356fd6c","url":"./404.html"},{"revision":"aca4cdab4b844052d477ae4f8e9d2f39","url":"./archives/2020/12/index.html"},{"revision":"7e5d5e022fb567e6ca663f004bd44dcc","url":"./archives/2020/index.html"},{"revision":"5a8f63c60727239186d61ac4c5286bcb","url":"./archives/2021/01/index.html"},{"revision":"6b980a2d993c2932e9c840417ae3b64b","url":"./archives/2021/index.html"},{"revision":"5536f418cac6ede527bbb352bd723345","url":"./archives/index.html"},{"revision":"13c4904e62d729ec41dc9d076a869966","url":"./categories/Hexo/index.html"},{"revision":"5af5a2a0b87375165c2d136ae51a29f9","url":"./categories/index.html"},{"revision":"1a9c5ac193e6a2dd13d8c782ad3ab9ae","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1489cc2bc748502e54a69c886c565aca","url":"./Gallery/desktop.html"},{"revision":"f39ab1abe8fd3b907066b74cf8fb2dea","url":"./Gallery/index.html"},{"revision":"b0651c768ddcdc30d780ae317e06221e","url":"./image/pwaicons/manifest.json"},{"revision":"e7ec566412b9d7331d61f3b784926163","url":"./index.html"},{"revision":"f7efbacdf5c8e57ad57deace1198b010","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"f89f55a8bfaf31ff0be121244031a201","url":"./link/index.html"},{"revision":"5aed3c454f9c268f3b7f571b17de8219","url":"./music/index.html"},{"revision":"bffda7db362d25a219d60620a1c34342","url":"./tags/Hexo/index.html"},{"revision":"c31abb4fc2b1c06b5cab0de844a5c83c","url":"./tags/index.html"}],{
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