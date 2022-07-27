import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

let dataStartObj = 0;
let currentTime = Date.now();
let deltaTime = 0;
let endTaimerId = 0;

btnStart.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dataStartObj = selectedDates[0];
    if (dataStartObj > currentTime) {
      btnStart.disabled = false;
      return;
    }
    Notiflix.Notify.failure('Please choose a date in the future');
  },
};

flatpickr('#datetime-picker', options);

function timerBegin() {
  btnStart.disabled = true;
  endTaimerId = setInterval(() => {
    deltaTime = dataStartObj - Date.now();
    convertMs(deltaTime);
  }, 1000);
}

btnStart.addEventListener('click', timerBegin);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  timerDays.textContent = days;
  timerHours.textContent = hours;
  timerMinutes.textContent = minutes;
  timerSeconds.textContent = seconds;
  if (deltaTime < 1000) {
    clearInterval(endTaimerId);
    btnStart.disabled = false;
  }
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
