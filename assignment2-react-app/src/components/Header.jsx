import {Link} from 'react-router-dom'

const Header = (props) => {
    return(
        <section className="header">
            <h1>TITLE</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><button>Home</button></Link>
                    </li>
                    <li>
                        <Link to="/browse"><button>Browse</button></Link>
                    </li>
                    <li>
                        <Link to="/about"><button>About</button></Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;