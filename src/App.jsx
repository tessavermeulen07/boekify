import './App.css';
import {Route, Routes} from 'react-router-dom';
import Start from './pages/start/Start.jsx';
import Home from './pages/home/Home.jsx';


function App() {

    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Start/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            </main>
        </>
    )
}

export default App
