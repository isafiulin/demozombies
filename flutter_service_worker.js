'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "30c162cb8500958a03ccf0bdbb6942f0",
"version.json": "03c530627a594a18ef17ca0945eb6b0e",
"index.html": "2d5dd5f11a4999a9a245b5f066a89f65",
"/": "2d5dd5f11a4999a9a245b5f066a89f65",
"main.dart.js": "58aba8c8c745127cdb4b5efb329766ab",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0fab440411bd9225bc1a885e545c8046",
"assets/AssetManifest.json": "7ebe1f0bbbe72e23479edb1ffb920d64",
"assets/NOTICES": "201d3d9e0943893cf0edf3b94ebbb6c9",
"assets/FontManifest.json": "efe3b547e68976ebc326f9b0c5443242",
"assets/AssetManifest.bin.json": "eea6205355460349cf6ec4ed0a90aaff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8e606fafa62eec0aa58174206d601271",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/againlose.png": "c6843dcd635381529da458b5878ac881",
"assets/assets/images/lvl1_back.png": "4ba95de4584021d1760865498a541703",
"assets/assets/images/lvl2_back2.png": "18a75ab5f5f277106ef3f93dfa010b16",
"assets/assets/images/buy.png": "851bce2ef9e4392f8e4347f57538ec62",
"assets/assets/images/blueEn.png": "9efc0c00d80f062f3592f2fad6cfcdd6",
"assets/assets/images/los_back.png": "72189f2ee93dac4b17689be85b17dce2",
"assets/assets/images/zombie3_1.png": "a6332cb23dfeb8d4662c57bd6472f393",
"assets/assets/images/zombie1_2.png": "d856852aeafc29cc77db476d1940581d",
"assets/assets/images/splatfd.png": "33c2a68ed1cfddd002300794c4eaf9f4",
"assets/assets/images/zombie3_2.png": "96fae6296e1d86df6879b4417730b8dc",
"assets/assets/images/nextwin.png": "8623948375bf31055f85d26f0ac391bd",
"assets/assets/images/zombie1_1.png": "9dfb5a07a98e7756f7fc0b0da52ad1c7",
"assets/assets/images/lvl3_back3.png": "1e5ac5213585e77f03f9cd3cbfbadb5d",
"assets/assets/images/guns.png": "07f21f7133e650f52b99e93f1791687f",
"assets/assets/images/zombie2_2.png": "b9fb44da0f76aed57e81669b521b62b8",
"assets/assets/images/shp_back.png": "cf53923e9a2fbc7a34809441fe99047a",
"assets/assets/images/redEn.png": "4169dc1eff921e97eb0c92e8d34bb95e",
"assets/assets/images/leftred.png": "548a6bc3e9fa10c3e8c497c20e22605d",
"assets/assets/images/def_back.png": "8b8fdc91c70ba4465d0f7df26770b1ae",
"assets/assets/images/zombie2_1.png": "543a85412f8530c48f967cf6ccac5177",
"assets/assets/images/korobhit.png": "2d39d51c07346bc40599431921abe03a",
"assets/assets/images/set.png": "c646307042978a543a662ee4eb9052cd",
"assets/assets/images/win_back.png": "3832ce479d51cea7ed389b1d089bef62",
"assets/assets/images/left.png": "3dcbaac742121f6b09f05d5b48756c12",
"assets/assets/images/redDis.png": "1c8e5cf3641e9d2b52e6b383462e6e2e",
"assets/assets/images/cat.png": "d3d69bb2990d85c9356332a9e6d3c948",
"assets/assets/images/bull.png": "5036587dd7db49c9f0928517946bd63a",
"assets/assets/images/backlose.png": "61382057dd228b7dd11ef9682970c48d",
"assets/assets/images/lvl3_back.png": "db0bdcafca918863b0c9a49438549fbe",
"assets/assets/images/lvl2_back.png": "28da0c97ba98e9dee8715d8bbf61c675",
"assets/assets/images/korob.png": "9791cf4912ddb39ac4afcd6ac466c841",
"assets/assets/images/rightred.png": "2c32aa67a5879f58a81ed73324be3f9a",
"assets/assets/images/mai1n_back.png": "dad290e6e535a3837f6d4b417d26d414",
"assets/assets/images/lvl1_back1.png": "8b8fdc91c70ba4465d0f7df26770b1ae",
"assets/assets/images/first_back.png": "224f1919f312a643aca21dd204ebf67b",
"assets/assets/images/right.png": "e9bdcac5722c9e7b75a6c23909da23b8",
"assets/assets/images/blueDis.png": "1b37a82484c4bf9c692839b46a3c81fb",
"assets/assets/images/backwin.png": "f06f7559401a6e689772057d4b14f75c",
"assets/assets/audio/shrt.mp3": "e75f4e245cc53a56aa77089687596ceb",
"assets/assets/audio/dlin.mp3": "3935281b4086484f70765a038663e9e3",
"assets/assets/icons/gun4.png": "54dc9024c913521ab57f3d3af1144af4",
"assets/assets/icons/bul1.png": "1be09a89658605dd6db1cae3bc422296",
"assets/assets/icons/bul3.png": "d9ae73700558e375dadc56f74735d74a",
"assets/assets/icons/bul2.png": "012de13dae55f83f6670f2e5087afd34",
"assets/assets/icons/gun2.png": "eb188a8aecd2d7e0a2025b8c76e05e5c",
"assets/assets/icons/gun3.png": "b77368ca2ae2438a5fbe48158a034c6e",
"assets/assets/icons/gun1.png": "23d96fbd3399315c5e96044dd7de8a86",
"assets/assets/icons/bul4.png": "b8a042c60dc59e73a129cce627f3fc91",
"assets/assets/icons/coin.png": "ac306da77a17e2d31d94c339f3049ebe",
"assets/assets/icons/back.png": "4156495873b94871fb1be04387549d8f",
"assets/assets/fonts/JejuHallasan-Regular.ttf": "5aa5149c2f1ec6f29bf2d383cf642f88",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
