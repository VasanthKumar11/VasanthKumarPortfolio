import './App.css';
import Aboutus from './Components/Aboutus';
import Project from './Components/Project';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
// import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <>
{/* 
    <Portfolio/>
    <Aboutus/>   */}
   <BrowserRouter>
   <Routes>
   <Route path='/'element={<Portfolio/>}></Route>
   <Route path='/Aboutus' element={<Aboutus/>}></Route>
   <Route path='/Project' element={<Project/>}></Route>
   <Route path='/Contact' element={<Contact/>}></Route>
   </Routes>
   </BrowserRouter> 
  
    </>
  );
}

export default App;
