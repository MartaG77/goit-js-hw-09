function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
startBtn.addEventListener('click',() => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    changeColor();
  }, 1000);
});
stopBtn.addEventListener ('click',() => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
});
stopBtn.disabled = true;