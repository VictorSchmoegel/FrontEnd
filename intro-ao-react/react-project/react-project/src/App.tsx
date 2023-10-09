import './App.css';
import Book from './components/Book';
import Footer from './components/Footer';
import Header from './components/Header';
import Title from './components/Title';

const booksList = [
  {
    title: 'Harry Potter',
    pages: 300,
    isRead: true,
    isFavorite: false,
  },
  {
    title: 'Senhor dos Anéis',
    pages: 500,
    isRead: false,
    isFavorite: true,
  },
  {
    title: 'Percy Jackson',
    pages: 400,
    isRead: true,
    isFavorite: true,
  },
  {
    title: 'As Crônicas de Gelo e Fogo',
    pages: 1000,
    isRead: false,
    isFavorite: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Title>
        Meus livros
      </Title>
      <ul>
        {booksList.map((book) => (
          <Book key={ book.title } book={ book } />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
