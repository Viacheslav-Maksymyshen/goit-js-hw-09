const refs = {
  mainBackgroundColor: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};
refs.btnStart.disabled = false;
refs.btnStop.disabled = true;

let intervalId = null;

function makesStart() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
  intervalId = setInterval(() => {
    let randomColor = getRandomHexColor();
    refs.mainBackgroundColor.setAttribute(
      'style',
      `background-color : ${randomColor}`
    );
    console.log(getRandomHexColor());
  }, 1000);
}
refs.btnStart.addEventListener('click', makesStart);

function makesStop() {
  if (intervalId) {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
    clearInterval(intervalId);
    console.log('stop');
  }
}
refs.btnStop.addEventListener('click', makesStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
