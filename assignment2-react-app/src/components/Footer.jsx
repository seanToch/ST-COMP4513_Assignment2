import {Link} from 'react-router-dom'

const Footer = (props) => {
    return(
        <section className="footer">
            <h2>GITHUB LINK: </h2>
            <Link to="/"><button>Return Home</button></Link>
        </section>
    )
}

export default Footer;