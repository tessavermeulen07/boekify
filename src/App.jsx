import './App.css';
import {Route, Routes} from 'react-router-dom';
import Start from "./pages/start/Start.jsx";


function App() {

    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Start/>}/>
                </Routes>
            </main>
        </>
    )
}

export default App
