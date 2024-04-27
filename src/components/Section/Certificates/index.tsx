import './Certificates.css'
import api from '../../../services/api'
import { useState,useEffect } from 'react'

import { FaLink } from "react-icons/fa";

export default function Certificates(){

    const [certificates,setCertificates] = useState<any>([])

    useEffect(() => {
        async function mostrarCertificados(){
            const response = await api.get('/certificates')
            const data = await response.data

            setCertificates(data)
        }

        mostrarCertificados()
        
    }, [])

    return(
        <div className="certificatesContainer" id='CertificadosSection'>
            <div className="tituloCertificados">
                <h1>Certificados</h1>
                <h2>Confira minhas certificações dos cursos que realizei</h2>
            </div>

            <ul className="listaCertificados">
                {certificates.map((certificados:any) => (
                    <li key={certificados._id}>
                        <div className="tituloLI">
                            <h2>{certificados.curso}</h2>
                            <h3>{certificados.plataforma}</h3>
                        </div>
                        <div className="linkCertificado">
                            <a 
                                href={certificados.linkCertificado} 
                                target="_blank"
                            >
                                <FaLink 
                                    title={`Certificado de ${certificados.curso}`}
                                />
                            </a>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="circuloContainer">
                <span className='circulo'></span>
            </div>
        </div>
    )
}