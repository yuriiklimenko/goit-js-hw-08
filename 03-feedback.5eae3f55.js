!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e,t,n){var r,i,u,a,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(O,t),s?p(e):a}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function O(){var e=y();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?g(n,u-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?p(e):(r=i=void 0,a)}function w(){var e=y(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return h(c);if(d)return f=setTimeout(O,t),p(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:T(y())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var h,j="feedback-form-state",O=document.querySelector(".feedback-form"),T=document.querySelector('input[type="email"]'),w=document.querySelector("textarea"),x={email:"",message:""};function N(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}N(j)&&(x=N(j)),h=x,T.value=h.email,w.value=h.message,O.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}(j,x)}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(j),e.currentTarget.reset(),console.log(x),x={email:"",message:""}}))}();
//# sourceMappingURL=03-feedback.5eae3f55.js.map
