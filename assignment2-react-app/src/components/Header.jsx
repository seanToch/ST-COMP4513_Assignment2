import { Link, NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import logo from '../assets/logo.png';

const Header = (props) => {

  // Get Cart Item Count
  const { cartCount } = useContext(CartContext);

  //Shared Tailwind Class For Nav Links
  const navLinkClass = 'inline-block border-b-2 border-transparent pb-1 text-white/80 transition-colors hover:text-white [&.active]:border-accent [&.active]:text-white';

  // Return links and header markup
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-brand px-6 py-3 text-white shadow-md">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </Link>

      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/browse" className={navLinkClass}>Browse</NavLink>
          </li>
          <li>
            <button type="button" onClick={props.openAbout} className={navLinkClass}>About</button>
          </li>
        </ul>
      </nav>

      <Link to="/cart" className="flex items-center gap-2 font-medium text-white transition-colors hover:text-accent">
        Cart <span className="min-w-6 rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-white">{cartCount}</span>
      </Link>
    </header>
  );
};

export default Header;