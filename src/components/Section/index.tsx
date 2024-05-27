import './Section.css'

import Projects from './Projects'
import Skill from './Skills'
import Certificates from './Certificates'
import AboutMe from './AboutMe'

import { FaGithub, FaLinkedin  } from "react-icons/fa"

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

                    <div className="socialMediasSection">
                        <a href="https://github.com/oAoj1" target="_blank" rel="noopener noreferrer">
                            <FaGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/joaomarques711/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin/>
                        </a>
                    </div>
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
