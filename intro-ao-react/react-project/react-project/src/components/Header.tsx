import User from './User';

function Header() {
  return (
    <header>
      <h1>
        Olá
        {' '}
        <User
          user={ {
            firstName: 'Victor',
            lastName: 'Schmoegel',
          } }
        />
      </h1>
    </header>
  );
}

export default Header;
