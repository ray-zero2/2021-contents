!function(t){function e(e){for(var r,a,c=e[0],u=e[1],l=e[2],f=0,v=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(s&&s(e);v.length;)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={0:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;i.push([113,1]),n()}({113:function(t,e,n){"use strict";n.r(e);n(16),n(56),n(69);var r=n(0);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolution=e,this.position=new r.B,this.start=new r.B,this.lastStart=new r.B,this.lastPosition=new r.B,this.isTouched=!1,this.isDumping=!1,this.canHover=!1}return i(t,null,[{key:"transformToNormalizedDeviceCoord",value:function(t,e){var n=e.x,o=e.y;if(0===n||0===o)return new r.B(0,0);var i=t.x/(n/2)-1,a=t.y/(o/2)-1,c=new r.B(i,-a);return c.clampScalar(-1,1),c}}]),i(t,[{key:"touchStart",value:function(t){"touches"in t||t.preventDefault(),this.isTouched=!0}},{key:"touchMove",value:function(e){if(this.canHover||this.isTouched){"touches"in e||e.preventDefault();var n="touches"in e?e.touches[0].clientX:e.clientX,r="touches"in e?e.touches[0].clientY:e.clientY;this.position.set(n,r),console.log({x:n,y:r});var o=t.transformToNormalizedDeviceCoord(this.position,this.resolution),i=o.x,a=o.y;console.log({_x:i,_y:a})}}},{key:"touchEnd",value:function(t){console.log(t),this.isTouched=!1}},{key:"resize",value:function(t){this.resolution=t}},{key:"update",value:function(){this.isDumping}}]),t}(),c=(n(20),n(28),n(29),n(79)),u=(n(45),n(46),n(47),n(48),n(49),n(50),n(51),n(78));function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?y(t):e}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(a,t);var e,n,o,i=p(a);function a(){var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s(this,a),(e=i.call(this,null==n?void 0:n.fov,null==n?void 0:n.aspect,null==n?void 0:n.near,null==n?void 0:n.far)).time=0,e.canControl=!0,(null==n?void 0:n.canvas)&&e.canControl?(e.controls=new u.a(y(e),null==n?void 0:n.canvas),e.controls.enableDamping=(null==n?void 0:n.enableDamping)||!1,e.controls.dampingFactor=null!==(t=null==n?void 0:n.dampingFactor)&&void 0!==t?t:.2,e):h(e)}return e=a,(n=[{key:"init",value:function(){this.position.set(-5,5,20),this.lookAt(new r.C(0,0,0))}},{key:"resize",value:function(t){this.aspect=t.x/t.y,this.updateProjectionMatrix()}},{key:"update",value:function(t){this.time+=t,this.controls.update()}}])&&f(e.prototype,n),o&&f(e,o),a}(r.q),b=function(t,e,n){return Math.max(e,Math.min(n,t))};n(112);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=k(t);if(e){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(a,t);var e,n,o,i=O(a);function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this)).name="cow",n.time=0,n.isActive=!1,n.noiseTexture=e.noise,n.material=n.createMaterial(),n.cow=new r.n(t,n.material),n.createAttribute(),n.cow.geometry.computeVertexNormals(),n.cow.geometry.elementsNeedUpdate=!0,n.cow.rotateY(Math.PI/2),n.add(n.cow),console.log(n.cow),n}return e=a,(n=[{key:"createAttribute",value:function(){for(var t=this.cow.geometry,e=t.getAttribute("position").array,n=[],o=[],i=0;i<e.length;i+=9){var a=e[i],c=e[i+1],u=e[i+2],l=e[i+3],s=e[i+4],f=e[i+5],v=(a+l+e[i+6])/3,p=(c+s+e[i+7])/3,h=(u+f+e[i+8])/3;n.push(v,p,h,v,p,h,v,p,h);var y=.5*Math.random();o.push(y,y,y)}t.setAttribute("center",new r.g(n,3)),t.setAttribute("delay",new r.g(o,1))}},{key:"setNoiseTexture",value:function(t){this.noiseTexture=t}},{key:"createMaterial",value:function(){return new r.u({vertexShader:"#define GLSLIFY 1\nattribute float delay;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec3 faceNormal;\nattribute vec3 center;\n\nuniform float time;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\nvarying float vOneToZero;\n\nfloat PI = 3.141592653589793238;\n\nfloat duration = 3.0;\n\nfloat exponentialIn(float t) {\n  return t == 0.0 ? t : pow(2.0, 10.0 * (t - 1.0));\n}\n\nmat4 calcTranslateMat4(vec3 v) {\n  return mat4(\n    1.0, 0.0, 0.0, 0.0,\n    0.0, 1.0, 0.0, 0.0,\n    0.0, 0.0, 1.0, 0.0,\n    v.x, v.y, v.z, 1.0\n  );\n}\n\nmat4 calcRotateMat4X(float radian) {\n  return mat4(\n    1.0, 0.0, 0.0, 0.0,\n    0.0, cos(radian), -sin(radian), 0.0,\n    0.0, sin(radian), cos(radian), 0.0,\n    0.0, 0.0, 0.0, 1.0\n  );\n}\n\nmat4 calcRotateMat4Y(float radian) {\n  return mat4(\n    cos(radian), 0.0, sin(radian), 0.0,\n    0.0, 1.0, 0.0, 0.0,\n    -sin(radian), 0.0, cos(radian), 0.0,\n    0.0, 0.0, 0.0, 1.0\n  );\n}\n\nmat4 calcRotateMat4Z(float radian) {\n  return mat4(\n    cos(radian), -sin(radian), 0.0, 0.0,\n    sin(radian), cos(radian), 0.0, 0.0,\n    0.0, 0.0, 1.0, 0.0,\n    0.0, 0.0, 0.0, 1.0\n  );\n}\n\nmat4 calcRotateMat4(vec3 radian) {\n  return calcRotateMat4X(radian.x) * calcRotateMat4Y(radian.y) * calcRotateMat4Z(radian.z);\n}\n\nvoid main() {\n  float oneToZero = clamp(exponentialIn((duration - time  - delay * 2.0 ) / duration) , 0.0, 1.0);\n  mat4 translateMat = calcTranslateMat4(vec3(oneToZero * 100.0) * normal);\n\n  float rotateRadian = radians((normal.x + normal.y) * 320.0 * 12.0);\n  mat4 rotateMat = calcRotateMat4(vec3(0.0, rotateRadian * oneToZero, 0.0));\n\n  mat4 rotateSelfMat = calcRotateMat4(vec3(0.0, time, 0.0));\n\n  vec4 updatePosition = rotateMat * translateMat * vec4(position, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * rotateSelfMat * updatePosition;\n\n  vUv = uv;\n  vNormal = normal;\n  vOneToZero = oneToZero;\n}\n",fragmentShader:"precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nuniform sampler2D noiseTexture;\n// uniform vec4 resolution;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying float vOneToZero;\n\nvec3 convertHsvToRgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nfloat PI = 3.141592653589793238;\n\nvoid main() {\n  vec3 directionLight1 = vec3(1.0, 1.0, -2.0);\n  float directionColor1 = dot(normalize(directionLight1), normalize(vNormal));\n\n  vec3 directionLight2 = vec3(-1.0, 1.0, 2.0);\n  float directionColor2 = dot(normalize(directionLight2), normalize(vNormal));\n\n  vec3 gamingColor = vec3(time * 0.75, .5, 1.0);\n  vec3 color = convertHsvToRgb(gamingColor);\n\n  vec3 finalColor = color * directionColor1 * directionColor2 + vec3(0.5);\n\n  float opacity =  vOneToZero;\n\n  gl_FragColor = vec4(finalColor, opacity);\n}\n",uniforms:{time:{value:0},noiseTexture:{value:this.noiseTexture}}})}},{key:"update",value:function(t){this.time+=t,this.cow.material.uniforms.time.value=this.time}}])&&g(e.prototype,n),o&&g(e,o),a}(r.h);function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=C(t);if(e){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(a,t);var e,n,o,i=M(a);function a(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);var e=new r.x(100,12,12),n=new r.u({uniforms:{time:{value:0},isTurnedOn:{value:0}},vertexShader:"#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform float time;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vColor;\n\nvec3 convertHsvToRgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\n\nfloat PI = 3.141592653589793238;\n\nvoid main() {\n  vec2 p = uv * 2.0 - 1.0;\n   vec3 hsv = vec3(\n    p.y * 0.1 + 0.07,\n    1.0,\n    0.9\n  );\n  vec3 rgb = convertHsvToRgb(hsv);\n  vUv = uv;\n  vColor = rgb;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",fragmentShader:"precision highp float;\n#define GLSLIFY 1\n\nuniform float time;\n\nvarying vec2 vUv;\nvarying vec3 vColor;\n\nfloat PI = 3.141592653589793238;\n\nvoid main() {\n\n  gl_FragColor = vec4(vec3(vColor), 1.0);\n}\n",side:r.a});return(t=i.call(this,e,n)).time=0,t.isTurnedOn=0,t}return e=a,(n=[{key:"update",value:function(t){this.time+=t,this.material.uniforms.time.value=this.time,this.material.uniforms.isTurnedOn.value=this.isTurnedOn}}])&&T(e.prototype,n),o&&T(e,o),a}(r.n);function D(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function E(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){D(i,r,o,a,c,"next",t)}function c(t){D(i,r,o,a,c,"throw",t)}a(void 0)}))}}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var A=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.renderer=new r.D({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(b(window.devicePixelRatio,1,2)),this.renderer.setClearColor(0,1),this.renderer.setSize(n.x,n.y),this.scene=new r.w,this.camera=new d({fov:50,aspect:n.x/n.y,far:1e3,canvas:e,enableDamping:!0}),this.cow=null,this.background=null}var e,n,o,i,a;return e=t,(n=[{key:"load",value:(a=E(regeneratorRuntime.mark((function t(){var e,n,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchObjects();case 2:e=t.sent,n=e.geometries,o=e.textures,(i=o.noise).wrapS=r.v,i.wrapT=r.v,this.camera.init(),this.cow=new S(n.cow,o),this.background=new z,this.scene.add(this.cow),this.scene.add(this.background);case 13:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"fetchObjects",value:(i=E(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new r.A,n=new c.a,t.next=4,Promise.all([n.loadAsync("/public/model/cow.obj"),e.loadAsync("/public/images/textures/noise.png")]).then((function(t){return console.log(t[0]),{geometries:{cow:t[0].children[0].geometry},textures:{noise:t[1]}}}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),function(){return i.apply(this,arguments)})},{key:"render",value:function(t){this.camera.update(t),this.cow.update(t),this.renderer.render(this.scene,this.camera)}},{key:"touchStart",value:function(t){}},{key:"touchMove",value:function(t){}},{key:"touchEnd",value:function(t){}},{key:"wheel",value:function(t){}},{key:"resize",value:function(t){this.resolution=t,this.camera.resize(t),this.renderer.setSize(t.x,t.y)}}])&&L(e.prototype,n),o&&L(e,o),t}();function I(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.querySelector("#canvas"),!this.canvas)throw new Error("canvas element not found");this.resolution=new r.B(document.body.clientWidth,window.innerHeight),this.clock=new r.d(!0),this.mouse=new a(this.resolution),this.webGlContent=new A(this.canvas,this.resolution),this.init(),this.bind()}var e,n,o,i,c;return e=t,(n=[{key:"render",value:function(t){this.webGlContent.render(t)}},{key:"animate",value:function(){var t=this.clock.getDelta();this.time+=t,this.render(t),requestAnimationFrame(this.animate.bind(this))}},{key:"resize",value:function(){this.resolution.set(document.body.clientWidth,window.innerHeight);var t=this.resolution;this.mouse.resize(t),this.webGlContent.resize(t)}},{key:"bind",value:function(){window.addEventListener("resize",this.resize.bind(this))}},{key:"start",value:function(){this.bind(),this.animate()}},{key:"init",value:(i=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.webGlContent.load();case 2:document.querySelector(".js-loading").classList.remove("is-active"),this.start();case 4:case"end":return t.stop()}}),t,this)})),c=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=i.apply(t,e);function a(t){I(o,n,r,a,c,"next",t)}function c(t){I(o,n,r,a,c,"throw",t)}a(void 0)}))},function(){return c.apply(this,arguments)})}])&&N(e.prototype,n),o&&N(e,o),t}())}});
//# sourceMappingURL=main.bundle.js.map