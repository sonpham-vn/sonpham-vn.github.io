var cacheName = "cammelia-pwa";
var filesToCache = [
    '/',
    '/index.html',
    '/contact.html',
    '/painting.html',
    '/photo.html',
    '/css/style.css',
    '/js/main.js',
    '/images/common/paint-bg.jpg'
];

// Start and cache all the needed files
self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesToCache);
        })
    );
});

//Serve cache when offline
self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );


});