(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224c4a"],{e218:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",(function(){return w}));var o=n("498c"),r=new WeakMap,i=function(t,e,n,o){void 0===o&&(o=0),r.has(t)!==n&&(n?u(t,e,o):c(t,e))},a=function(t){return t===t.getRootNode().activeElement},u=function(t,e,n){var o=e.parentNode,i=e.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(t,i);var a=t.ownerDocument,u="rtl"===a.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d("+u+"px,"+n+"px,0) scale(0)"},c=function(t,e){var n=r.get(t);n&&(r.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""},s=function(t,e,n){if(!n||!e)return function(){};var o=function(n){a(e)&&i(t,e,n)},r=function(){return i(t,e,!1)},u=function(){return o(!0)},c=function(){return o(!1)};return n.addEventListener("ionScrollStart",u),n.addEventListener("ionScrollEnd",c),e.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",u),n.removeEventListener("ionScrollEnd",c),e.addEventListener("ionBlur",r)}},l="input, textarea, [no-blur]",d=function(){var t=!0,e=!1,n=document,o=function(){e=!0},r=function(){t=!0},i=function(o){if(e)e=!1;else{var r=n.activeElement;if(r&&!r.matches(l)){var i=o.target;i!==r&&(i.matches(l)||i.closest(l)||(t=!1,setTimeout((function(){t||r.blur()}),50)))}}};return n.addEventListener("ionScrollStart",o),n.addEventListener("focusin",r,!0),n.addEventListener("touchend",i,!1),function(){n.removeEventListener("ionScrollStart",o,!0),n.removeEventListener("focusin",r,!0),n.removeEventListener("touchend",i,!1)}},f=.3,v=function(t,e,n){var o=t.closest("ion-item,[ion-item]")||t;return m(o.getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)},m=function(t,e,n,o){var r=t.top,i=t.bottom,a=e.top,u=Math.min(e.bottom,o-n),c=a+15,s=.5*u,l=s-i,d=c-r,v=Math.round(l<0?-l:d>0?-d:0),m=Math.min(v,r-a),p=Math.abs(m),E=p/f,h=Math.min(400,Math.max(150,E));return{scrollAmount:m,scrollDuration:h,scrollPadding:n,inputSafeY:4-(r-c)}},p=function(t,e,n,r){var i,u=function(t){i=Object(o["j"])(t)},c=function(u){if(i){var c=Object(o["j"])(u);h(6,i,c)||a(e)||(u.preventDefault(),u.stopPropagation(),E(t,e,n,r))}};return t.addEventListener("touchstart",u,!0),t.addEventListener("touchend",c,!0),function(){t.removeEventListener("touchstart",u,!0),t.removeEventListener("touchend",c,!0)}},E=function(t,e,n,o){var r=v(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(i(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then((function(){i(t,e,!1,r.inputSafeY),e.focus()})))},h=function(t,e,n){if(e&&n){var o=e.x-n.x,r=e.y-n.y,i=o*o+r*r;return i>t*t}return!1},g="$ionPaddingTimer",L=function(t){var e=document,n=function(e){S(e.target,t)},o=function(t){S(t.target,0)};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),function(){e.removeEventListener("focusin",n),e.removeEventListener("focusout",o)}},S=function(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)&&(!t.parentElement||!t.parentElement.parentElement||"ION-SEARCHBAR"!==t.parentElement.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n[g];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[g]=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},y=!0,b=!0,w=function(t){var e=document,n=t.getNumber("keyboardHeight",290),o=t.getBoolean("scrollAssist",!0),r=t.getBoolean("hideCaretOnScroll",!0),i=t.getBoolean("inputBlurring",!0),a=t.getBoolean("scrollPadding",!0),u=Array.from(e.querySelectorAll("ion-input, ion-textarea")),c=new WeakMap,l=new WeakMap,f=function(t){var e=(t.shadowRoot||t).querySelector("input")||(t.shadowRoot||t).querySelector("textarea"),i=t.closest("ion-content");if(e){if(i&&r&&!c.has(t)){var a=s(t,e,i);c.set(t,a)}if(i&&o&&!l.has(t)){a=p(t,e,i,n);l.set(t,a)}}},v=function(t){if(r){var e=c.get(t);e&&e(),c.delete(t)}if(o){e=l.get(t);e&&e(),l.delete(t)}};i&&y&&d(),a&&b&&L(n);for(var m=0,E=u;m<E.length;m++){var h=E[m];f(h)}e.addEventListener("ionInputDidLoad",(function(t){f(t.detail)})),e.addEventListener("ionInputDidUnload",(function(t){v(t.detail)}))}}}]);
//# sourceMappingURL=chunk-2d224c4a.9835072f.js.map