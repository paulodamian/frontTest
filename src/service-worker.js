workbox.routing.registerRoute(
    new RegExp('\.(?:png|gif|jpg|jpeg|svg)$'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'images'
    }),
);

workbox.routing.registerRoute(
    new RegExp('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'),
    workbox.strategies.networkFirst({
      cacheName: 'api'
    }),
);

workbox.routing.registerRoute(
    new RegExp('^http://www.publicdomainpictures.net.*?$'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'ext-pics'
    }),
);