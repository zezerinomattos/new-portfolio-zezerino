import { BrowserRouter, Routes, Route } from 'react-router-dom';


// MY IMPORTS
import Home from '../views/Home';
import Login from '../views/Login';

export default function RoutesApp(){
    return(
        <BrowserRouter >
            <Routes >
                <Route path='/' element={ <Home /> } />
                <Route path='/login' element={<Login /> } />
                
            </Routes>
        </BrowserRouter>
    )
}