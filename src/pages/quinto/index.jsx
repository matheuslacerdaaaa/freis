import './index.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Quinto() {


    return (

        <div className='exercicio5'>


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
                    <Link className='voltar' to='/'>
                        <img src='/assets/images/voltar.png' />
                    </Link>

                    <h1>Exercício 05 - Media de notas</h1>
                </div>

                <div className='vermelho'>


                </div>

                <div className='container'>

                    <p>Implementar um programa Javascript para <b>verificar</b> se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima pra passar é 6.</p>


                </div>


                <div className='caixa'>


                    <div className='grupo'>

                        <div className='um'>
                            <label htmlFor="order"><b>Primeira nota</b></label>
                            <input type="text" placeholder='0' />
                        </div>

                        <div className='dois'>
                            <label htmlFor="order"><b>Segundo nota</b></label>
                            <input type="text" placeholder='0' />
                        </div>


                        <div className='tres'>
                            <label htmlFor="order"><b>Terceiro Nota</b></label>
                            <input type="text" placeholder='0' />
                        </div>

                    </div>


                    <div className='botao'>

                        <button>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: o aluno passou?</b></p>





            </main>






        </div>

    );
}
