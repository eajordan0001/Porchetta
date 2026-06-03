const CACHE_NAME = 'chef-ade-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// 安裝並暫存檔案
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// 攔截請求，網路斷線時改讀取暫存
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});