import { BookTypes } from '../types/bookTypes';

type BookProps = {
  book: BookTypes;
};

function Book({ book }: BookProps) {
  return (
    <li>
      <span>
        {book.isFavorite ? '★' : '☆'}
      </span>
      <span>
        {`${book.title} (${book.pages} páginas)`}
      </span>
      <span>
        {book.isRead ? '✓' : '✗'}
      </span>
    </li>
  );
}

export default Book;
