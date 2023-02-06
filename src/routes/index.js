import { BrowserRouter, Routes, Route } from 'react-router-dom';


// MY IMPORTS
import Home from '../views/Home';
import Contato from '../views/Contato';

export default function RoutesApp(){
    return(
        <BrowserRouter >
            <Routes >
                <Route path='/' element={ <Home /> } />
                <Route path='/contato' element={<Contato />} />

                <Route path='*' element={<Home /> } />
            </Routes>
        </BrowserRouter>
    )
}