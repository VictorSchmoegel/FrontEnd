const img = document.querySelector('img');
const superHeroName = document.querySelector('p');
const btn = document.querySelector('button');

const BASE_URL = 'https://akabab.github.io/superhero-api/api';
const MAX_ID = 1000;
const randomID = () => Math.floor(Math.random() * MAX_ID);


btn.addEventListener('click', (e) => {
  e.preventDefault();
  const id = randomID();
  fetch(`${BASE_URL}/id/${id}.json`)
    .then((res) => res.json())
    .then((data) => {
      img.src = data.images.md;
      superHeroName.innerHTML = data.name;
    })
    .catch(err => console.log(`${err} id não válido`));
});