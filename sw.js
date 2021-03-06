var cacheName = "cammelia-pwa";
var filesToCache = [
  "/",
  "/index.html",
  "/contact.html",
  "/painting.html",
  "/photo.html",
  "/css/style.css",
  "/js/main.js",
  "/images/common/paint-bg.jpg",
  "/images/contact/unsplash-contact.jpg",
  "/images/home/pexels-painting.jpg",
  "/images/home/pexels-photography.jpg",
  "/images/painting/unsplash-painting-1.jpg",
  "/images/painting/unsplash-painting-2.jpg",
  "/images/painting/unsplash-painting-3.jpg",
  "/images/painting/unsplash-painting-4.jpg",
  "/images/painting/unsplash-painting-5.jpg",
  "/images/painting/unsplash-painting-6.jpg",
  "/images/painting/unsplash-painting.jpg",
  "/images/photo/unsplash-company.jpg",
  "/images/photo/unsplash-event.jpg",
  "/images/photo/unsplash-party.jpg",
  "/images/photo/unsplash-wedding.jpg"
];

// Start and cache all the needed files
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

//Serve cache when offline
self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'go') {
    clients.openWindow('/painting.html');
  } else if (event.action === 'dismiss') { 
  } else { }
});
