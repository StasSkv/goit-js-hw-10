import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import biExclTri from '../img/bi_exclamation-triangle.svg';
import biBell from '../img/bi_bell.svg';
import plusIcon from '../img/plus.svg';
import minusIcon from '../img/plus.svg';

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
    <img class="svg-plus" src="${plusIcon}" width="16" height="16" />
    <img class="svg-minus" src="${minusIcon}" width="16" height="16" />
  </div>`
);

const containerSvg = document.querySelector('.container-svg');

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
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59a10d',
        titleColor: '#fff',
        messageColor: '#fff',
        progressBarColor: '#326101',
        class: 'iziToast-dark',
        displayMode: 2,
        transitionOut: 'fadeOutUp',
      });
    })
    .catch(error => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        messageColor: '#fff',
        progressBarColor: '#b51b1b',
        class: 'iziToast-dark',
        displayMode: 2,
        transitionOut: 'fadeOutUp',
      });
    });
  form.reset();
}

const btnForm = document.querySelector('button');

btnForm.addEventListener('click', event => {
  const selectedRadio = document.querySelector('input[name="state"]:checked');
  if (!inputDelay.value || !selectedRadio) {
    iziToast.show({
      title: 'Caution!',
      message: 'You forgot important data',
      iconUrl: biExclTri,
      position: 'topRight',
      backgroundColor: '#ffa000',
      titleColor: '#fff',
      messageColor: '#fff',
      progressBarColor: '#bb7b10',
      class: 'iziToast-dark',
      displayMode: 2,
      transitionOut: 'fadeOutUp',
    });
  }
});

iziToast.show({
  title: 'Hello!',
  message: 'Welcome!',
  iconUrl: biBell,
  position: 'topRight',
  backgroundColor: '#09f',
  titleColor: '#fff',
  messageColor: '#fff',
  progressBarColor: '#0071bd',
  class: 'iziToast-dark',
  displayMode: 2,
  transitionOut: 'fadeOutUp',
});
