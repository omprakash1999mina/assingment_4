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
                                <Route path="/" exact component={Home} ></Route>
                                <Route component={NotFound} />
                        </Routes>
            
            </Router>
        </>
    )
}

export default App;