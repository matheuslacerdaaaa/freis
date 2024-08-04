import './index.scss'

import { Link } from 'react-router-dom'

export default function Terceiro() {
    return (

        <div className='exercicio3'>


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

                    <h1>Exercício 03 - Valor total por quantidade</h1>
                </div>

                <div className='azul'>


                </div>

                <div className='container'>

                    <p>Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande,</b> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>


                </div>



                <div className='caixa'>


                <div className='grupo'>

                   <div className='um'>
                     <label htmlFor="order"><b>Quantidade pequeno</b></label>
                        <input type="text" placeholder='0' />
                    </div> 

                    <div className='dois'>
                        <label htmlFor="order"><b>Quantidade medio</b></label>
                        <input type="text" placeholder='0' />
                    </div>

                    
                    <div className='tres'>
                        <label htmlFor="order"><b>Quantidade grande</b></label>
                        <input type="text" placeholder='0' />
                    </div>

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