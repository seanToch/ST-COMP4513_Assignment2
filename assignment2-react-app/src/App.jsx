// Import Tools
import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Context
import { ProductsContext } from './context/ProductsContext.jsx';

// Import Views and Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './views/Home.jsx';
import Browse from './views/Browse.jsx';
import SingleProduct from './views/SingleProduct.jsx';
import ShoppingCart from './views/ShoppingCart.jsx';
import AboutDialog from './views/AboutDialog.jsx';
import loadingGif from './assets/loading.gif';



function App() {
  // State for the About dialog
  const [aboutOpen, setAboutOpen] = useState(false);

  // Pulling Loading and Error from Context Provider
  const { loading, error } = useContext(ProductsContext);

  // Holds For Conditional Loading/Error Check
  let content;

  if (loading) {
    content = (
      <div className="flex justify-center py-16">
+        <img src={loadingGif} alt="Loading products" className="w-20" />
      </div>)
  } else if (error) {
    content = <p className="py-16 text-center text-danger">Oops... {error}</p>;
  } else {
    content = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header openAbout={() => setAboutOpen(true)} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">{content}</main>
      <Footer />
      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>
  );
}


export default App;