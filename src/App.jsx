import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import Start from './pages/start/Start.jsx';
import Home from './pages/home/Home.jsx';
import AddBooks from './pages/addBooks/AddBooks.jsx';
import Library from './pages/library/Library.jsx';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';
import IndividualBook from './pages/individual-book/IndividualBook.jsx';
import Quotes from './pages/quotes/Quotes.jsx';
import AddReview from './pages/add-review/AddReview.jsx';
import Profile from './pages/profile/Profile.jsx';
import { AuthContext } from './context/AuthContext.jsx';
import Footer from './footer/Footer.jsx';



function App() {

    const {isAuth, login} = useContext(AuthContext);


    return (
        <>
            <div className="container-app">
                    <main>
                        <Routes>
                            <Route path="/" element={!isAuth ? <Start/> : <Navigate to="/home"/>}/>
                            <Route path="/home" element={isAuth ? <Home/> : <Navigate to="/"/>}/>
                            <Route path="/add-books" element={<AddBooks/>}/>
                            <Route path="/library" element={<Library/>}/>
                            <Route path="/registreer" element={!isAuth ? <Register/> : <Navigate to="/home"/>}/>
                            <Route path="/login" element={!isAuth ? <Login/> : <Navigate to="/home"/>}/>
                            <Route path="/books/:id" element={<IndividualBook/>}/>
                            <Route path="/quotes" element={<Quotes/>}/>
                            <Route path="/review/:id" element={<AddReview/>}/>
                            <Route path="/profile/" element={<Profile/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </div>
        </>
    )
}

export default App
