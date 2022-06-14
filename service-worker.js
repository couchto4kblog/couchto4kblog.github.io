!function(){"use strict";const e=["client/client.5cc742d3.js","client/[slug].860274d9.js","client/about.6a4cd6ea.js","client/index.7c4a1cf2.js","client/index.ad6f2a86.js","client/client.25ee2bb1.js"].concat(["service-worker-index.html","bear-brook/bridge-ruins.jpg","bear-brook/dog-wife-rock.jpg","bear-brook/empty-trail.jpg","bear-brook/perky-dog-river.jpg","bear-brook/pup-near-pines.jpg","bear-brook/toad.jpg","bear-brook/trail-map.jpg","beauty-ledges/beauty-knob-trail-sign.jpg","beauty-ledges/beauty-knob.jpg","beauty-ledges/expectant-lana.jpg","beauty-ledges/hall-spring.jpg","beauty-ledges/lana-on-ledges.jpg","beauty-ledges/ledge-view-sign.jpg","beauty-ledges/main-trail-split.jpg","beauty-ledges/misty-descent.jpg","beauty-ledges/overgrown-path.jpg","beauty-ledges/overgrown-snowmo-trail.jpg","beauty-ledges/rocky-trail-beneath-knob.jpg","beauty-ledges/spooky-autumn-vibes.jpg","beauty-ledges/summit-bog.jpg","beauty-ledges/to-ledge-sign.jpg","beauty-ledges/trail-begins.jpg","beauty-ledges/trail-map.jpeg","beauty-ledges/trailhead.jpg","blue-job/blue-job-summit.jpg","blue-job/little-blue-job-summit.jpg","blue-job/muddy-trail.jpg","blue-job/pond-view.jpg","blue-job/summit-wife-and-dog.jpg","chocorua/bonus-lana.jpg","chocorua/cabin-front.jpg","chocorua/cabin-outside.jpg","chocorua/camping-warning.jpg","chocorua/craggy-climb.jpg","chocorua/exposed-trail.jpg","chocorua/final-100-feet.jpg","chocorua/first-view-of-summit.jpg","chocorua/gross-fungus.jpg","chocorua/hammond-trail-intersection.jpg","chocorua/homestretch.jpg","chocorua/inside-cabin.jpg","chocorua/overlook-pano.jpg","chocorua/peak-from-road.jpg","chocorua/rocky-trail.jpg","chocorua/summit-approach.jpg","chocorua/summit-looking-down.jpg","chocorua/summit-marker.jpg","chocorua/summit-pano-1.jpg","chocorua/suspended-rock.jpg","chocorua/the-slab.jpg","chocorua/trail-convergence-below-summit.jpg","chocorua/trail-near-beginning.jpg","chocorua/woodpecker-tree.jpg","favicon.png","global.css","homepage/couch-dog.jpg","homepage/summit-laying-down.jpg","logo-192.png","logo-512.png","manifest.json","moose-mtn-res/dog-on-trail.jpg","moose-mtn-res/nearing-the-summit.jpg","moose-mtn-res/parking-area.jpg","moose-mtn-res/trail-map.jpg","moose-mtn-res/trailhead.jpg","moose-mtn-res/wrong-road.jpg","morgan-percival/bill-in-percival-cave.jpg","morgan-percival/bill-into-cave.gif","morgan-percival/ladders.jpg","morgan-percival/me-and-hyrule.jpeg","morgan-percival/morgan-cave-entrance.jpg","morgan-percival/morgan-summit-marker.jpg","morgan-percival/morgan-summit-pano.jpg","morgan-percival/percival-cliff.jpg","morgan-percival/percival-summit-marker.jpg","morgan-percival/percival-trailhead.jpg","morgan-percival/rugged-percival-trail.jpg","morgan-percival/trail-map.png","mt-hale/after-hike-rest.jpg","mt-hale/best-view-i-could-find.jpg","mt-hale/lana-on-the-rocks.JPG","mt-hale/lana-snack.jpg","mt-hale/squatch.jpg","mt-hale/summit-break.jpg","mt-hale/trailhead-sign.jpg","mt-osceola/dodgy-trail.jpg","mt-osceola/dog-almost-done.jpg","mt-osceola/dog-at-end.jpg","mt-osceola/dog-at-start.jpg","mt-osceola/first-view.jpg","mt-osceola/happy-pup.jpg","mt-osceola/keep-going.jpg","mt-osceola/me-and-dog-summit.jpg","mt-osceola/selfie.jpg","mt-osceola/summit-pano.jpg","mt-osceola/trail-map.png","mt-rowe/dog-and-wife-summit.jpg","mt-rowe/dog-on-trail.jpg","mt-rowe/drink.jpg","mt-rowe/happy-dog-trail.jpg","mt-rowe/sleepy-pup.jpg","mt-rowe/summit-full-dog.jpg","mt-rowe/summit-happy-dog.jpg","mt-rowe/summit-pano-left.jpg","mt-rowe/summit-pano-mid.jpg","mt-rowe/summit-pano-right.jpg","mt-rowe/trail-map-small.jpg","mt-rowe/trail-map.jpg","mt-rowe/usgs-earthquake-sensor.jpg","mt-rowe/wife-covered-head.jpg","rattlesnakes/aftermath.jpg","rattlesnakes/big-fungus.jpg","rattlesnakes/east-rattlesnake-outcrop.jpg","rattlesnakes/east-rattlesnake-true-summit.jpg","rattlesnakes/lana-resting.jpg","rattlesnakes/ramsey-trail-ledge.jpg","rattlesnakes/ramsey-trail-scramble.jpg","rattlesnakes/ramsey-trail-start.jpg","rattlesnakes/ridge-trail-sign.jpg","rattlesnakes/stream-crossing.jpg","rattlesnakes/trail-map.jpg","rattlesnakes/undercut-trailhead.jpg","rattlesnakes/west-rattlesnake-summit.jpg","rattlesnakes/west-summit-lake-view.jpg","tecumseh/chairlift-slope.jpg","tecumseh/dog-slope-landscape.jpg","tecumseh/dog-tongue-out.jpg","tecumseh/laying-down-after.jpg","tecumseh/northside-lift.jpg","tecumseh/rock-stairs.jpg","tecumseh/ski-slope-w-dog.jpg","tecumseh/stairs-w-dog.jpg","tecumseh/summit-approach.jpg","tecumseh/summit-landscape.jpg","tecumseh/summit-sign.jpg","tecumseh/trailhead.jpg"]),a=new Set(e);self.addEventListener("install",a=>{a.waitUntil(caches.open("cache1655167392303").then(a=>a.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const a of e)"cache1655167392303"!==a&&await caches.delete(a);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&a.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1655167392303").then(async a=>{try{const t=await fetch(e.request);return a.put(e.request,t.clone()),t}catch(t){const o=await a.match(e.request);if(o)return o;throw t}}))))})}();
