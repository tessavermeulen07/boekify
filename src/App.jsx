import './App.css';
import {Route, Routes} from 'react-router-dom';
import Start from './pages/start/Start.jsx';
import Home from './pages/home/Home.jsx';
import AddBooks from './pages/addBooks/AddBooks.jsx';
import Library from './pages/library/Library.jsx';


function App() {

    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Start />}/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/add-books" element={<AddBooks />} />
                    <Route path="/library" element={<Library />} />
                </Routes>
            </main>
        </>
    )
}

export default App
