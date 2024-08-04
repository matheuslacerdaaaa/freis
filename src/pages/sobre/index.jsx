import './index.scss'


import { Link } from 'react-router-dom'


export default function Sobre() {
    return (
        <div className="sobre">

            <header>

                <img src= '/assets/images/logo.png'/>
                <h2>React FreiS</h2>


                <nav>

                    <Link className='inicio' to='/'>Inicio</Link>
                    <Link className='sobre' to='/sobre'>Sobre</Link>

                </nav>

            </header>


            <main>
                <h3>Sobre</h3>
                <span>  


                    <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades. <br></br><br></br><br></br>

                    Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades.<br></br>
                    Estamos ansiosos para ver seu progresso e sucesso!</p>

                    
                </span>

                <img src= '/assets/images/logo.png'/>

            </main>

        </div>
    );
}


