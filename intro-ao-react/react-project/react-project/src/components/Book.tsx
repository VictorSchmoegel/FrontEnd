type BookProps = {
  book: {
    title: string;
    pages: number;
    isRead: boolean;
    isFavorite: boolean;
  }
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
