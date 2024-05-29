import './Projects.css'

import axios from 'axios'

import { useState,useEffect } from 'react'

import Projeto from './Projeto';

export default function Projects(){

    const [projects,setProjects] = useState<any>([])

    useEffect(() => {
        async function mostrarProjetos(){
            const response = await axios.get('https://api.github.com/users/oAoj1/repos?visibility=public')
            const data = response.data  

            setProjects(data)
        }           
        
        mostrarProjetos()
    },[])

    const nomesProjetos = projects.map((projetos:any) => projetos)

    var projetosFrontEnd: any[] = []
    var projetosBackEnd: any[] = []
    var projetosOutros: any[] = []

    for(var i = 0;i < nomesProjetos.length; i++){
        var duasPrimeirasLetras = nomesProjetos[i].name.slice(0,2) 
        var cadaProjeto = nomesProjetos[i]

        switch(duasPrimeirasLetras){
            case 'BE':
                projetosBackEnd.push(cadaProjeto)
                break
            case 'FE':
                projetosFrontEnd.push(cadaProjeto)
                break
            default:
                projetosOutros.push(cadaProjeto)
                break
        }

    }

    return(
        <div className="projectsContainer" id='ProjetosSection'>
            <div className="tituloProjects">
                <h1>Projetos</h1>
                <h2>Confira meus melhores projetos</h2>
            </div>
            
            <ul className='listaProjetos'>
                
                <h6>BACK-END</h6>
                <div className="projetosBackEnd">
                    {projetosBackEnd.map((projeto: any) =>  
                        <li key={projeto.id}>
                            <Projeto
                                projeto={projeto}
                            />
                        </li>
                        
                    )}
                </div>

                <h6>FRONT-END</h6>
                <div className="projetosFrontEnd">
                    {projetosFrontEnd.map((projeto: any) =>  
                        <li key={projeto.id}>
                            <Projeto
                                projeto={projeto}
                            />
                        </li>
                        
                    )}
                </div>

                <h6>Outro projetos</h6>
                <div className="projetosOutros">
                    {projetosOutros.map((projeto: any) =>  
                        <li key={projeto.id}>
                            <Projeto
                                projeto={projeto}
                            />
                        </li>
                        
                    )}
                </div>
                
            </ul>

        </div>
    )
}