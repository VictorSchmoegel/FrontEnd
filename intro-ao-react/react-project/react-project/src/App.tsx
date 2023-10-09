import './App.css';
import React, { useState } from 'react';
import Book from './components/Book';
import Footer from './components/Footer';
import Header from './components/Header';
import Title from './components/Title';
import { BookTypes } from './types/bookTypes';

function App() {
  const [bookTitle, setBookTitle] = useState('');
  const [booksPages, setBooksPages] = useState('');
  const [books, setBooks] = useState<BookTypes[]>([]);
  const [name, setName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookTitle(event.target.value);
  };

  const handlePagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBooksPages(event.target.value);
  };

  const handleAddBook = () => {
    const newBook = {
      title: bookTitle,
      pages: Number(booksPages),
      isRead: false,
      isFavorite: false,
    };
    setBooks([...books, newBook]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <Header />
        <Title>
          Meus livros
        </Title>
        <ul>
          {books.map((book) => (
            <Book key={ book.title } book={ book } />
          ))}
        </ul>
        <div>
          <form onSubmit={ handleSubmit }>
            <input
              type="text"
              placeholder="Título"
              value={ bookTitle }
              onChange={ handleNameChange }
            />
            <input
              type="number"
              placeholder="Quantidade de páginas"
              value={ booksPages }
              onChange={ handlePagesChange }
            />
            <button
              onClick={ handleAddBook }
            >
              Adicionar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
