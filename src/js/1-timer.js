import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
input.classList.add('input');

input.addEventListener('focus', () => (input.style.borderColor = '#4e75ff'));

input.addEventListener('blur', () => (input.style.borderColor = '#808080'));

const btn = document.querySelector('button');
btn.classList.add('btn');
btn.disabled = true;
let userSelectedDate;
let dateNow;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      longhand: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    },
  },
  onClose(selectedDates) {
    const msDefaultDate = options.defaultDate.getTime();
    const msselectedDates = selectedDates[0].getTime();
    if (msDefaultDate > selectedDates[0].getTime()) {
      iziToast.show({
        title: 'Hey!',
        message: 'Please choose a date in the future',
        iconUrl: '../img/x.svg',
        position: 'center',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        messageColor: '#fff',
        iconColor: '#fff',
        progressBarColor: '#b51b1b',
        closeColor: '#fff',
        class: 'iziToast-dark',
      });
      btn.disabled = true;
      btn.classList.remove('btn-active');
    } else {
      userSelectedDate = msselectedDates;
      dateNow = msDefaultDate;
      btn.disabled = false;
      btn.classList.add('btn-active');
    }
  },
  onOpen() {
    setTimeout(() => {
      document.querySelectorAll('.flatpickr-day.selected').forEach(day => {
        day.classList.remove('selected');
      });
    }, 0);
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function start() {
  input.classList.add('input-disabled');
  btn.classList.remove('btn-active');
  btn.disabled = true;
  input.disabled = true;

  const countdownInterval = setInterval(() => {
    const time = userSelectedDate - new Date();
    const remainsTime = convertMs(time);
    days.textContent = addLeadingZero(remainsTime.days);
    hours.textContent = addLeadingZero(remainsTime.hours);
    minutes.textContent = addLeadingZero(remainsTime.minutes);
    seconds.textContent = addLeadingZero(remainsTime.seconds);

    if (time <= 0) {
      clearInterval(countdownInterval);

      input.disabled = false;
      input.classList.remove('input-disabled');
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
    }
  }, 1000);
}

btn.addEventListener('click', start);
