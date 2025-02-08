import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const main = document.querySelector('main');

main.insertAdjacentHTML(
  'beforebegin',
  `<a href="./index.html" class="link-back-to-home">go home</a>`
);

const inputDelay = document.querySelector('input');
const labelDelay = inputDelay.closest('label');
inputDelay.classList.add('input-delay');
labelDelay.classList.add('label-delay');

labelDelay.insertAdjacentHTML(
  'beforeend',
  `<div class="container-svg">
  <svg class="svg-plus" width="16" height="16">
    <use href="/src/img/plus.svg#plus"></use>
  </svg>
   <svg class="svg-minus" width="16" height="16">
    <use href="/src/img/plus.svg#plus" ></use>
  </svg>`
);

const containerSvg = document.querySelector('.container-svg');
const btnPlusPoint = document.querySelector('.svg-plus');
const btnMinusPoint = document.querySelector('.svg-minus');

containerSvg.addEventListener('click', event => {
  if (event.target.closest('.svg-plus')) {
    inputDelay.value = Number(inputDelay.value) + 1;
  } else if (event.target.closest('.svg-minus') && inputDelay.value > 0) {
    inputDelay.value = Number(inputDelay.value) - 1;
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const selectedRadio = document.querySelector('input[name="state"]:checked');

  const delay = Number(inputDelay.value);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedRadio.value == 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(result => {
      iziToast.show({
        title: 'OK!',
        message: `Fulfilled promise in ${delay}ms`,
        iconUrl: '/src/img/bi-check.svg',
        position: 'topRight',
        backgroundColor: '#59a10d',
        titleColor: '#fff',
        messageColor: '#fff',
        progressBarColor: '#326101',
        class: 'iziToast-dark',
      });
    })
    .catch(error => {
      iziToast.show({
        title: 'Error!',
        message: 'Illegal operation',
        iconUrl: '/src/img/x.svg',
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        messageColor: '#fff',
        progressBarColor: '#326101',
        class: 'iziToast-dark',
      });
    });
}

const btnForm = document.querySelector('button');

btnForm.addEventListener('click', event => {
  const selectedRadio = document.querySelector('input[name="state"]:checked');
  if (!inputDelay.value || !selectedRadio) {
    iziToast.show({
      title: 'Caution!',
      message: 'You forgot important data',
      iconUrl: '/src/img/bi_exclamation-triangle.svg',
      position: 'topRight',
      backgroundColor: '#ffa000',
      titleColor: '#fff',
      messageColor: '#fff',
      progressBarColor: '#bb7b10',
      class: 'iziToast-dark',
    });
  }
});

iziToast.show({
  title: 'Hello!',
  message: 'Welcome!',
  iconUrl: '/src/img/bi_bell.svg',
  position: 'topRight',
  backgroundColor: '#09f',
  titleColor: '#fff',
  messageColor: '#fff',
  progressBarColor: '#0071bd',
  class: 'iziToast-dark',
});
