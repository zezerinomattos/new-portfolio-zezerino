import { BrowserRouter, Routes, Route } from 'react-router-dom';


// MY IMPORTS
import Home from '../views/Home';
import Contato from '../views/Contato';
import Curriculo from '../views/Curriculo';
import Portfolio from '../views/Portfolio';

export default function RoutesApp(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <Routes >
                <Route path='/' element={ <Home /> } />
                <Route path='/contato' element={<Contato />} />
                <Route path='/contato/curriculo' element={<Curriculo />} />
                <Route path='/curriculo' element={<Curriculo />} />
                <Route path='/portfolio' element={<Portfolio />} />

                <Route path='/portfolio/contato' element={<Contato />} />
                <Route path='/portfolio/curriculo' element={<Curriculo />} />
                <Route path='/curriculo/contato' element={<Contato />} />
                <Route path='/contato/curriculo' element={<Curriculo />} />

                <Route path='*' element={<Home /> } />
                
            </Routes>
        </BrowserRouter>
    )
}