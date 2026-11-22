import { Link, NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import logo from '../assets/logo.png';

const Header = (props) => {

  // Get Cart Item Count
  const { cartCount } = useContext(CartContext);

  // Return links and header markup
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/browse">Browse</NavLink>
          </li>
          <li>
            <button type="button" onClick={props.openAbout}>About</button>
          </li>
        </ul>
      </nav>

      <Link to="/cart">
        Cart <span>{cartCount}</span>
      </Link>
    </header>
  );
};

export default Header;