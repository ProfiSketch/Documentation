/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1079eae3607110f5f15fc3f519d68736"
  },
  {
    "url": "assets/css/0.styles.1c3446f0.css",
    "revision": "edb04ad60d0a86c31bc7d040b62ec80b"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.586090b3.ttf",
    "revision": "586090b38a233ce0201fb221eb117a36"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.9219a80f.woff",
    "revision": "9219a80f0478e0bfdee5f4c753ce8535"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.b661c28b.eot",
    "revision": "b661c28b0f28606a96722ad2d9588b70"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.bca3a187.woff2",
    "revision": "bca3a1873ac988faff0817eca96b2d86"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ddcc8bc4.js",
    "revision": "736c0b917ddc2eb0df79618b8048ddd9"
  },
  {
    "url": "assets/js/11.9ad73efd.js",
    "revision": "2a9ecfafc8198100eae48f55a1ac9300"
  },
  {
    "url": "assets/js/12.27e217c2.js",
    "revision": "547e618891053d62e7d8fb8d15712474"
  },
  {
    "url": "assets/js/13.ec5d8602.js",
    "revision": "0c48746bba5575afc2e1fc954a7b1b97"
  },
  {
    "url": "assets/js/14.8ec7df27.js",
    "revision": "0e1e6ee9528d4d9a5c5d3efdee8381ee"
  },
  {
    "url": "assets/js/15.af8727d2.js",
    "revision": "0b38816d8c7be5fd9af6e6d9f501c302"
  },
  {
    "url": "assets/js/16.b0a442d3.js",
    "revision": "4b1d6864484858773d9d71e0dea99a90"
  },
  {
    "url": "assets/js/17.7313f750.js",
    "revision": "02ac852b8c6deedc4a6fcd2b3a0bbabc"
  },
  {
    "url": "assets/js/18.78f0e120.js",
    "revision": "98aae48a129c546bc708794d4426d168"
  },
  {
    "url": "assets/js/19.8c2beaaf.js",
    "revision": "869e79035f21e5ca407476b173cf3d20"
  },
  {
    "url": "assets/js/2.6e91b0c1.js",
    "revision": "7e7fb63413d1813c317b011c3dfaf26d"
  },
  {
    "url": "assets/js/20.96cc1a9a.js",
    "revision": "fa0d19521663b9b7979cbc90f66864a5"
  },
  {
    "url": "assets/js/21.f919e1dc.js",
    "revision": "5eea3fdbe8222019807ddef45b112092"
  },
  {
    "url": "assets/js/22.1f76f7e7.js",
    "revision": "b0c5ff90f65eef5c89b80cc981723be0"
  },
  {
    "url": "assets/js/23.6c764ae4.js",
    "revision": "6333f5aa11050ff99dc73599b2832bea"
  },
  {
    "url": "assets/js/24.461ed701.js",
    "revision": "701522776f9f9f5557561b5e93bf9a65"
  },
  {
    "url": "assets/js/25.2f227d0e.js",
    "revision": "d941a11917203ab2a88ca6b9c55d4be6"
  },
  {
    "url": "assets/js/26.f4698b61.js",
    "revision": "e588f9b532b77e86b6ca761e45c4625e"
  },
  {
    "url": "assets/js/27.a34ea77f.js",
    "revision": "771ba0315558f32ecd2794b53a0e0327"
  },
  {
    "url": "assets/js/28.d392c10d.js",
    "revision": "6add50aba77115b69dd7369d370280f7"
  },
  {
    "url": "assets/js/29.197ff040.js",
    "revision": "0f23c87c758a0dce893e3d6cfe5daec5"
  },
  {
    "url": "assets/js/3.0ebe6a7e.js",
    "revision": "d62afcf4e00f83fbe1259e7fe5b3d54d"
  },
  {
    "url": "assets/js/30.1e959b54.js",
    "revision": "ee68deefca00509362d5022289def54f"
  },
  {
    "url": "assets/js/31.ef20d735.js",
    "revision": "65d27fec5326f371596a5e807a5b8b86"
  },
  {
    "url": "assets/js/32.92736665.js",
    "revision": "97d09da961e93aeef5daae6494c766e7"
  },
  {
    "url": "assets/js/33.793495f1.js",
    "revision": "e3d3a50dfbef01ebad04e607e754ee79"
  },
  {
    "url": "assets/js/34.3b81f383.js",
    "revision": "1ef06362f6ba3cfdce4d0783ff176537"
  },
  {
    "url": "assets/js/35.c1ab3069.js",
    "revision": "82ec3f9d28a90de650681002b4c9c86b"
  },
  {
    "url": "assets/js/36.931b5d9b.js",
    "revision": "68873aeb92a37ef29694a690729a331a"
  },
  {
    "url": "assets/js/37.78ee3a52.js",
    "revision": "1cb396eade9a4809b17f30412df0a168"
  },
  {
    "url": "assets/js/38.2b14896c.js",
    "revision": "4773456285278672c513e31f31b605f3"
  },
  {
    "url": "assets/js/39.e1d20b36.js",
    "revision": "b7c9c782edf976336e9edca9c1336c90"
  },
  {
    "url": "assets/js/4.6c2d1772.js",
    "revision": "0e6121f0401ada91c8b5e4be9fa1577a"
  },
  {
    "url": "assets/js/40.b4852c34.js",
    "revision": "cc43d19d0219c6954045565c86f0d554"
  },
  {
    "url": "assets/js/41.f48ab0fa.js",
    "revision": "9c20b9ad78efcf07e10cdd755bfdbaa7"
  },
  {
    "url": "assets/js/5.b6baed86.js",
    "revision": "52e37a72ce868b81abc53e120845402c"
  },
  {
    "url": "assets/js/6.4c6eb29b.js",
    "revision": "58839a30f0c894f9cb375e156ac856bc"
  },
  {
    "url": "assets/js/7.7ba00881.js",
    "revision": "151358288c831a182d40e23531bacd71"
  },
  {
    "url": "assets/js/8.f27c5aba.js",
    "revision": "53c04b44ef07cda5613156a825d8c01c"
  },
  {
    "url": "assets/js/9.13a624d5.js",
    "revision": "a9c5beff6aa21d6dbd030cba835853ba"
  },
  {
    "url": "assets/js/app.3aa31382.js",
    "revision": "0927d436a7db98aca91ecf9290462d5d"
  },
  {
    "url": "calc/dev.html",
    "revision": "74f352f43a989bf8ceda318524fd2e8b"
  },
  {
    "url": "calc/index.html",
    "revision": "a37e668ee11bdf5f5ba5d52c6c0c2963"
  },
  {
    "url": "calc/interface.html",
    "revision": "2919b51802fc3dd17956cc96d86d46a6"
  },
  {
    "url": "calc/math.html",
    "revision": "78869efc262fa51ec1eb051b79d0885b"
  },
  {
    "url": "calc/settings.html",
    "revision": "999ea6bb39da10037efa6c04d9b45a7a"
  },
  {
    "url": "gif/to-sync.gif",
    "revision": "b2f5056e7acbd93b0687d8347ec021ff"
  },
  {
    "url": "img/logo.svg",
    "revision": "4785735fae6abecf15dc9a519ea11da6"
  },
  {
    "url": "img/menu_files.png",
    "revision": "db15d0283f1d70e3532a44fd0c87d98c"
  },
  {
    "url": "img/settings.png",
    "revision": "3cd95b62e4809af8ebb2fff43d1c0b85"
  },
  {
    "url": "img/start_window.png",
    "revision": "823f6885d8323bb34ec98ce1f8067391"
  },
  {
    "url": "index.html",
    "revision": "2304572e6470fc2193011c81336b0497"
  },
  {
    "url": "ps/comments.html",
    "revision": "ea87e086b64ca7f16a08d9cbbcfb920a"
  },
  {
    "url": "ps/convertation.html",
    "revision": "75c4a0b72e186094ce5c82218d52cdea"
  },
  {
    "url": "ps/db/create.html",
    "revision": "4879fb822c6937fc60e5e6b679355288"
  },
  {
    "url": "ps/db/edit.html",
    "revision": "303111f5ca29c0589c9ee0aee576f4f2"
  },
  {
    "url": "ps/db/index.html",
    "revision": "24f8c194e5d434fcb0c5e5d3e5bad113"
  },
  {
    "url": "ps/db/properties.html",
    "revision": "09f79be63f0dde023dcedc0856d8180b"
  },
  {
    "url": "ps/db/search.html",
    "revision": "e50d0f98f5c4785ae7cdd1b54ded08fe"
  },
  {
    "url": "ps/editor2d/connections.html",
    "revision": "53a0ab2fc90b4b1cf065e52d51e7bb38"
  },
  {
    "url": "ps/editor2d/drafting.html",
    "revision": "897a85a311d3803e46e5d9e1e2a9a190"
  },
  {
    "url": "ps/editor2d/index.html",
    "revision": "986008145c65b4ca8df4cab700c5861a"
  },
  {
    "url": "ps/editor2d/libraries.html",
    "revision": "48bb0fbbd5f4e2cb0e3ed93ad04090f8"
  },
  {
    "url": "ps/editor2d/properties.html",
    "revision": "10dd0067afa37ecf03bd6efee3f65f73"
  },
  {
    "url": "ps/editor2d/searching.html",
    "revision": "249c14e3e96aff49a208a0ec87678c61"
  },
  {
    "url": "ps/editor2d/shapes_placing.html",
    "revision": "8144f4b2090d6be8b769cc8a3e8483f6"
  },
  {
    "url": "ps/index.html",
    "revision": "e8a4295d689ed91ae40982f9fc41bd97"
  },
  {
    "url": "ps/plugins.html",
    "revision": "df188f81678a9472c9775df8cdb47387"
  },
  {
    "url": "ps/profile/create_project.html",
    "revision": "0dd3ab5409c6ff8963aad71ed3e99ea7"
  },
  {
    "url": "ps/profile/index.html",
    "revision": "160641c2d649dcff2f02bf3dca4cbd86"
  },
  {
    "url": "ps/profile/registration.html",
    "revision": "8c6b3452010345ad964dbf27d2c63883"
  },
  {
    "url": "ps/specification/export.html",
    "revision": "ec29fe174861e1df3ddb25c1900131bd"
  },
  {
    "url": "ps/specification/index.html",
    "revision": "3650384e9b9752879f5d38f41dc91ca5"
  },
  {
    "url": "ps/specification/settings.html",
    "revision": "80df72fb983e3df117640bfe09bf7fcf"
  },
  {
    "url": "ps/support.html",
    "revision": "48b41d9df428f3a1d0aa34a17971055e"
  },
  {
    "url": "ps/timelapse.html",
    "revision": "153be5a60c364c22f7e78652b32d34d7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
