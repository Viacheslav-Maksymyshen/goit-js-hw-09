const mainBackgroundColor = document.querySelector('body');

mainBackgroundColor.innerHTML = `<p><a href="index.html">Go back</a></p>
    <div class="button" style = "margin: 0; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">
      <button type="button" data-start>Start</button>
      <button type="button" data-stop disabled>Stop</button>
    </div>
    <script src="js/01-color-switcher.js" type="module"></script>`;

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

btnStart.setAttribute('style', 'width: 100px; height: 50px; font-size: 24px');
btnStop.setAttribute('style', 'width: 100px; height: 50px;font-size: 24px');

let intervalId = null;

function makesStart() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  intervalId = setInterval(() => {
    let randomColor = getRandomHexColor();
    mainBackgroundColor.style.backgroundColor = randomColor;

    console.log(getRandomHexColor());
  }, 1000);
}
btnStart.addEventListener('click', makesStart);

function makesStop() {
  if (intervalId) {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(intervalId);
    console.log('stop');
  }
}
btnStop.addEventListener('click', makesStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const refs = {
//   mainBackgroundColor: document.querySelector('body'),
//   btnStart: document.querySelector('[data-start]'),
//   btnStop: document.querySelector('[data-stop]'),
// };
// refs.btnStart.disabled = false;
// refs.btnStop.disabled = true;

// let intervalId = null;

// function makesStart() {
//   refs.btnStart.disabled = true;
//   refs.btnStop.disabled = false;
//   intervalId = setInterval(() => {
//     let randomColor = getRandomHexColor();
//     refs.mainBackgroundColor.setAttribute(
//       'style',
//       `background-color : ${randomColor}`
//     );
//     console.log(getRandomHexColor());
//   }, 1000);
// }
// refs.btnStart.addEventListener('click', makesStart);

// function makesStop() {
//   if (intervalId) {
//     refs.btnStart.disabled = false;
//     refs.btnStop.disabled = true;
//     clearInterval(intervalId);
//     console.log('stop');
//   }
// }
// refs.btnStop.addEventListener('click', makesStop);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
