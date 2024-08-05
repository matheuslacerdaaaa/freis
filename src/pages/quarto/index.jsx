import './index.scss'

import { Link } from 'react-router-dom'

export default function Quarto() {
    return (

        <div className='exercicio4'>


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

                    <h1>Exercício 04 - Cálculo de tempo</h1>
                </div>

                <div className='marrom'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Javascript que <b>calcule</b> o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.</p>


                </div>

                
                <div className='caixa'>

                    <label htmlFor="order"><b>Nome do livro</b></label>
                    <input type="text"  placeholder='Digite aqui'/>

                    <label htmlFor="order"><b>Total de páginas</b></label>
                    <input type="text"  placeholder='0'/>

                    <label htmlFor="order"><b>Tempos em segundos por página</b></label>
                    <input type="text"  placeholder='0'/>

                    <div className='botao'>
                     
                     <button>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: O total é 0h</b></p>



            </main>

        </div>

    );
}
