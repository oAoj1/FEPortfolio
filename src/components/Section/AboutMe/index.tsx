import './AboutMe.css'
import api from '../../../services/api'
import { useState,useEffect } from 'react'
import { GiBookCover,GiRank3 } from 'react-icons/gi'
import { GrUserWorker } from 'react-icons/gr'
import { BsFillLightbulbFill } from 'react-icons/bs'

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
        <div className="aboutMeWraper" id='SobreMimSection'>
            <div className="aboutMeContainer" >
                
                <h2> <span>Sobre mim</span> </h2>
                <h3>Conheça mais sobre mim</h3>
                
                <ul className='aboutMeList'>
                    {aboutMe.map((about:any)=> (
                        <li key={about._id}>

                            <div className='aboutInfoContainer'>
                                <div className='about'>
                                    <GiRank3/>
                                    <h4>Cargo atual</h4>
                                    <span>{about.cargoAtual}</span>
                                </div>

                                <div className='about'>
                                    <GiBookCover/>
                                    <h4>Cursando</h4>
                                    <span>{about.cursando}</span>
                                </div>

                                <div className='about'>
                                    <GrUserWorker/>
                                    <h4>Trabalhando</h4>
                                    <span>{about.trabalhando}</span>
                                </div>

                                <div className='about'>
                                    <BsFillLightbulbFill/>
                                    <h4>Interesse profissional</h4>
                                    <span>{about.interesse}</span>
                                </div>
                            </div>

                            <div className='aboutWraper'>
                                <h5>Biografia</h5>
                                <span>{about.biografia}</span>
                            </div>

                            <div className="aboutWraper">
                                <h5>Expêriencia</h5>
                                <span>{about.experiencia}</span>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}