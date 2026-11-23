// Import Tools
import { Link } from 'react-router-dom';

// Breadcrumb With Links
const Breadcrumb = (props) => {
    return (
        <nav className="breadcrumb" >
            <Link to="/">Home</Link> &gt; <Link to="/browse">Browse</Link> &gt; <span>{props.title}</span>
        </nav>
    );
};

export default Breadcrumb;