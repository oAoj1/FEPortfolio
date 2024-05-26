import './AboutMe.css'
import api from '../../../services/api'
import { useState,useEffect } from 'react'

export default function AboutMe(){

    const [aboutMe,setAboutMe] = useState<any>([])

    useEffect(() => {
        async function mostrarSobreMim(){
            const response = await api.get('/aboutme')
            const data = await response.data

            setAboutMe(data)
            
        }  

        mostrarSobreMim()
        
    },[])

    return(
        <div className="aboutmeContainer" id='SobreMimSection'>
            <div className="tituloAboutme">
                <h1>Sobre mim</h1>
                <h2>Conheça um pouco mais sobre minha pessoa e minha carreira</h2>
            </div>

            <ul className="listaAboutme">
                {aboutMe.map((about:any) => (
                    <li key={about._id}>
                        <div className="segundaDescricao">
                            <div className="cargo">
                                <h2>Cargo atual</h2>
                                <p>{about.cargoAtual}</p>
                            </div>
                            <div className="cursando">
                                <h2>Cursando</h2>
                                <p>{about.cursando}</p>
                            </div>
                            <div className="interesse">
                                <h2>Interesse</h2>
                                <p>{about.interesse}</p>
                            </div>
                            <div className="trabalhando">
                                <h2>Trabalhando</h2>
                                <p>{about.trabalhando}</p>
                            </div>
                        </div>

                        <div className="primeiraDescricao">
                            <div className="biografia">
                                <h2>Biografia</h2>
                                <p>{about.biografia}</p>
                            </div>
                            <div className="experiencia">
                                <h2>Experiência</h2>
                                <p>{about.experiencia}</p>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}