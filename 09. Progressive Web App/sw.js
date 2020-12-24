let name = 'cache-v1'
let files = [
    './index.html',
    './index.js',
    './index.css',
    './'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(name).
            then(function(cache) {
                return cache.addAll(files);
            }).
            then(function() {
                return self.skipWaiting();
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).
        then(function(match){
                if(match) {
                    return match;
                } else {
                    return fetch(event.request).
                            then(function(response) {
                                    return caches.open(name).
                                                then(function(cache) {
                                                        cache.put(event.request, response.clone());
                                                        return response;
                                                })
                            })
                }
            })
    );
});