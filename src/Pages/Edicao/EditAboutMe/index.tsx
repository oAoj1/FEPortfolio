import './EditAboutMe.css'
import { useState,useEffect } from 'react'
import api from '../../../services/api'
import { Link } from 'react-router-dom'
import ComponentAboutMe from './ComponentAboutMe'

export default function EditAboutMe(){

    const [aboutMeList,setAboutMeList] = useState<any>([])

    useEffect(() => {
        async function mostrarSobreMim(){
            const response = await api.get('/aboutme')
            const data = await response.data

            setAboutMeList(data)
        }

        mostrarSobreMim()

    },[])

    return(
        <div className="editAboutMeContainer">
            
            <div className="titleButtonsContainer">
                <Link to='/edit'>
                    <button>Voltar para painel</button>
                </Link>
            </div>

            <ul>
                {aboutMeList.map((about:any) => (
                    <li key={about._id}>
                        <ComponentAboutMe
                            id={about._id}
                            biografia={about.biografia}
                            experiencia={about.experiencia}
                            cargoAtual={about.cargoAtual}
                            cursando={about.cursando}
                            interesse={about.interesse}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}