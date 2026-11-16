import './App.css';
import { useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';

//Import Views and Components
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './views/Home.jsx'
import Browse from './views/Browse.jsx'
import About from './views/About.jsx'

//Create supabase client to fetch data
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

//App Function
function App() {

  const [siteData, setSiteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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


  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home data={siteData}/>} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Footer />
    </>
    
  )
}

export default App;
