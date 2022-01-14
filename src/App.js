import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const App = () => { 

   return (
        <>

            <Router>
                    <Navbar/>
                        <Routes>
                                <Route path="/" exact element={<Home/>} ></Route>
                                <Route path="*" element={<NotFound/>} />
                        </Routes>
            
            </Router>
        </>
    )
}

export default App;