const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Serok's Blog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"208a5abb8eb5888947dee7b6685fc9ec","url":"./2020/12/24/第一篇Hexo-blog文章/index.html"},{"revision":"b21d49b71cab4b1519d3d014e1db580a","url":"./2020/12/25/Gitkarken在6.50之后的破解使用Pro版本/index.html"},{"revision":"344a2a05c69347be303d21b7e4f51219","url":"./2020/12/27/同济校友世纪互联白女票/index.html"},{"revision":"22a0ca2ccdec50a4ce3aa27b106c6759","url":"./2020/12/28/给hexo Butterfly扩展图标/index.html"},{"revision":"445a4e4ecb7a509c524737188d643daa","url":"./2021/01/01/hello-world/index.html"},{"revision":"b5422ba3e624e304129d15964b9f2591","url":"./404.html"},{"revision":"c872f72687680ea103a0f23cb13ebdc9","url":"./archives/2020/12/index.html"},{"revision":"a39680339c7ef0b6a9199937067b0cf2","url":"./archives/2020/index.html"},{"revision":"3c9c5a05581a088987e5b46354c517f2","url":"./archives/2021/01/index.html"},{"revision":"0745f6fefd0e72b2a860cf6fa79bdfb2","url":"./archives/2021/index.html"},{"revision":"89e44574da99dafbf25dbe28737fce19","url":"./archives/index.html"},{"revision":"db47341d060db4f08b3b7043e54f5f9b","url":"./categories/Hexo/index.html"},{"revision":"a529ffca1cf025ce5dd961da1dedeb54","url":"./categories/index.html"},{"revision":"8b4d719325cda4b76876b9f0f0f88412","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"25469171fda4a83747c2dd6b02345f16","url":"./Gallery/desktop.html"},{"revision":"eab95100e3a560326f2db6556765be3d","url":"./Gallery/index.html"},{"revision":"b0651c768ddcdc30d780ae317e06221e","url":"./image/pwaicons/manifest.json"},{"revision":"754c7b9c97d580afdc4d80327029e744","url":"./index.html"},{"revision":"f7efbacdf5c8e57ad57deace1198b010","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"578b00087d5daea7c0ec1c35d64b1c83","url":"./link/index.html"},{"revision":"dc0dea881a460d7e5776cd6baad5493b","url":"./music/index.html"},{"revision":"394aa8ad1b77af5ce11f7c640d258ed5","url":"./tags/Hexo/index.html"},{"revision":"cfc6e2574f041876412f669995e064b8","url":"./tags/index.html"}],{
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