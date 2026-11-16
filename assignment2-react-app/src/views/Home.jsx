import {Link} from 'react-router-dom'

const Home = (props) => {

    const homepageIDs = [63, 12, 36, 140, 92];

    const homepagePaintings = props.data.filter((e) => homepageIDs.includes(e.paintingID));

    return(
        <div>
            <h1>Browse centuries of painting, one canvas at a time.</h1>
            <Link to="/Browse"><button>Explore</button></Link>
            <ul>
                {homepagePaintings.map((e) => (
                 <li key={e.paintingId}>{e.title}</li>
            ))}
            </ul>
        </div>
)}

export default Home;