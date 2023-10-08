import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
const promises = document.querySelector('.form');
const checkPromises = event => {
  event.preventDefault();
  const firstDelay = Number.parseInt(event.target.elements['delay'].value);
  const delayStep = Number.parseInt(event.target.elements['step'].value);
  const amount = Number.parseInt(event.target.elements['amount'].value);
  for (let i = 0; i< amount; i++) {
    createPromise(i, firstDelay + delayStep*i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
};
promises.addEventListener('submit', checkPromises);