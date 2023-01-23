'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "271805737d728134ca6d872cd77ca287",
".git/config": "4e2da749f51bf053c54bfb5f393ebf0d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5386af2d39ba25439cb027f0fe5bd8b2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d7bf1dbde84729a71187886fed4e336a",
".git/logs/refs/heads/master": "d7bf1dbde84729a71187886fed4e336a",
".git/logs/refs/remotes/origin/master": "13783d7f24a733e257d1e565bc7e86f3",
".git/objects/00/1d11133947a3f4fbacc28d65b992fd0f0f7faa": "dd85b6c4ca8222511681e88f4ca3f523",
".git/objects/06/3d591e58a41edad52d65079ab79d722b6c2d83": "68770274af66e35da4ef86cc3e9064fe",
".git/objects/0a/aa46050818a7c32d6359c12258dba21736770d": "001c3d0ad93068ce79b68297f6b57011",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/b3275c1d500f2eec7150b3708af273d72a6a14": "220d1442bf2dd9fc5b6f24d4754adfa3",
".git/objects/1f/749a6b7d741fa8d41d9182ddfc4c4566467530": "73c3f37bbfe0d6c206823a85309e2dce",
".git/objects/20/85d4def55292bd67c9033decea2da520096f64": "0c6f075049565959d4edaa6f338955ed",
".git/objects/25/4d7a9255a1fed8549ef4d9180620187992d507": "4cd8f49475f0e309ccfc3634562c6900",
".git/objects/25/95bcb1bf8915cbf21ba25068a6a6a545130d53": "21e359f69bf6e59299e72ba9b76d3ca6",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/66f0c7b34cec6e3a13a7b36565574bc897f920": "a918ca3094677602373a99959737f7b9",
".git/objects/2e/1050a614f3f6479cdaffb5676558b3eebee238": "13c322c1e80b969d57691aa7a75525dc",
".git/objects/30/1fa0ed723249921f00006992d624ab0455fa06": "0e2cebd62ce9e88b746df0a65a69dad2",
".git/objects/35/3adc1974daad3f98174682240f773aa10589e9": "8a86ba7b6d3123dc07f3854d0228bfa5",
".git/objects/36/bee8d5ae765d7631973531584b8a4f4e724645": "0dc9e57435a7d2998b6b7e3f7e50d827",
".git/objects/39/0997fe0066da895ed0866a5d18a16875748b7d": "e9ace97fdd33ec9539e492ff38af2aa5",
".git/objects/39/c799511951d8c9c8b0d4269dbe67aab004cd84": "c7e04a62ba77b108e086ea2e49ecf00b",
".git/objects/3e/7d9245210f525f85623df01cbe5e36dd9d5320": "c4867f3ded8677a9cecda8fe3b960eae",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/45/241c1fa71fcbed7890a5943edbd88bfa0bc142": "5dd31fc27bee0be37e5dd7120858e367",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/17f7ff223989b183d06fccfdc6e04b7a361fd6": "0c343904f9a3df462a60d6ee36bab491",
".git/objects/53/a079c74dac59fc5fd55c6177c39fa47e85e10d": "1aaa35ae6c775e3cef5e18d5355850ba",
".git/objects/64/f6a610bdce2cdbf084e58074fca417904a85cf": "ce8490feea4b4eb71ba91d2b2fc37381",
".git/objects/67/194bdff27a1bca5a9b28e3aab8b54757d8a842": "66bc8eb0ad44a94ba8a55c3035b232cb",
".git/objects/72/0c931abc159c55aed4e999039cdaf496c70199": "ac3d99fc62c5f5a4c1db66a3bc956226",
".git/objects/74/02c668f6feeb5430cc7dc429ad1a333af37dfb": "bce10e574d31eee6d5e7f40bc94d42dc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/114cc0d6ab359f823ec8e26d8fdc127a833fe8": "01b8cf3bcc2dbea6e4932a4d50324658",
".git/objects/7c/e4fd5a694b6fd0d23e5bac86bf7cb8321c1da8": "0fb8f6f1993de0d827bba1a580810199",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/82/2edecca10f1b83daa12a4da5c6a8dc6a8ce124": "0b6ba87e4c1eff81feac23da0ea4ef75",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9c/1c67b4354f6899bc37abae4050a3b265b9ac93": "181825076471c189f2923b4f92648707",
".git/objects/9f/351be15823522949f81acdffc87b6af38127dc": "11608b810a4afa3bcbbf9c2ebf5a9b5f",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/6367de2417d89c46aa23430f1b086583859df8": "e238cd9d3068b9592d1feaafdbc541ff",
".git/objects/a4/98ae5dc204fa739378868ffbe2cf57fcb63275": "ea057df7365eb83bef6ed93e3e5e3f6c",
".git/objects/a6/c6b647a6c66bb56ed4bc6786222f9b34e661d7": "a3a08e30b624229b0c1c61eacb3509dc",
".git/objects/a9/08522373847fb7decbedda81fb15bcd28a65bb": "0e03583af5c32e677b53d096f894f12a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c9266630315a32125fe16687632fee34bcea28": "4e4659a83e9bd5168f0bdec38f279c99",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/309aad864f2ce4ef67212305694cb658cf26f1": "f5203cc8e734b20a29823012c3849756",
".git/objects/ba/6a17b4d271384882369232d50413d8a709d67e": "0f7bf22b61a935e7e0458732569e765b",
".git/objects/bd/c0c8b34e95b5bde629fee98279bbf9789f0d84": "7ac77f541a4b338af654d1e39970e116",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e4/e1dac99152c98391471639e379550b2564d2f7": "a6fb9d14aafb2e05ca42dfdd605d6437",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/b4e8b5d29f2adb48a563e22b0850112b4ff423": "14649fa827fec057442d8eab0a81ac6f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/f108bddc696d72ca8119a2bdd76a5b9443a574": "e9fdecf1a7cffd8536b88ad34b07e44b",
".git/objects/f5/07e18d15c27eb98cecc6a817048943eee701c8": "ca1f89c5128ee3405ec6d445370205ec",
".git/objects/f6/0163510764d1734a5511d90ae808a7412851cc": "03dfbaa5f8ffeef5adde8e53c5ccfa96",
".git/objects/f7/d934d7081f92c2cb938f80c9d71215f1fae377": "6c2242bfc8112a1e51ba1a4bdb115589",
".git/objects/fd/32134c19935649c91d66bfa37eb12dc8273447": "070458cf6eb8ea9ee16bf614d43e30af",
".git/refs/heads/master": "32ea6e2a7a7e9dcf3a6e04957ec98b74",
".git/refs/remotes/origin/master": "32ea6e2a7a7e9dcf3a6e04957ec98b74",
"assets/AssetManifest.json": "29b9db207c347fb7b40c40c02d840202",
"assets/assets/images/avatar.png": "810d2eac2613cfa3abb140cc271e643f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9267d2a9e00fbd741fbf0bb623ab3b5c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "95b6ff1b0f454594fdcf79c6f298fdb4",
"/": "95b6ff1b0f454594fdcf79c6f298fdb4",
"main.dart.js": "fea5298e086e069680cbe2870b25ddb5",
"manifest.json": "e7e0eef197d76d10bc07e2298baacdc6",
"version.json": "2e0a1a95b4f480b17ffea03c8e018f16"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
