import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sobre from './pages/sobre'
import App from './pages/inicio';
import Notfound from './pages/notfound';
import Primeiro from './pages/primeiro';
import Segundo from './pages/segundo';
import Terceiro from './pages/terceiro';
import Quarto from './pages/quarto'
import Quinto from './pages/quinto';



export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/primeiro' element= {<Primeiro/>} />
                <Route path= '/segundo' element= {<Segundo/>} />
                <Route path= '/terceiro' element= {<Terceiro/>} />
                <Route path= '/quarto' element= {<Quarto/>} />
                <Route path= '/quinto' element= {<Quinto/>} />

              

        
                <Route path='*' element={<Notfound/>}/>
                
            </Routes>
        </BrowserRouter>

    )

}