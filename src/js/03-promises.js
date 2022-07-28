const form = document.querySelector('.form');
const sumbmitBtn = document.querySelector('[type=submit]');

let delayInput = 2000;
let stepInput = 1000;
let amountInput = 3;

function readingInput(event) {
  event.preventDefault();
  formElements = event.currentTarget.elements;
  delayInput = formElements.delay.value;
  stepInput = formElements.step.value;
  amountInput = formElements.amount.value;
  CallCreatePromise(delayInput, stepInput, amountInput);
}

CallCreatePromise(delayInput, stepInput, amountInput);

form.addEventListener('submit', readingInput);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve();
    } else {
      reject();
    }
  });
}

function CallCreatePromise(delayInput, stepInput, amountInput) {
  let total = 1;
  for (let i = 0; i < 5; i += 1) {
    total += i;
    createPromise(total, delayInput)
      .then(reject => {
        console.log(`✅ Fulfilled promise ${total} in ${delayInput}ms`);
      })
      .catch(reject => {
        console.log(`❌ Rejected promise ${total} in ${delayInput}ms`);
      });
  }
}
