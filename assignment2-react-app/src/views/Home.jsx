import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

const Home = (props) => {

    const { products } = useContext(ProductsContext);
    console.log(products);

    return(
        <div>
            <h1>Browse Producst.</h1>
            <p>{ products.length }</p>
            <Link to="/Browse"><button>Explore</button></Link>
        </div>
)}

export default Home;