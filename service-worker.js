self.addEventListener("install", e => {
  e.waitUntil(caches.open("wtg-cache").then(cache => cache.addAll(["/", "/index.html", "/style.css", "/script.js"])));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
