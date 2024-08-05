import './index.scss'
import { useState } from 'react';

import { Link } from 'react-router-dom'

export default function Primeiro() {

    
    return (

        <div className='exercicio1'>


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

                    <h1>Exercício 01 - Cupom de desconto</h1>
                </div>

                <div className='amarelo'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>


                </div>


                <div className='caixa'>

                    <label htmlFor="order"><b>Informe o valor do pedido</b></label>
                    <input type="text"  placeholder='0'/>


                    <div className='um'>  
                        <label htmlFor="order"><b>Informe o valor do Cupom</b></label>
                        <input type="text"  placeholder='0'/>
                    </div>

                    <div className='botao'>
                     
                     <button>Executar</button>

                    </div>

                </div>

                <p className='p'><b>Resultado: O total é R$ 0,00</b></p>






            </main>






        </div>

    );
}

