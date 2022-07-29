import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function readingInput(event) {
  event.preventDefault();
  let formElements = event.currentTarget.elements;
  let delayInput = Number(formElements.delay.value);
  let stepInput = Number(formElements.step.value);
  let amountInput = Number(formElements.amount.value);

  if (amountInput == 0 || amountInput < 0) {
    Notiflix.Notify.failure('❌ Amount must be more then 0');
    return;
  }

  if (stepInput < 0 || delayInput < 0) {
    Notiflix.Notify.failure('❌ The value must be positive.');
    return;
  }

  CallCreatePromise(delayInput, stepInput, amountInput);
}

form.addEventListener('submit', readingInput);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}

function CallCreatePromise(delayInput, stepInput, amountInput) {
  let total = 0;
  if (total === 0 && amountInput > 0) {
    setTimeout(() => {
      let caunter = (total += 1);
      createPromise(total, delayInput)
        .then(resolve => {
          console.log(resolve);
          Notiflix.Notify.success(resolve);
        })
        .catch(reject => {
          console.log(reject);
          Notiflix.Notify.failure(reject);
        });
      SecondCreatePromise(caunter);
    }, delayInput);
  }
  function SecondCreatePromise(caunter) {
    if (caunter >= 1 && amountInput >= 2) {
      const timerid = setInterval(() => {
        delayInput += stepInput;
        total += 1;
        createPromise(total, delayInput)
          .then(resolve => {
            console.log(resolve);
            Notiflix.Notify.success(resolve);
          })
          .catch(reject => {
            console.log(reject);
            Notiflix.Notify.failure(reject);
          });
        if (total >= amountInput) {
          clearInterval(timerid);
        }
      }, stepInput);
    }
  }
}
