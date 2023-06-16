import './Section.css'

import Projects from './Projects'
import Skill from './Skills'
import Certificates from './Certificates'
import AboutMe from './AboutMe'

export default function Section(){
    return(
        <>
            <section id='HomeSection'>   
                <div className='tituloSection'>

                    <div className="descSection">
                        <h1>
                            <span className="nome">
                                <span className='joao'> 
                                    <span className='j'>J</span>oão
                                </span> 
                                <span className="marques">
                                    <span className='m'>M</span>arques - <br /> 
                                </span>
                            </span>
                            Portfólio
                        </h1>
                        <h2>Sejam todos muito bem vindos(as) ao meu <span className='port'>portfólio</span> , veja os meus melhores projetos, minhas habilidades e um pouco mais sobre minha pessoa!</h2>
                    </div>

                    <div className="desktopSection">
                        <img src='../../../JM.png' alt='JM'/>
                    </div>

                </div>
            </section>

            <main>
                <Projects/>
                <Skill/>
                <Certificates/>
                <AboutMe/>
            </main> 

        </>
    )
}
