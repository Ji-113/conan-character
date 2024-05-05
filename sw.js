// Cache name
const CACHE_NAME = 'pwa-sample-caches-v1';
// Cache targets
const urlsToCache = [
  './',
  './index.html',
  './Conan-Edogawa.html',
  './Ai-Haibara.html',
  './Ayumi-Yoshida.html',
  './Mituhiko-Tuburaya.html',
  './Genta-Kojima.html',
  './Hiroshi-Agasa.html',
  './css/style.css',
  './images/コナン最高.jpg',
  './images/slide01.jpg',
  './images/favicon.ico',
  './images/slide01.avif'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
