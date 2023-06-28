import './Skills.css'
import api from '../../../services/api'
import { useState,useEffect } from 'react'
import { BiRightArrowAlt,BiLeftArrowAlt } from 'react-icons/bi'
import { BsArrowBarDown } from 'react-icons/bs'

export default function Skill(){

    const rank = [
        {
            nivel:'s',
            qualificacao:'muito bom'
        },
        {
            nivel:'a',
            qualificacao:'bom'
        },
        {
            nivel:'b',
            qualificacao:'ok'
        },
        {
            nivel:'c',
            qualificacao:'razoavél'
        },
        {
            nivel:'d',
            qualificacao:'iniciante'
        }
    ]

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
        <div className="skillsWraper" id='SkillsSection'>
            <div className="skillsContainer">
                <h2> <span>Skills</span> </h2>
                <h3>A seguir, veja as minhas principais habilidades técnicas e socioemocionais</h3>

                <h4 className='titleRank'>
                    Rank das habilidades <BsArrowBarDown/>
                </h4>
                <ul className='rankList'>
                    {rank.map(nivel => (
                        <li key={nivel.nivel}>
                            <h5 className='nivel'>
                                {nivel.nivel}
                            </h5>
                            <h6 className='qualificacao'>
                                {nivel.qualificacao}
                            </h6>
                        </li>
                    ))}
                </ul>
                
                <div className="hardSkillsContainer">
                    <span className='tituloHardSkills'>
                        <BiRightArrowAlt/> 
                        <h3>Hard Skills</h3>
                    </span>

                    <ul className='hardSkillsList'>
                        {hard.map((skill:any) => (
                            <li key={skill._id}>
                                <h5>{skill.rank}</h5>
                                <h4>{skill.habilidade}</h4>
                            </li>
                        ))}    
                    </ul>
                </div>

                <div className="softSkillsContainer">
                    <span className="tituloSoftSkills">
                        <h3>Soft Skills</h3>
                        <BiLeftArrowAlt/>
                    </span>

                    <ul className='softSkillsList'>
                        {soft.map((skill:any) => (
                            <li key={skill._id}>
                                <h5>{skill.rank}</h5>
                                <h4>{skill.habilidade}</h4>
                            </li>
                        ))}    
                    </ul>
                </div>

            </div>

        </div>
    )

}