import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faq from "./pages/Faq";
import { useParams } from "react-router-dom";

function Main() {

    let email = '';
    let auth = '';

    const { is_logged_in } = useParams();

    const parse_data = JSON.parse(localStorage.getItem('is_logged_in'));
    console.log(parse_data);

    if(parse_data){
        email = parse_data.email;
        auth = parse_data.is_auth;
    }

    return (
        <>
                <Navbar />
                <div className="main">
                    <Routes>
                            <Route
                                path="/"
                                element={

                                    <Home name={email} />

                                }
                            />
                            <Route path="/login" element={ <Login />} />
                            <Route path="/register" element={ <Register />} />
                            <Route path="/contact" element={ <Contact />} />
                            <Route path="/about" element={ <About />} />
                            <Route path="/faq" element={ <Faq />} />
                    </Routes>
                </div>
            </>

);
}
export default Main;

// // DOM element
if (document.getElementById('main')) {
    ReactDOM.render(
        <React.StrictMode>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
        </React.StrictMode>
    , document.getElementById('main'));
}
