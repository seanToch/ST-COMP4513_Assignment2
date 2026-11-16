import {Link} from 'react-router-dom'
import logo from '../assets/Historical Paintings Gallery Logo.png'

const Header = (props) => {
     return(
        <section className="header">
            <img src={logo} alt="Logo"/>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><button>Home</button></Link>
                    </li>
                    <li>
                        <Link to="/browse"><button>Browse</button></Link>
                    </li>
                    <li>
                        <button onClick={props.openAbout}>About</button>
                    </li>
                </ul>

                <Link to="/cart"><button>Cart</button></Link>

            </nav>
        </section>
    )
}

export default Header;