import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = (props) => {


  // Placeholder until CartContext exists
  const cartCount = 0;



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