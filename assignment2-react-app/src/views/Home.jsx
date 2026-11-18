import {Link} from 'react-router-dom'

const Home = (props) => {

    return(
        <div>
            <h1>Browse Producst.</h1>
            <Link to="/Browse"><button>Explore</button></Link>
        </div>
)}

export default Home;