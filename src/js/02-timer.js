import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const dateField = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysNumber = document.querySelector('[data-days]');
const hoursNumber = document.querySelector('[data-hours]');
const minutesNumber = document.querySelector('[data-minutes]');
const secondsNumber = document.querySelector('[data-seconds]');
let myDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateChoice = selectedDates[0];
    if (dateChoice > new Date()) {
      myDate = dateChoice;
      startBtn.disabled = false;
    }
    else {
        window.alert ("Please choose a date in the future")
    }
  },
};
flatpickr(dateField, options);
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
const addLeadingZero = value => value.toString().padStart(2, '0');
let countInterval = 0;
const countdown = () => {
  if (countInterval) {
    clearInterval(countInterval);
  }
  countInterval = setInterval(() => {
    const actualTime = new Date();
    const difference = myDate - actualTime;
    if (difference < 0) {
      clearInterval(countInterval);
      return;
    }
    const objectTime = convertMs(difference);
    daysNumber.textContent = addLeadingZero(objectTime.days);
    hoursNumber.textContent = addLeadingZero(objectTime.hours);
    minutesNumber.textContent = addLeadingZero(objectTime.minutes);
    secondsNumber.textContent = addLeadingZero(objectTime.seconds);
  }, 1000);
};

startBtn.addEventListener('click', countdown);