import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputDelay = document.querySelector('input');
const labelDelay = inputDelay.closest('label');
inputDelay.classList.add('input-delay');
labelDelay.classList.add('label-delay');

inputDelay.insertAdjacentHTML(
  'afterend',
  `<div class="container">
  <svg class="svg" width="16" height="16">
    <use href="./img/plus.svg#plus"></use>
  </svg>
  <svg class="svg" width="16" height="16">
    <use href="./img/minus#minus.svg"></use>
  </svg>
</div>`
);
