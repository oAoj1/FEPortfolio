import './Skills.css'
import api from '../../../services/api'
import { useState,useEffect } from 'react'

export default function Skill(){

    const [soft,setSoft] = useState<any>([])
    const [hard,setHard] = useState<any>([])

    useEffect(() => {
        async function mostrarHardSkills(){
            const response = await api.get('/skill/filtrar?skill=hard')
            const data = response.data

            setHard(data)
        }

        async function mostrarSoftSkills(){
            const response = await api.get('/skill/filtrar?skill=soft')
            const data = response.data

            setSoft(data)
        }

        mostrarHardSkills()
        mostrarSoftSkills()
        
    },[])

    return(
        <div className="SkillsContainer" id='SkillsSection'>
            <div className="tituloSkills">
                <h1>Skills</h1>
                <h2>Veja minhas principais habilidades</h2>
            </div>

            <div className="todasSkills">
                <ul className='softSkills'>
                    <h2>Soft</h2>
                    {soft.map((soft:any) => (
                        <li key={soft._id}>
                            <h4>{soft.habilidade}</h4>
                        </li>
                    ))}
                </ul>
                
                <ul className='hardSkills'>
                    <h2>Hard</h2>
                    {hard.map((hard:any) => (
                        <li key={hard._id}>
                            <h4>{hard.habilidade}</h4>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )

}