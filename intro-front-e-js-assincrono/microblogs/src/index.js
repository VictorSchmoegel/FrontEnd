import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const userSelect = document.querySelector('select');
const URL_API = 'https://dummyjson.com/users';

// Lógica para pegar as informações das pessoas usuárias e preencher o select aqui
fetch(URL_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
  });

userSelect.addEventListener('change', (event) => {
  clearPageData();
  // Lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  const POSTS_API = `https://dummyjson.com/posts/user/${userSelect.value}`;
  fetch(POSTS_API)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;
      fillPosts(posts);

      const [featuredPost] = posts;
      const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;

      return fetch(COMMENTS_API);
    })
    .then((response) => response.json())
    .then((data) => {
      const { comments } = data;
      fillFeaturedPostComments(comments);
    })
    .catch((error) => {
      fillErrorMessage('Erro ao recuperar informações');
      console.log(error.message);
    });
});