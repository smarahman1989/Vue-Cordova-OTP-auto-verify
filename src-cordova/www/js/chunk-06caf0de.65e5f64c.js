(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06caf0de"],{b89e:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=n("9ab4"),r=function(e,t,n,r,o){return Object(i["a"])(void 0,void 0,void 0,(function(){var s;return Object(i["c"])(this,(function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,o,r)];if("string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"===typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,r&&r.forEach((function(e){return s.classList.add(e)})),o&&Object.assign(s,o),t.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,s]}}))}))},o=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}},c2d4:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return c}));var i=n("9ab4"),r=n("5e31"),o=n("38bb"),s=function(){return n.e("chunk-2d0aad2b").then(n.bind(null,"133f"))},a=function(){return n.e("chunk-2d21ef46").then(n.bind(null,"d884"))},c=function(e){return new Promise((function(t,n){Object(r["m"])((function(){u(e),h(e).then((function(n){n.animation&&n.animation.destroy(),l(e),t(n)}),(function(t){l(e),n(t)}))}))}))},u=function(e){var t=e.enteringEl,n=e.leavingEl;C(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),E(t,!1),n&&E(n,!1)},h=function(e){return Object(i["a"])(void 0,void 0,void 0,(function(){var t,n;return Object(i["c"])(this,(function(i){switch(i.label){case 0:return[4,d(e)];case 1:return t=i.sent(),n=t?p(t,e):v(e),[2,n]}}))}))},l=function(e){var t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},d=function(e){return Object(i["a"])(void 0,void 0,void 0,(function(){var t,n;return Object(i["c"])(this,(function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,s()]:[2,void 0];case 1:return n=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,a()];case 3:n=i.sent().mdTransitionAnimation,i.label=4;case 4:return t=n,[2,t]}}))}))},p=function(e,t){return Object(i["a"])(void 0,void 0,void 0,(function(){var r,o,s;return Object(i["c"])(this,(function(i){switch(i.label){case 0:return[4,f(t,!0)];case 1:i.sent(),i.label=2;case 2:return i.trys.push([2,5,,6]),[4,n.e("chunk-2d222525").then(n.bind(null,"cdb0"))];case 3:return o=i.sent(),[4,o.create(e,t.baseEl,t)];case 4:return r=i.sent(),[3,6];case 5:return i.sent(),r=e(t.baseEl,t),[3,6];case 6:return g(t.enteringEl,t.leavingEl),[4,m(r,t)];case 7:return s=i.sent(),t.progressCallback&&t.progressCallback(void 0),s&&w(t.enteringEl,t.leavingEl),[2,{hasCompleted:s,animation:r}]}}))}))},v=function(e){return Object(i["a"])(void 0,void 0,void 0,(function(){var t,n;return Object(i["c"])(this,(function(i){switch(i.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,f(e,!1)];case 1:return i.sent(),g(t,n),w(t,n),[2,{hasCompleted:!0}]}}))}))},f=function(e,t){return Object(i["a"])(void 0,void 0,void 0,(function(){var n,r;return Object(i["c"])(this,(function(i){switch(i.label){case 0:return n=void 0!==e.deepWait?e.deepWait:t,r=n?[j(e.enteringEl),j(e.leavingEl)]:[O(e.enteringEl),O(e.leavingEl)],[4,Promise.all(r)];case 1:return i.sent(),[4,b(e.viewIsReady,e.enteringEl)];case 2:return i.sent(),[2]}}))}))},b=function(e,t){return Object(i["a"])(void 0,void 0,void 0,(function(){return Object(i["c"])(this,(function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},m=function(e,t){var n=t.progressCallback,i=new Promise((function(t){e.onFinish((function(n){"number"===typeof n?t(1===n):void 0!==e.hasCompleted&&t(e.hasCompleted)}))}));return n?(e.progressStart(!0),n(e)):e.play(),i},g=function(e,t){y(t,o["c"]),y(e,o["a"])},w=function(e,t){y(e,o["b"]),y(t,o["d"])},y=function(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},O=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},j=function(e){return Object(i["a"])(void 0,void 0,void 0,(function(){var t,n;return Object(i["c"])(this,(function(i){switch(i.label){case 0:return t=e,t?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(n=i.sent(),null!=n)return[2];i.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(j))];case 3:i.sent(),i.label=4;case 4:return[2]}}))}))},E=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},C=function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},k=function(e){if(e.classList.contains("ion-page"))return e;var t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e}},edfb:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var i=function(){function e(e,t){this.x=e,this.y=t}return e}(),r=function(e,t,n,i,r){var a=s(e.y,t.y,n.y,i.y,r);return o(e.x,t.x,n.x,i.x,a[0])},o=function(e,t,n,i,r){var o=3*t*Math.pow(r-1,2),s=-3*n*r+3*n+i*r,a=e*Math.pow(r-1,3);return r*(o+r*s)-a},s=function(e,t,n,i,r){e-=r,t-=r,n-=r,i-=r;var o=c(i-3*n+3*t-e,3*n-6*t+3*e,3*t-3*e,e);return o.filter((function(e){return e>=0&&e<=1}))},a=function(e,t,n){var i=t*t-4*e*n;return i<0?[]:[(-t+Math.sqrt(i))/(2*e),(-t-Math.sqrt(i))/(2*e)]},c=function(e,t,n,i){if(0===e)return a(t,n,i);t/=e,n/=e,i/=e;var r=(3*n-t*t)/3,o=(2*t*t*t-9*t*n+27*i)/27;if(0===r)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-r),-Math.sqrt(-r)];var s=Math.pow(o/2,2)+Math.pow(r/3,3);if(0===s)return[Math.pow(o/2,.5)-t/3];if(s>0)return[Math.pow(-o/2+Math.sqrt(s),1/3)-Math.pow(o/2+Math.sqrt(s),1/3)-t/3];var c=Math.sqrt(Math.pow(-r/3,3)),u=Math.acos(-o/(2*Math.sqrt(Math.pow(-r/3,3)))),h=2*Math.pow(c,1/3);return[h*Math.cos(u/3)-t/3,h*Math.cos((u+2*Math.PI)/3)-t/3,h*Math.cos((u+4*Math.PI)/3)-t/3]}},f487:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",(function(){return g})),n.d(t,"ion_nav_link",(function(){return y})),n.d(t,"ion_nav_pop",(function(){return O})),n.d(t,"ion_nav_push",(function(){return j})),n.d(t,"ion_nav_set_root",(function(){return E}));var i=n("9ab4"),r=n("5e31"),o=n("b948"),s=n("498c"),a=n("38bb"),c=n("b89e"),u=n("c2d4"),h=n("edfb"),l=1,d=2,p=3,v=function(){function e(e,t){this.component=e,this.params=t,this.state=l}return e.prototype.init=function(e){return Object(i["a"])(this,void 0,void 0,(function(){var t,n;return Object(i["c"])(this,(function(i){switch(i.label){case 0:return this.state=d,this.element?[3,2]:(t=this.component,n=this,[4,Object(c["a"])(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:n.element=i.sent(),i.label=2;case 2:return[2]}}))}))},e.prototype._destroy=function(){Object(s["b"])(this.state!==p,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=p},e}(),f=function(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),o=Object.keys(n);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var c=a[s];if(i[c]!==n[c])return!1}return!0},b=function(e,t){return e?e instanceof v?e:new v(e,t):null},m=function(e){return e.map((function(e){return e instanceof v?e:"page"in e?b(e.page,e.params):b(e,void 0)})).filter((function(e){return null!==e}))},g=function(){function e(e){Object(r["l"])(this,e),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(r["d"])(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(r["d"])(this,"ionNavWillChange",3),this.ionNavDidChange=Object(r["d"])(this,"ionNavDidChange",3)}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(r["e"])(this);this.swipeGesture=o["b"].getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return Object(i["a"])(this,void 0,void 0,(function(){var e;return Object(i["c"])(this,(function(t){switch(t.label){case 0:return this.rootChanged(),e=this,[4,n.e("chunk-2d0da519").then(n.bind(null,"6aa9"))];case 1:return e.gesture=t.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}}))}))},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(u["c"])(n.element,a["e"]),n._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},r)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"===typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"===typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var r,o=this,s=this.getActiveSync();if(f(s,e,t))return Promise.resolve({changed:!1,element:s.element});var a,c=new Promise((function(e){return r=e})),u={updateURL:!1,viewIsReady:function(e){var t,n=new Promise((function(e){return t=e}));return r({changed:!0,element:e,markVisible:function(){return Object(i["a"])(o,void 0,void 0,(function(){return Object(i["c"])(this,(function(e){switch(e.label){case 0:return t(),[4,a];case 1:return e.sent(),[2]}}))}))}}),n}};if("root"===n)a=this.setRoot(e,t,u);else{var h=this.views.find((function(n){return f(n,e,t)}));h?a=this.popTo(h,Object.assign(Object.assign({},u),{direction:"back"})):"forward"===n?a=this.push(e,t,u):"back"===n&&(a=this.setRoot(e,t,Object.assign(Object.assign({},u),{direction:"back",animated:!0})))}return c},e.prototype.getRouteId=function(){return Object(i["a"])(this,void 0,void 0,(function(){var e;return Object(i["c"])(this,(function(t){return e=this.getActiveSync(),[2,e?{id:e.element.tagName,params:e.params,element:e.element}:void 0]}))}))},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise((function(t,n){e.resolve=t,e.reject=n}));return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");if(n){var i="back"===e.direction?"back":"forward";n.navChanged(i)}}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return Object(i["a"])(this,void 0,void 0,(function(){var t,n,r,o,s,a;return Object(i["c"])(this,(function(i){switch(i.label){case 0:if(i.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&n.state===l?[4,n.init(this.el)]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.postViewInit(n,t,e),r=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t,r?[4,this.transition(n,t,e)]:[3,4];case 3:return s=i.sent(),[3,5];case 4:s={hasCompleted:!0,requiresTransition:!1},i.label=5;case 5:return o=s,this.success(o,e),this.ionNavDidChange.emit(),[3,7];case 6:return a=i.sent(),this.failed(a,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}}))}))},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(s["b"])(void 0!==e.removeStart,"removeView needs removeStart"),Object(s["b"])(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){Object(s["b"])(i.length>0,"length can not be zero");var r=m(i);if(0===r.length)throw new Error("invalid views to insert");for(var o=0,a=r;o<a.length;o++){var c=a[o];c.delegate=e.opts.delegate;var u=c.nav;if(u&&u!==this)throw new Error("inserted view was already inserted");if(c.state===p)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){Object(s["b"])(t||e,"Both leavingView and enteringView are null"),Object(s["b"])(n.resolve,"resolve must be valid"),Object(s["b"])(n.reject,"reject must be valid");var i,r=n.opts,o=n.insertViews,c=n.removeStart,h=n.removeCount;if(void 0!==c&&void 0!==h){Object(s["b"])(c>=0,"removeStart can not be negative"),Object(s["b"])(h>=0,"removeCount can not be negative"),i=[];for(var l=0;l<h;l++){var d=this.views[l+c];d&&d!==e&&d!==t&&i.push(d)}r.direction=r.direction||"back"}var p=this.views.length+(void 0!==o?o.length:0)-(void 0!==h?h:0);if(Object(s["b"])(p>=0,"final balance can not be negative"),0===p)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){for(var v=n.insertStart,f=0,b=o;f<b.length;f++){d=b[f];this.insertViewAt(d,v),v++}n.enteringRequiresTransition&&(r.direction=r.direction||"forward")}if(i&&i.length>0){for(var m=0,g=i;m<g.length;m++){d=g[m];Object(u["c"])(d.element,a["c"]),Object(u["c"])(d.element,a["d"]),Object(u["c"])(d.element,a["e"])}for(var w=0,y=i;w<y.length;w++){d=y[w];this.destroyView(d)}}},e.prototype.transition=function(e,t,n){return Object(i["a"])(this,void 0,void 0,(function(){var s,a,c,h,l,d,p,v=this;return Object(i["c"])(this,(function(i){switch(i.label){case 0:return s=n.opts,a=s.progressAnimation?function(e){return v.sbAni=e}:void 0,c=Object(r["e"])(this),h=e.element,l=t&&t.element,d=Object.assign({mode:c,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||s.animationBuilder||o["b"].get("navAnimation"),progressCallback:a,animated:this.animated&&o["b"].getBoolean("animated",!0),enteringEl:h,leavingEl:l},s),[4,Object(u["e"])(d)];case 1:return p=i.sent().hasCompleted,[2,this.transitionFinish(p,e,t,s)]}}))}))},e.prototype.transitionFinish=function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(s["b"])(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(s["b"])(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){Object(s["b"])(e.state===d||e.state===p,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(s["b"])(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],o=r.element;i>n?(Object(u["c"])(o,a["e"]),this.destroyView(r)):i<n&&Object(u["d"])(o,!0)}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()},e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},e.prototype.onEnd=function(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){i.animationEnabled=!0}),{oneTimeCallback:!0});var r=e?-.001:.001;e?r+=Object(h["b"])(new h["a"](0,0),new h["a"](.32,.72),new h["a"](0,1),new h["a"](1,1),t):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(h["b"])(new h["a"](0,0),new h["a"](1,0),new h["a"](.68,.28),new h["a"](1,1),t)),this.sbAni.progressEnd(e?1:0,r,n)}},e.prototype.render=function(){return Object(r["i"])("slot",null)},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r["f"])(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),e}(),w=function(e,t,n,i){var r=e.closest("ion-nav");if(r)if("forward"===t){if(void 0!==n)return r.push(n,i,{skipIfBusy:!0})}else if("root"===t){if(void 0!==n)return r.setRoot(n,i,{skipIfBusy:!0})}else if("back"===t)return r.pop({skipIfBusy:!0});return Promise.resolve(!1)},y=function(){function e(e){var t=this;Object(r["l"])(this,e),this.routerDirection="forward",this.onClick=function(){return w(t.el,t.routerDirection,t.component,t.componentProps)}}return e.prototype.render=function(){return Object(r["i"])(r["a"],{onClick:this.onClick})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r["f"])(this)},enumerable:!0,configurable:!0}),e}(),O=function(){function e(e){var t=this;Object(r["l"])(this,e),this.pop=function(){return w(t.el,"back")}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.')},e.prototype.render=function(){return Object(r["i"])(r["a"],{onClick:this.pop})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r["f"])(this)},enumerable:!0,configurable:!0}),e}(),j=function(){function e(e){var t=this;Object(r["l"])(this,e),this.push=function(){return w(t.el,"forward",t.component,t.componentProps)}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')},e.prototype.render=function(){return Object(r["i"])(r["a"],{onClick:this.push})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r["f"])(this)},enumerable:!0,configurable:!0}),e}(),E=function(){function e(e){var t=this;Object(r["l"])(this,e),this.setRoot=function(){return w(t.el,"root",t.component,t.componentProps)}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.')},e.prototype.render=function(){return Object(r["i"])(r["a"],{onClick:this.setRoot})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r["f"])(this)},enumerable:!0,configurable:!0}),e}()}}]);
//# sourceMappingURL=chunk-06caf0de.65e5f64c.js.map