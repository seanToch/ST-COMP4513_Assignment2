import './App.css';
import { useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';

//Import Views and Components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './views/Home.jsx'
import Browse from './views/Browse.jsx'
import ShoppingCart from './views/ShoppingCart.jsx'
import AboutDialog from './views/AboutDialog.jsx';


//Create supabase client to fetch data
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

//App Function
function App() {

  //Data loading state for dataset, loading and error handling
  const [siteData, setSiteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Querying the database
  useEffect(() => {
      async function loadData() {
    try {
      const { data, error } = await supabase.from('paintings').select('*');
      if (error) throw error;
      setSiteData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  loadData();
  }, []);

  //Create state for dialog box
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
    <Header openAbout={() => setAboutOpen(true)} />
      <main>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <Routes>
            <Route path="/" element={<Home data={siteData} />} />
            <Route path="/browse" element={<Browse data={siteData} />} />
            <Route path="/cart" element={<ShoppingCart data={siteData} />} />
          </Routes>
        )}
      </main>
      <Footer />
      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
    
  )
}

export default App;


