import './EditSkills.css'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import api from "../../../services/api"
import ComponentSkill from "./ComponentSkill"

export default function EditSkills(){

    const [softSkillsList,setSoftSkillsList] = useState<any>([])
    const [hardSkillsList,setHardSkillsList] = useState<any>([])

    useEffect(() => {
        
        async function mostrarSoftSkills(){
            const response = await api.get('/skill/filtrar?skill=soft')
            const data = await response.data

            setSoftSkillsList(data)
        }

        async function mostrarHardSkills(){
            const response = await api.get('/skill/filtrar?skill=hard')
            const data = await response.data

            setHardSkillsList(data)
        }

        mostrarSoftSkills()
        mostrarHardSkills()
    
    },[])

    return(
        <div className="editSkillsContainer">

            <div className="titleButtonsContainer">
                <Link to='/edit'>
                    <button>
                        Voltar para painel
                    </button>
                </Link>

                <Link to='/edit/skill/add'>
                    <button>
                        Adicionar skill
                    </button>
                </Link>

            </div>

            <div className="listSkillsContainer">
                <ul>
                    <h4>Soft Skills</h4>

                    {softSkillsList.map((skills:any) => (
                        <li key={skills._id}>
                            <ComponentSkill
                                id={skills._id}
                                rank={skills.rank}
                                habilidade={skills.habilidade}
                            />
                        </li>
                    ))} 
                </ul>

                <ul>
                    <h4>Hard Skills</h4>

                    {hardSkillsList.map((skills:any) => (
                        <li key={skills._id}>
                            <ComponentSkill
                                id={skills._id}
                                rank={skills.rank}
                                habilidade={skills.habilidade}
                            />
                        </li>
                    ))} 
                </ul>

            </div>

        </div>
    )
}