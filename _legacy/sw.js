self.addEventListener('install', function() {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(e) {
  var url = new URL(e.request.url);

  if (e.request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  var path = url.pathname;

  if (path !== '/' && !path.includes('.')) {
    e.respondWith(fetch(path + '.html'));
  }
});
