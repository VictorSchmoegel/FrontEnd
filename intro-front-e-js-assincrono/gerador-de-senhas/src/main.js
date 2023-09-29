import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const passwordBtn = document.querySelector('button');
const passwordInput = document.querySelector('h2');

passwordBtn.addEventListener('click', () => {
  const randompassword = nanoid();
  passwordInput.textContent = randompassword;
  console.log(randompassword);
});

passwordInput.addEventListener('click', (e) => {
  copy(e.target.innerHTML);
});
