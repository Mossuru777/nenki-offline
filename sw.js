if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let f={};const r=e=>s(e,o),c={module:{uri:o},exports:f,require:r};n[o]=Promise.all(i.map((e=>c[e]||r(e)))).then((e=>(a(...e),f)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-HMz4jAy2ESCTYvxBL_leC.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_offline",revision:"HMz4jAy2ESCTYvxBL_leC"},{url:"/nenki-offline/_next/static/HMz4jAy2ESCTYvxBL_leC/_buildManifest.js",revision:"4ed8ffd217a398f2f163f9c3379567b9"},{url:"/nenki-offline/_next/static/HMz4jAy2ESCTYvxBL_leC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/nenki-offline/_next/static/chunks/125-5b29ad593bdac77a.js",revision:"5b29ad593bdac77a"},{url:"/nenki-offline/_next/static/chunks/174-73de33d0cd245c48.js",revision:"73de33d0cd245c48"},{url:"/nenki-offline/_next/static/chunks/2852872c-b8ad1940c2c7eb53.js",revision:"b8ad1940c2c7eb53"},{url:"/nenki-offline/_next/static/chunks/340-160feebbb11d3c72.js",revision:"160feebbb11d3c72"},{url:"/nenki-offline/_next/static/chunks/630-48aa5452355db4d5.js",revision:"48aa5452355db4d5"},{url:"/nenki-offline/_next/static/chunks/752-a9a7291bb26102a8.js",revision:"a9a7291bb26102a8"},{url:"/nenki-offline/_next/static/chunks/75fc9c18-56a07f7ad59f7a87.js",revision:"56a07f7ad59f7a87"},{url:"/nenki-offline/_next/static/chunks/791-2c7fadfce031a2c0.js",revision:"2c7fadfce031a2c0"},{url:"/nenki-offline/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/nenki-offline/_next/static/chunks/main-998dc039f5ca32df.js",revision:"998dc039f5ca32df"},{url:"/nenki-offline/_next/static/chunks/pages/NenkiTable-e44c28c0b91e9975.js",revision:"e44c28c0b91e9975"},{url:"/nenki-offline/_next/static/chunks/pages/PersonEditDialog-887b490dbbbb3eb9.js",revision:"887b490dbbbb3eb9"},{url:"/nenki-offline/_next/static/chunks/pages/Title-8372d955bac40bfa.js",revision:"8372d955bac40bfa"},{url:"/nenki-offline/_next/static/chunks/pages/_app-df511a3677d160f6.js",revision:"df511a3677d160f6"},{url:"/nenki-offline/_next/static/chunks/pages/_error-dfcfa5bb62767c20.js",revision:"dfcfa5bb62767c20"},{url:"/nenki-offline/_next/static/chunks/pages/_offline-d2dd1b5baccee6de.js",revision:"d2dd1b5baccee6de"},{url:"/nenki-offline/_next/static/chunks/pages/index-c8bf0c541aa1ab1d.js",revision:"c8bf0c541aa1ab1d"},{url:"/nenki-offline/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/nenki-offline/_next/static/chunks/webpack-33e8a4dc1301bd22.js",revision:"33e8a4dc1301bd22"},{url:"/nenki-offline/assets/pwa/icons/android/android-launchericon-144-144.png",revision:"8ce2e766fca945a77054863cb9a19db2"},{url:"/nenki-offline/assets/pwa/icons/android/android-launchericon-192-192.png",revision:"2bc17a2f77a6633978a78f0f5527b1ac"},{url:"/nenki-offline/assets/pwa/icons/android/android-launchericon-48-48.png",revision:"5a55a3113caa6101bf76ad6981be86a2"},{url:"/nenki-offline/assets/pwa/icons/android/android-launchericon-512-512.png",revision:"95829d4e370b9a891e63a43e0311f6cd"},{url:"/nenki-offline/assets/pwa/icons/android/android-launchericon-72-72.png",revision:"1491267b138477a4ba29b3112e595d24"},{url:"/nenki-offline/assets/pwa/icons/android/android-launchericon-96-96.png",revision:"0ebdab44ec7984a23e4b23198b494d60"},{url:"/nenki-offline/assets/pwa/icons/ios/100.png",revision:"bf1778b129b3fd2f45d95cde7c640ed0"},{url:"/nenki-offline/assets/pwa/icons/ios/1024.png",revision:"f22e257e142cccfde38efefb76bc49d7"},{url:"/nenki-offline/assets/pwa/icons/ios/114.png",revision:"98a85612124a3aab9fdc12404e24ed42"},{url:"/nenki-offline/assets/pwa/icons/ios/120.png",revision:"40324479eed976c7adf3d7b74d7f0f44"},{url:"/nenki-offline/assets/pwa/icons/ios/128.png",revision:"4bb9d707ab4391b4d7ce57467f53f944"},{url:"/nenki-offline/assets/pwa/icons/ios/144.png",revision:"8ce2e766fca945a77054863cb9a19db2"},{url:"/nenki-offline/assets/pwa/icons/ios/152.png",revision:"e5f391807c426fa32328a174ac413d9f"},{url:"/nenki-offline/assets/pwa/icons/ios/16.png",revision:"cd81241f6c8919d9df353e6a3e321716"},{url:"/nenki-offline/assets/pwa/icons/ios/167.png",revision:"19f1caeb1db2515d3190ceff1a170f7c"},{url:"/nenki-offline/assets/pwa/icons/ios/180.png",revision:"fc4dcb043f9aebadb8b87d69067f3dc9"},{url:"/nenki-offline/assets/pwa/icons/ios/192.png",revision:"2bc17a2f77a6633978a78f0f5527b1ac"},{url:"/nenki-offline/assets/pwa/icons/ios/20.png",revision:"abb036e0d244d4b37dcd317c834dca62"},{url:"/nenki-offline/assets/pwa/icons/ios/256.png",revision:"04093be8c7e14941b43e2650c67f6b11"},{url:"/nenki-offline/assets/pwa/icons/ios/29.png",revision:"4935705744f19a035f7b028115f16965"},{url:"/nenki-offline/assets/pwa/icons/ios/32.png",revision:"c5fd9c0ddd8fec20405a0bb8f9962671"},{url:"/nenki-offline/assets/pwa/icons/ios/40.png",revision:"ffa90d1f9e9b392422be06854258b572"},{url:"/nenki-offline/assets/pwa/icons/ios/50.png",revision:"cabccf00f69593ab64c4631b9eaf649c"},{url:"/nenki-offline/assets/pwa/icons/ios/512.png",revision:"95829d4e370b9a891e63a43e0311f6cd"},{url:"/nenki-offline/assets/pwa/icons/ios/57.png",revision:"599de5b767bcd43e2058ecf07ad90847"},{url:"/nenki-offline/assets/pwa/icons/ios/58.png",revision:"89fcad8b762ae799cead83f5f264dac0"},{url:"/nenki-offline/assets/pwa/icons/ios/60.png",revision:"5a0a6a6e5338bc1ecc1345cd1f7c92d6"},{url:"/nenki-offline/assets/pwa/icons/ios/64.png",revision:"e5609a3946aaf3acf2d44e312fb789ed"},{url:"/nenki-offline/assets/pwa/icons/ios/72.png",revision:"1491267b138477a4ba29b3112e595d24"},{url:"/nenki-offline/assets/pwa/icons/ios/76.png",revision:"9d76250107aa27b98d86b62a01bfe334"},{url:"/nenki-offline/assets/pwa/icons/ios/80.png",revision:"69bd418a4f69adc4f8d6ae58bc1c3044"},{url:"/nenki-offline/assets/pwa/icons/ios/87.png",revision:"71af883029b91735db9262b650149a50"},{url:"/nenki-offline/assets/pwa/icons/nextjs-icon-dark.svg",revision:"112e21eebb868eb7c613e0f75f370f06"},{url:"/nenki-offline/assets/pwa/icons/windows11/LargeTile.scale-100.png",revision:"5fb19c21b69d30bdcd95c263897d2bc9"},{url:"/nenki-offline/assets/pwa/icons/windows11/LargeTile.scale-125.png",revision:"5d7d2f7931144b43a94b692e5499a1b6"},{url:"/nenki-offline/assets/pwa/icons/windows11/LargeTile.scale-150.png",revision:"0dfd903310a9f29a7ea3d384abc8a2c2"},{url:"/nenki-offline/assets/pwa/icons/windows11/LargeTile.scale-200.png",revision:"1db6769675c3953e98a5d418f2fe4968"},{url:"/nenki-offline/assets/pwa/icons/windows11/LargeTile.scale-400.png",revision:"3aeb0a1e81217bcec0924c8b2c76a65a"},{url:"/nenki-offline/assets/pwa/icons/windows11/SmallTile.scale-100.png",revision:"671b089a447bc732ff64a210fb6b1c6b"},{url:"/nenki-offline/assets/pwa/icons/windows11/SmallTile.scale-125.png",revision:"3a6a717f92279d8298ce32810dea0201"},{url:"/nenki-offline/assets/pwa/icons/windows11/SmallTile.scale-150.png",revision:"bc5fa2ca55fe0c65b98e445b20901b02"},{url:"/nenki-offline/assets/pwa/icons/windows11/SmallTile.scale-200.png",revision:"8812e5736673e4822ba00bf92bdfe4c5"},{url:"/nenki-offline/assets/pwa/icons/windows11/SmallTile.scale-400.png",revision:"f6d20e9b0e72f20567e0c98021320b1e"},{url:"/nenki-offline/assets/pwa/icons/windows11/SplashScreen.scale-100.png",revision:"5804656e8d04a2de50b15e87d90de160"},{url:"/nenki-offline/assets/pwa/icons/windows11/SplashScreen.scale-125.png",revision:"05b563bb3ba4f9251dfb6972b790e1a2"},{url:"/nenki-offline/assets/pwa/icons/windows11/SplashScreen.scale-150.png",revision:"79f80a3cd53e535d9e96f0f8cd847ce0"},{url:"/nenki-offline/assets/pwa/icons/windows11/SplashScreen.scale-200.png",revision:"df2d79128fc0f53988f309a8bb03ced3"},{url:"/nenki-offline/assets/pwa/icons/windows11/SplashScreen.scale-400.png",revision:"072e7d88c1f440ff1dcbfed7d2e4dc3a"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square150x150Logo.scale-100.png",revision:"51bc3874b4005b751cfbba4e93e4ee5b"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square150x150Logo.scale-125.png",revision:"990fbd3782ba70674d405bebf07583b1"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square150x150Logo.scale-150.png",revision:"98d2fefcdb72b18ec9201fad9fa7dab6"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square150x150Logo.scale-200.png",revision:"0f8b1172ef9786c6930d0e8f6f521407"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square150x150Logo.scale-400.png",revision:"5ae864fb0b30410686e4441040b66154"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"cd81241f6c8919d9df353e6a3e321716"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"abb036e0d244d4b37dcd317c834dca62"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"931b59b368af9314b1af0800bc094c56"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"04093be8c7e14941b43e2650c67f6b11"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"1a75307e6f33d9e4ecdea58f7a67dcab"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"c5fd9c0ddd8fec20405a0bb8f9962671"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"35f24e7b9ff33e074568ee175c32a8af"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"ffa90d1f9e9b392422be06854258b572"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"37ba86f13b7c9ec5cc6d44ae9a60a7f3"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"5a55a3113caa6101bf76ad6981be86a2"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"5a0a6a6e5338bc1ecc1345cd1f7c92d6"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"e5609a3946aaf3acf2d44e312fb789ed"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"1491267b138477a4ba29b3112e595d24"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"69bd418a4f69adc4f8d6ae58bc1c3044"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"0ebdab44ec7984a23e4b23198b494d60"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"cd81241f6c8919d9df353e6a3e321716"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"abb036e0d244d4b37dcd317c834dca62"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"931b59b368af9314b1af0800bc094c56"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"04093be8c7e14941b43e2650c67f6b11"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"1a75307e6f33d9e4ecdea58f7a67dcab"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"c5fd9c0ddd8fec20405a0bb8f9962671"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"35f24e7b9ff33e074568ee175c32a8af"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"ffa90d1f9e9b392422be06854258b572"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"37ba86f13b7c9ec5cc6d44ae9a60a7f3"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"5a55a3113caa6101bf76ad6981be86a2"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"5a0a6a6e5338bc1ecc1345cd1f7c92d6"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"e5609a3946aaf3acf2d44e312fb789ed"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"1491267b138477a4ba29b3112e595d24"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"69bd418a4f69adc4f8d6ae58bc1c3044"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"0ebdab44ec7984a23e4b23198b494d60"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.scale-100.png",revision:"37ba86f13b7c9ec5cc6d44ae9a60a7f3"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.scale-125.png",revision:"32d50da502eb9a7c1a6b2aa20a9f6841"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.scale-150.png",revision:"2e36bd74ff98e691cbb0427c5941ba10"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.scale-200.png",revision:"0d5e1c943ea7ce8afb27ef144a52e133"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.scale-400.png",revision:"57cc4ba914ff3dc12f7cfda62ce8e01f"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-16.png",revision:"cd81241f6c8919d9df353e6a3e321716"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-20.png",revision:"abb036e0d244d4b37dcd317c834dca62"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-24.png",revision:"931b59b368af9314b1af0800bc094c56"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-256.png",revision:"04093be8c7e14941b43e2650c67f6b11"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-30.png",revision:"1a75307e6f33d9e4ecdea58f7a67dcab"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-32.png",revision:"c5fd9c0ddd8fec20405a0bb8f9962671"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-36.png",revision:"35f24e7b9ff33e074568ee175c32a8af"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-40.png",revision:"ffa90d1f9e9b392422be06854258b572"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-44.png",revision:"37ba86f13b7c9ec5cc6d44ae9a60a7f3"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-48.png",revision:"5a55a3113caa6101bf76ad6981be86a2"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-60.png",revision:"5a0a6a6e5338bc1ecc1345cd1f7c92d6"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-64.png",revision:"e5609a3946aaf3acf2d44e312fb789ed"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-72.png",revision:"1491267b138477a4ba29b3112e595d24"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-80.png",revision:"69bd418a4f69adc4f8d6ae58bc1c3044"},{url:"/nenki-offline/assets/pwa/icons/windows11/Square44x44Logo.targetsize-96.png",revision:"0ebdab44ec7984a23e4b23198b494d60"},{url:"/nenki-offline/assets/pwa/icons/windows11/StoreLogo.scale-100.png",revision:"316745b77a0009df699d69c144af2a4c"},{url:"/nenki-offline/assets/pwa/icons/windows11/StoreLogo.scale-125.png",revision:"edcc621f76de672a352a5e1a5c395e10"},{url:"/nenki-offline/assets/pwa/icons/windows11/StoreLogo.scale-150.png",revision:"e8d7fdeeee4e2af7e100e2206fae26d7"},{url:"/nenki-offline/assets/pwa/icons/windows11/StoreLogo.scale-200.png",revision:"ff6c496f095d1e9f0d39a854feae7ce2"},{url:"/nenki-offline/assets/pwa/icons/windows11/StoreLogo.scale-400.png",revision:"d4e626567b8663d3a5203cc7ee6c9142"},{url:"/nenki-offline/assets/pwa/icons/windows11/Wide310x150Logo.scale-100.png",revision:"67c21ff2f01054e6768b7589c091706a"},{url:"/nenki-offline/assets/pwa/icons/windows11/Wide310x150Logo.scale-125.png",revision:"120df183e6a47e6214f954e553199c1e"},{url:"/nenki-offline/assets/pwa/icons/windows11/Wide310x150Logo.scale-150.png",revision:"6af5ba2f87047c05537505b36f0b00a6"},{url:"/nenki-offline/assets/pwa/icons/windows11/Wide310x150Logo.scale-200.png",revision:"5804656e8d04a2de50b15e87d90de160"},{url:"/nenki-offline/assets/pwa/icons/windows11/Wide310x150Logo.scale-400.png",revision:"df2d79128fc0f53988f309a8bb03ced3"},{url:"/nenki-offline/manifest.webmanifest",revision:"1c1460b686aac716342b68a6ddb7c5ad"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/nenki-offline",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
