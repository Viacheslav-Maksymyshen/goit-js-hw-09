function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var l=r("eWCmQ");function u(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{o?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let o=t.currentTarget.elements,n=Number(o.delay.value),r=Number(o.step.value),i=Number(o.amount.value);0==i||i<0||r<0||n<0?e(l).Notify.failure("❌ Amount must be more then 0"):r<0||n<0?e(l).Notify.failure("❌ Value must be more then 0"):function(t,o,n){let r=0;0===r&&n>0&&setTimeout((()=>{let o=r+=1;u(r,t).then((t=>{console.log(t),e(l).Notify.success(t)})).catch((t=>{console.log(t),e(l).Notify.failure(t)})),i(o)}),t);function i(i){if(i>=1&&n>=2){const i=setInterval((()=>{r+=1,u(r,t+=o).then((t=>{console.log(t),e(l).Notify.success(t)})).catch((t=>{console.log(t),e(l).Notify.failure(t)})),r>=n&&clearInterval(i)}),o)}}}(n,r,i)}));
//# sourceMappingURL=03-promises.cacd13f7.js.map
