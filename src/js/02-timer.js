// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('[data-start]');

let dataStartObj = 0;

let currentTime = Date.now();

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
    }
    console.log(dataStartObj);
  },
};

flatpickr('#datetime-picker', options);
function timerStart() {
  console.log('go');
}
btnStart.addEventListener('click', timerStart);

console.log('🚀 ~ file: 02-timer.js ~ line 9 ~ dataStartObj', dataStartObj);
console.log('🚀 ~ file: 02-timer.js ~ line 10 ~ currentTime', currentTime);
