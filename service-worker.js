const CACHE_NAME = "reforco-escolar-v1";

const urlsToCache = [
  "/reforco-escolar/",
  "/reforco-escolar/index.html",
  "/reforco-escolar/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
