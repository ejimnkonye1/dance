import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dancers4LifeClub from './component/dancerforlife';
import Header from './component/header';

import Classdance from './component/class';
import Testimonial from './component/test';
import Tic from './component/tic';

import Yes from './component/yes';
import Lander from './component/video';
import Login from './component/login';
import Signup from './component/signup';
import Footer from './component/footer';
const Loader = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <div class="text-center">
      <div class="spinner-grow text-dark" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
  
  
  );
  
  // Layout component that includes the loader logic
  const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const delayLoader = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => clearTimeout(delayLoader);
    }, []);
  
    return isLoading ? <Loader /> : children;
  };
  
function App() {
  return (
    

 

    
       <Router>
           <Layout>
        
     <Header />
 
         <Routes>
           <Route path="/" element={<Lander />} />
           <Route path="/classdance" element={<Classdance />} />
           <Route path="/testimonial" element={<Testimonial />} />
           <Route path="/login" element={<Login />} />
           <Route path="/tic" element={<Tic />} />
           <Route path="/sign" element={<Signup />} />
         </Routes>
       {/* <Footer /> */}
       </Layout>
     </Router>
  );
}

export default App;
