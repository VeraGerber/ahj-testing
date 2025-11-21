import getValidCreditCard from './validate';
import whichCard from './whichCard';

const form = document.querySelector('[data-widget="card-num-form-widget"]');
const input = form.querySelector('[data-id="card-num-input"]');
const formBtn = form.querySelector('[data-id="card-num-submit"]');
const message = document.querySelector('.message');
const name = document.querySelector('.card-name');
const allCards = document.querySelectorAll('.card');

formBtn.addEventListener('click', (e) => {
  e.preventDefault();

  [...allCards].forEach((item) => {
    if (item.classList.contains('card-active')) {
      item.classList.remove('card-active');
    }
  });

  const isValid = getValidCreditCard(input.value);

  if (isValid) {
    message.classList.add('hidden');
    input.classList.remove('invalid');
    input.classList.add('valid');

    const cardName = whichCard(input.value);
    const cardImg = document.querySelector(cardName);

    if (!cardImg) {
      message.classList.remove('hidden');
    } else {
      cardImg.classList.add('card-active');
      if (cardName === '.card-visa') {
        name.innerHTML = '<span>This credit cards issuer is VISA</span>';
      } else if (cardName === '.card-american') {
        name.innerHTML = '<span>This credit cards issuer is American Express</span>';
      } else if (cardName === '.card-master') {
        name.innerHTML = '<span>This credit cards issuer is MasterCard</span>';
      } else if (cardName === '.card-mir') {
        name.innerHTML = '<span>This credit cards issuer is МИР</span>';
      } else if (cardName === '.card-jcb') {
        name.innerHTML = '<span>This credit cards issuer is JCB</span>';
      } else if (cardName === '.card-discover') {
        name.innerHTML = '<span>This credit cards issuer is Discover</span>';
      } else if (cardName === '.card-diners') {
        name.innerHTML = '<span>This credit cards issuer is Diners Club</span>';
      }
      name.classList.remove('hidden');
      // form.reset();
    }
  } else {
    message.classList.remove('hidden');
    name.classList.add('hidden');
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
