import User from './User';

function Footer() {
  return (
    <footer>
      Acessando como
      {' '}
      <strong>
        <User
          user={ {
            firstName: 'Victor',
            lastName: 'Schmoegel',
          } }
        />
      </strong>
    </footer>
  );
}

export default Footer;
