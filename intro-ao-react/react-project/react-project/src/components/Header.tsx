import User from './User';

function Header() {
  return (
    <header>
      <h1>
        Olá
        {' '}
        <User />
      </h1>
    </header>
  );
}

export default Header;
