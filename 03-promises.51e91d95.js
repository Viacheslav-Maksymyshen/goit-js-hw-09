!function(){var e=document.querySelector(".form"),n=document.querySelector("[type=submit]");e.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements;n.delay.value,n.step.value,n.amount.value})),n.addEventListener("click",(function(e,n,t){(c=n,o=e,r=Math.random()>.3,new Promise((function(e,n){r?e("✅ Fulfilled promise ".concat(c," in ").concat(o,"ms-")):n("❌ Rejected promise ".concat(c," in ").concat(o,"ms-"))}))).then((function(e){var n=e.resolve,t=e.reject;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.resolve,t=e.reject;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}));var c,o,r}))}();
//# sourceMappingURL=03-promises.51e91d95.js.map
