!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");function u(e,n){var o=Math.random()>.3;return new Promise((function(t,r){o?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var o=n.currentTarget.elements,t=Number(o.delay.value),r=Number(o.step.value),c=Number(o.amount.value);0==c||c<0?e(i).Notify.failure("❌ Amount must be more then 0"):function(n,o,t){var r=0;0===r&&t>0&&setTimeout((function(){var o=r+=1;u(r,n).then((function(n){console.log(n),e(i).Notify.success(n)})).catch((function(n){console.log(n),e(i).Notify.failure(n)})),c(o)}),n);function c(c){if(console.log(c),console.log(t),c>=1&&t>=2)var l=setInterval((function(){u(r+=1,n+=o).then((function(n){console.log(n),e(i).Notify.success(n)})).catch((function(n){console.log(n),e(i).Notify.failure(n)})),r>=t&&clearInterval(l)}),o)}}(t,r,c)}))}();
//# sourceMappingURL=03-promises.3f09da0f.js.map
