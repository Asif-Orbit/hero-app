
import { Outlet, useLocation } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
      
      {loading ? (
        <div className="w-11/12 mx-auto h-dvh flex items-center justify-center">
          <span className="loading loading-spinner  loading-xl"></span>
        </div>
      ):(<div>
         <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
      </div>)
     
      }

      
      

      
    </>
  )
}

export default App
