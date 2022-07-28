const form = document.querySelector('.form');
const sumbmitBtn = document.querySelector('[type=submit]');

let delayInput = 0;
let stepInput = 0;
let amountInput = 0;

function readingInput(event) {
  event.preventDefault();
  formElements = event.currentTarget.elements;
  delayInput = formElements.delay.value;
  stepInput = formElements.step.value;
  amountInput = formElements.amount.value;
  CallCreatePromise(delayInput, stepInput, amountInput);
}

form.addEventListener('submit', readingInput);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms-`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms-`);
    }
  });
}

function CallCreatePromise(delayInput, stepInput, amountInput) {
  let total = 0;
  for (let i = 0; i < amountInput; i++) {
    total += i;
    setTimeout(() => {
      createPromise(total, delayInput)
        .then(({ resolve, reject }) => {
          console.log(`✅ Fulfilled promise ${total} in ${delayInput}ms`);
        })
        .catch(({ resolve, reject }) => {
          console.log(`❌ Rejected promise ${total} in ${delayInput}ms`);
        });
    }, delayInput);
  }
}
