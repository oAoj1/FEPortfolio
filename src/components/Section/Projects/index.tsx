import './Projects.css'
import { useEffect,useState } from 'react'

export default function Projects(){

    const [projects,setProjects] = useState<any>([])

    useEffect(() => {
        async function mostrarProjetos(){
            const response = await fetch('https://api.github.com/users/oAoj1/repos')
            const data = await response.json()

            setProjects(data)
        }

        mostrarProjetos()

    },[])

    return(
        <div className="projectsWraper" id='ProjetosSection'>
            <div className="projectsContainer" >
                
                <div className="tituloProjetosWraper">
                    <h2> <span>Projetos</span> </h2>
                    <h3>Veja alguns dos meus principais projetos pessoais que desenvolvi ao longo dos meus meses de prática</h3>
                </div>

                <ul className='projectsList'>
                    {projects.map((projects:any) => (
                        <li key={projects.id}>
                            <h4>{projects.name}</h4>
                            <h5>{projects.description}</h5>
                            <div className="links">
                                <a target='_blank' href={projects.html_url}>GitHub</a><br />

                                {projects.homepage.length > 1 ? 
                                <a target="_blank" href={projects.homepage}>Site</a> : ''}
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}