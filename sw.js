const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Serok's Blog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e9309858b684dab7c4f63faff8697a46","url":"./2020/12/24/第一篇Hexo-blog文章/index.html"},{"revision":"9e9a67ed018e7dceef6ef0eeb54b922e","url":"./2020/12/25/Gitkarken在6.50之后的破解使用Pro版本/index.html"},{"revision":"af17a9eef1a547a6c1d2ebff64080e52","url":"./2020/12/27/同济校友世纪互联白女票/index.html"},{"revision":"e10a00496ab0563106ca1815515a4e8a","url":"./2020/12/28/给hexo Butterfly扩展图标/index.html"},{"revision":"8362ec3e9e848604972b0d5cd9ed4133","url":"./2021/01/01/hello-world/index.html"},{"revision":"e0637d5f13b43a639accad7d0eedd316","url":"./404.html"},{"revision":"bd087047863d36e2255356dd895e13ce","url":"./archives/2020/12/index.html"},{"revision":"f7b9d723ff131c17b3cb357b29fe6e05","url":"./archives/2020/index.html"},{"revision":"1aa15640853b9a38f68675a8c20b27dc","url":"./archives/2021/01/index.html"},{"revision":"c0dfa1c766ebc3d8079bd07144aaa78a","url":"./archives/2021/index.html"},{"revision":"1a1e0ec8567359f689697fab336507a6","url":"./archives/index.html"},{"revision":"56e3f563119649af0651ab716af9358a","url":"./categories/Hexo/index.html"},{"revision":"e87e0fad709951330d1469dc273f149e","url":"./categories/index.html"},{"revision":"1a9c5ac193e6a2dd13d8c782ad3ab9ae","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5c530cee0ad0b262a0c92199b51f86c3","url":"./Gallery/desktop.html"},{"revision":"36daacf3a34562dc8bfcd9db83964b1e","url":"./Gallery/index.html"},{"revision":"b0651c768ddcdc30d780ae317e06221e","url":"./image/pwaicons/manifest.json"},{"revision":"1c751abb4746aec1441a8629eca60f47","url":"./index.html"},{"revision":"f7efbacdf5c8e57ad57deace1198b010","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"97d06b27aafcfc3a08e57daea56727ec","url":"./link/index.html"},{"revision":"9efeacd8befc58b1520990649a688ab7","url":"./music/index.html"},{"revision":"d33b1a23f336c39f9f8f90b7ef0262a5","url":"./tags/Hexo/index.html"},{"revision":"96afa998119eff840c30b00d5111ab70","url":"./tags/index.html"}],{
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