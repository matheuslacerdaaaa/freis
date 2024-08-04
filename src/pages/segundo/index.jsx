import './index.scss'

import { Link } from 'react-router-dom'

export default function Segundo() {
    return (

        <div className='exercicio2'>


            <header>

                <img src='/assets/images/logo.png' />
                <h2>React FreiS</h2>


                <nav>

                    <Link className='inicio' to='/'>Inicio</Link>
                    <Link className='sobre' to='/sobre'>Sobre</Link>

                </nav>

            </header>

            <main>


                <div className='titulo'>
                    <Link className='voltar' to= '/'>
                        <img src= '/assets/images/voltar.png' />
                    </Link>

                    <h1>Exercício 02 - Converter Kg/gramas</h1>
                </div>

                <div className='verde'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Javascript para <b>converter kilos em gramas.</b></p>


                </div>

                
                <div className='caixa'>

                    <label htmlFor="order"><b>Valor em grama</b></label>
                    <input type="text"  placeholder='0'/>

                    <div className='botao'>
                     
                     <button>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: O total é R$ 0,00</b></p>

                 





            </main>






        </div>

    );
}
