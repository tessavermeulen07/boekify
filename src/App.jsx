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
import { AuthContext } from './context/AuthContext.jsx';



function App() {

    const {isAuth, login} = useContext(AuthContext);
    console.log(isAuth, login);

    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Start />}/>
                    <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" />} />
                    <Route path="/add-books" element={<AddBooks />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/registreer" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/books/:id" element={<IndividualBook />} />
                    <Route path="/quotes" element={<Quotes />} />
                    <Route path="/review/:id" element={<AddReview />} />
                </Routes>
            </main>
        </>
    )
}

export default App
