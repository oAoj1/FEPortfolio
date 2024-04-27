import './Skills.css'
import api from '../../../services/api'
import { useState,useEffect } from 'react'

/* hard logos */
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaJava, } from "react-icons/fa";
import { SiMongodb, SiTypescript  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";

/* soft logos */
import { RiEmpathizeFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { FaBoxes } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { TbTransform } from "react-icons/tb";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { PiStudent } from "react-icons/pi";

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
                <div className="soft">
                    <h2>Soft</h2>
                    <ul className='softSkills'>
                        {soft.map((soft:any) => (
                            <li key={soft._id}>
                                <h4>{soft.habilidade}</h4>
                                <span>
                                    {
                                        soft.habilidade == 'Empatia' ? <RiEmpathizeFill/>
                                        : soft.habilidade == 'Criatividade' ? <GiBrain/>
                                        : soft.habilidade == 'Organização' ? <FaBoxes/>
                                        : soft.habilidade == 'Persuasão' ? <RiSpeakFill/>
                                        : soft.habilidade == 'Resiliência' ? <TbTransform />
                                        : soft.habilidade == 'Dedicação' ? <GiWeightLiftingUp />
                                        : soft.habilidade == 'Liderança' ? <IoIosPeople />
                                        : soft.habilidade == 'Disciplina' ? <PiStudent />
                                        : ''
                                    }
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="hard">
                    <h2>Hard</h2>
                    <ul className='hardSkills'>
                        {hard.map((hard:any) => (
                            <li key={hard._id}>
                                <h4>{hard.habilidade}</h4>
                                <span>
                                    {
                                    hard.habilidade == 'JavaScript' ? <BiLogoJavascript/> 
                                    : hard.habilidade == 'React.JS' ? <FaReact/> 
                                    : hard.habilidade == 'Node.JS' ? <FaNodeJs/>
                                    : hard.habilidade == 'MongoDB' ? <SiMongodb/> 
                                    : hard.habilidade == 'HTML' ? <FaHtml5/>
                                    : hard.habilidade == 'CSS' ? <FaCss3Alt/>
                                    : hard.habilidade == 'TypeScript' ? <SiTypescript/>
                                    : hard.habilidade == 'Python' ? <FaPython/> 
                                    : hard.habilidade == 'Java' ? <FaJava/>
                                    : hard.habilidade == 'MySql' ? <GrMysql/>
                                    : hard.habilidade == 'React Native' ? <TbBrandReactNative/>
                                    : ''
                                    }
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )

}