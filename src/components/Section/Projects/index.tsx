import './Projects.css'
import { useState } from 'react'
import axios from 'axios'

import { BiLogoTypescript,BiLogoJavascript  } from "react-icons/bi";
import { FaJava, FaGithub  } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function Projects(){

    const [projects,setProjects] = useState<any>([])

    async function mostrarProjetos(){
        try{
            const response = await axios.get('https://api.github.com/users/oAoj1/repos?visibility=public')
            const data = response.data  

            setProjects(data)
            
        }catch(error){
            console.log(error)
        }
    }                                                                                                
    mostrarProjetos()

    return(
        <div className="projectsContainer" id='ProjetosSection'>
            <div className="tituloProjects">
                <h1>Projetos</h1>
                <h2>Confira meus melhores projetos</h2>
            </div>
            
            <ul className='listaProjetos'>
                {projects.map((projeto: any) =>  
                    <li key={projeto.id}>
                        <div className="tituloLI">
                            <h5>
                                {projeto.language == 'TypeScript' ? <BiLogoTypescript  title={projeto.language}/> 
                                :projeto.language == 'JavaScript' ? <BiLogoJavascript title={projeto.language}/>
                                :projeto.language == 'Java' ? <FaJava title={projeto.language}/> 
                                :projeto.language}
                            </h5>

                            <h3>{projeto.name}</h3>
                            <h4>{projeto.description}</h4>
                        </div>
                        
                        <div className="linksLI">
                            <span>
                                {projeto.html_url.length > 1 ? 
                                    <a 
                                        href={projeto.html_url}
                                        target='_blank'
                                        title={`GitHub de ${projeto.name} -> ${projeto.html_url}`}
                                    >
                                        <button>GitHub<FaGithub/></button>
                                    </a>
                                : ''}
                            </span>
                            <span>
                                {projeto.homepage ? 
                                    <a 
                                        href={projeto.homepage}
                                        target='_blank'
                                        title={`Pagina de ${projeto.name} -> ${projeto.homepage}`}
                                    >
                                        <button>Página <CgWebsite/></button>
                                    </a> 
                                : ''}
                            </span>
                        </div>
                    </li>
                    
                )}
                
            </ul>

        </div>
    )
}