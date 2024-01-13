'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d5ffc0163d3612dc92f8c144a40d20da",
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
"assets/assets/icons/Follow_Icon_Active.svg": "e837125b26fe7d92ea9d0bf4d25b64d5",
"assets/assets/icons/Follow_Icon_deactive.svg": "a4973c83988b536326a718b200597c31",
"assets/assets/icons/get_to_business_icon.svg": "5a53ad2126c335ecc6af849f36cbd35e",
"assets/assets/icons/Home_Icon_Active.svg": "1856ea9f99f5f9ba655a40c38d97f03a",
"assets/assets/icons/Home_Icon_deactive.svg": "cd2c73a214bb07727c83be8d8659daac",
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
"assets/assets/icons/qr%2520code.svg": "9ad5b70b3507ad13da1d9666eefed4cf",
"assets/assets/icons/recording.svg": "d050cb03672417bb0344a8ff7a75d2df",
"assets/assets/icons/refresh%2520blue.svg": "87cef7253eb1040b774c9b5d57464fbb",
"assets/assets/icons/search.svg": "eae9df87144573ed3ba500a7aba11f45",
"assets/assets/icons/secret.svg": "d24444f737901c0df2827fa6b41b97d7",
"assets/assets/icons/star.svg": "7c0e1699a30e6b78a714237076e90ad8",
"assets/assets/icons/stop%2520record.svg": "34f71cac38b9982dcbba365ee5c093f4",
"assets/assets/icons/tic%2520green.svg": "565d6ed11e8fd5e6faec867af29d28e1",
"assets/assets/icons/tic%2520white.svg": "bdca04ae066c8e94e9be34a5790c5166",
"assets/assets/icons/unhappy.svg": "99821c9d5c2fb853893e12e7d8763698",
"assets/assets/icons/Units_List_deactive.svg": "22530ebd63e1878c943610aa5b33d383",
"assets/assets/icons/Unit_list_active.svg": "da9ab3829e9d424f838942c1e7bff0c4",
"assets/assets/icons/voice.svg": "8b7974cac1291bd46451d6af0e201c19",
"assets/assets/icons/Voice_Bar_1.gif": "9c863da414ae2c53dbe587f2d4931c9e",
"assets/assets/icons/Voice_Bar_2.gif": "28984d89314773843a9c8f789659ca5c",
"assets/assets/icons/Voice_Bar_3.gif": "df6a9e09bf21934d743f2cad7c7d4630",
"assets/assets/icons/wow%2520white.svg": "cd233e97e4e2326d8f448172cc56ca5b",
"assets/assets/icons/wow.svg": "36d73f6c4d8cb6f1cef7e353c70d9e11",
"assets/FontManifest.json": "e216200f0a7d50d8d585dcba831bec9a",
"assets/fonts/MaterialIcons-Regular.otf": "f8cfacef218b3c2edf1775fcb8196d2d",
"assets/NOTICES": "2ae9530b457c0fbcf91bce58e59b732d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"ddddd.png": "65dae22e007f4f2e6152c081b9004135",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
<<<<<<< HEAD
"index.html": "4b9d46ed4a412a02216826797a444aa5",
"/": "4b9d46ed4a412a02216826797a444aa5",
"index.min.js": "1259d50407597e5cd08b72255e33b062",
"main.dart.js": "9f8f0e0f9fa921deb7fd9867f8811fc0",
=======
"index.html": "c552b53ed8420308fcc47a56179120cd",
"/": "c552b53ed8420308fcc47a56179120cd",
"index.min.js": "f7cace592dfc2058459a409cef25b9a9",
"main.dart.js": "fe8c356125b392502627910d1eb0e461",
>>>>>>> b0ebfc4ddc540ef921b89784e4e56668b60bebfa
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
