// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/retirement">Retirement Calculator</Link>
      </nav>
    </header>
  );
};

export default Header;
