import './Section.css'

import Projects from './Projects'
import Skill from './Skills'
import Certificates from './Certificates'
import AboutMe from './AboutMe'

export default function Section(){

    return(
        <>
            <section id='HomeSection'> 
                <div className="tituloSection">
                    <h1> 
                        <span>Olá,</span> <br /> 
                        <span>eu sou <i>João</i>,</span> <br /> 
                        <span>desenvolvedor front-end</span>
                    </h1>

                    <h2>Conheça mais sobre minha pessoa e minha carreira</h2>

                    <button>Veja mais</button>
                </div> 
                 
                <div className="circuloSection">
                    <span className='circulo'></span>
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
