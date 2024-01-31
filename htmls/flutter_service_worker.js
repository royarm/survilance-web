'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d5ffc0163d3612dc92f8c144a40d20da",
"assets/AssetManifest.bin.json": "c0ab07cd23c65095a425b0c67f523e04",
"assets/AssetManifest.json": "2555c840de5b50ee75f52dd92df4faf1",
"assets/assets/fonts/IRANSansXBlack.ttf": "184607ec8f26a789341aee0188cfa6fb",
"assets/assets/fonts/IRANSansXBold.ttf": "be579363ac3f31a4be19e034bf627450",
"assets/assets/fonts/IRANSansXDemiBold.ttf": "abfe5e908a67a065c5acb284ece75718",
"assets/assets/fonts/IRANSansXExtraBold.ttf": "bd9be3d2d751fed3d18a597cf3caad41",
"assets/assets/fonts/IRANSansXLight.ttf": "123bd587a56f609a4a11fdba478d3ef3",
"assets/assets/fonts/IRANSansXMedium.ttf": "30d96e26d791255c14298567c0abc459",
"assets/assets/fonts/IRANSansXRegular.ttf": "36ecc1c83b55d3373ce008bca6267dc6",
"assets/assets/fonts/IRANSansXThin.ttf": "e6f2fcf87f22ee81e0fdccc93342240d",
"assets/assets/fonts/IRANSansXUltraLight.ttf": "be90ac0c756a516b0b4a863ca1eb65fa",
"assets/assets/icons/add.svg": "7cfd7efb0704caa6a0bcd43f935b0c92",
"assets/assets/icons/back.svg": "9d2b8f3f93b479c42b4f197c720e6cd7",
"assets/assets/icons/Backorenge.svg": "e3298fc250aca1c7dce02aa0f522972c",
"assets/assets/icons/Bold-Arrow.svg": "49e46c03c231492be28d39a9d24ae278",
"assets/assets/icons/delete%2520white.svg": "abc5e72fed746dee9f1f675483c1d511",
"assets/assets/icons/delete.svg": "6ccecd10eac5de12f778f5dc1aea23a5",
"assets/assets/icons/deleteblack.svg": "5a83ce7480671291f6d447857ae652d1",
"assets/assets/icons/deletegrey.svg": "5987071b49d18c88a31440339c7174f3",
"assets/assets/icons/deleteRed.svg": "418d526fb8bea99c8def1347574960ff",
"assets/assets/icons/denied%2520red.svg": "108aadebde44546cd2a62383ada3855d",
"assets/assets/icons/downlaod.svg": "11bd9a67c528574c816d08cda6a2fda5",
"assets/assets/icons/empty%2520check%2520box.svg": "6b92bf30c4dd9bab4bf141651770abfb",
"assets/assets/icons/Follow_Icon_Active.svg": "0c22e68e2ba090132ee0636ecd5134c8",
"assets/assets/icons/Follow_Icon_deactive.svg": "6b1b2b3f3e0f6188881ddb322db9b8b5",
"assets/assets/icons/get_to_business_icon.svg": "11121a53fc876f8b4f9a5050044f5f0c",
"assets/assets/icons/Home_Icon_Active.svg": "66b6a80d8ce65c218c1937a20524413b",
"assets/assets/icons/Home_Icon_deactive.svg": "347d77a77f58dbe61dbc1fc6a17259f5",
"assets/assets/icons/image%2520logoo.svg": "a9cb94faae2ac91280d9b0d571ac5939",
"assets/assets/icons/location.svg": "8bdc990c362cc7974067386e29e5cb28",
"assets/assets/icons/logoPlace.svg": "cefa98979197999a937e1a176d320382",
"assets/assets/icons/massega%2520grey.svg": "89993c38f4f307aa3532842133737116",
"assets/assets/icons/message%2520orange.svg": "1f7eba19dd4c4c60939713eea4f0a52e",
"assets/assets/icons/mic.svg": "f3544dca7b2a491aaee6bf99316fadeb",
"assets/assets/icons/miceebluee.svg": "a87d80a40c3f6a85f8e333f1ee540f6b",
"assets/assets/icons/pause.svg": "5b68dd7b5f617410f5fe670bf4e37d2e",
"assets/assets/icons/pdf%2520logo.svg": "c5769d56aa78867eeb5d00d06fcfb7b4",
"assets/assets/icons/phone.svg": "cd42fe6f3dfeff39e1ff5f5417eddd4f",
"assets/assets/icons/play.svg": "69b9b323b4ac650a0b7077b6d8d90870",
"assets/assets/icons/qr%2520code.svg": "42b50aa9237fe3111b4ad5ac8db60687",
"assets/assets/icons/recording.svg": "d050cb03672417bb0344a8ff7a75d2df",
"assets/assets/icons/refresh%2520blue.svg": "87cef7253eb1040b774c9b5d57464fbb",
"assets/assets/icons/search.svg": "555ea0f74b215b9f2ee4afd5cbf35ec7",
"assets/assets/icons/secret.svg": "d24444f737901c0df2827fa6b41b97d7",
"assets/assets/icons/star.svg": "7c0e1699a30e6b78a714237076e90ad8",
"assets/assets/icons/stop%2520record.svg": "34f71cac38b9982dcbba365ee5c093f4",
"assets/assets/icons/tic%2520green.svg": "565d6ed11e8fd5e6faec867af29d28e1",
"assets/assets/icons/tic%2520white.svg": "bdca04ae066c8e94e9be34a5790c5166",
"assets/assets/icons/unhappy.svg": "99821c9d5c2fb853893e12e7d8763698",
"assets/assets/icons/Units_List_deactive.svg": "c71a640b510531f0525b475381a20630",
"assets/assets/icons/Unit_list_active.svg": "7d6d2ad2f58f3c1eecd21ee47fe65a66",
"assets/assets/icons/voice.svg": "8b7974cac1291bd46451d6af0e201c19",
"assets/assets/icons/Voice_Bar_1.gif": "9c863da414ae2c53dbe587f2d4931c9e",
"assets/assets/icons/Voice_Bar_2.gif": "28984d89314773843a9c8f789659ca5c",
"assets/assets/icons/Voice_Bar_3.gif": "df6a9e09bf21934d743f2cad7c7d4630",
"assets/assets/icons/wow%2520white.svg": "cd233e97e4e2326d8f448172cc56ca5b",
"assets/assets/icons/wow.svg": "36d73f6c4d8cb6f1cef7e353c70d9e11",
"assets/FontManifest.json": "e216200f0a7d50d8d585dcba831bec9a",
"assets/fonts/MaterialIcons-Regular.otf": "1b4dc172bdc1ffa7b84ddc0ebd2e9625",
"assets/NOTICES": "6fdea0da15a566b37a75bda1af034190",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c430e9dd46495eef94238a33ee211cf",
"/": "8c430e9dd46495eef94238a33ee211cf",
"jsQR.min.js": "a2ed917726e7392742b6a28088aceca5",
"main.dart.js": "29b4afc2c780b7864810081751e13775",
"manifest.json": "75c8555f0af3ac7ce478f52c7f6548d3",
"version.json": "44ba205015cdee9c78b69664a1dcd85c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
