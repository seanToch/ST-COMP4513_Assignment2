import {useState, createContext, useEffect} from 'react'

// Create Context
export const ProductsContext = createContext(null);

// Products API Link
const URL = 'https://dummyjson.com/products?limit=10'

// Provider Function
export const ProductsProvider = (props) => {

    // Create states from product data, loading and error
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Fetch Data. Initially loading, products or error get set depending on result
    useEffect(() => {
        fetch(URL)
        .then(resp => (resp.json()))
        .then(data => {
            setProducts(data.products);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        })
    }, []);

    // Return Provider
    return (
        <ProductsContext.Provider value={{products, loading, error}} >
            {props.children}
        </ProductsContext.Provider>
    );
}


//COMPONENT USAGE
//import { useContext } from "react";
//import { ProductsContext } from "../context/ProductsContext";

// const { products, loading, error } = useContext(ProductsContext)