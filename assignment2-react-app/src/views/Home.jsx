import {Link} from 'react-router-dom'

const Home = (props) => {

    const homepageID = 63;

    const homepagePaintings = props.data.filter((e) => e.id === homepageID);

    console.log(homepagePaintings);

    return(
        <div>
            <h1>Browse centuries of painting, one canvas at a time.</h1>
            <Link to="/Browse"><button>Explore</button></Link>
        </div>
)}

export default Home;