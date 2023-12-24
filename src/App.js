import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    

 

    
       <Router>
       
        
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
     </Router>
  );
}

export default App;
