function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=l);var r=l("eWCmQ");function i(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{t?n(`✅ Fulfilled promise ${e} in ${o}ms`):l(`❌ Rejected promise ${e} in ${o}ms`)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();let t=o.currentTarget.elements,n=Number(t.delay.value),l=Number(t.step.value),u=Number(t.amount.value);0==u||u<0?e(r).Notify.failure("❌ Amount must be more then 0"):function(o,t,n){let l=0;0===l&&n>0&&setTimeout((()=>{let t=l+=1;i(l,o).then((o=>{console.log(o),e(r).Notify.success(o)})).catch((o=>{console.log(o),e(r).Notify.failure(o)})),u(t)}),o);function u(u){if(console.log(u),console.log(n),u>=1&&n>=2){const u=setInterval((()=>{l+=1,i(l,o+=t).then((o=>{console.log(o),e(r).Notify.success(o)})).catch((o=>{console.log(o),e(r).Notify.failure(o)})),l>=n&&clearInterval(u)}),t)}}}(n,l,u)}));
//# sourceMappingURL=03-promises.0119fd78.js.map
