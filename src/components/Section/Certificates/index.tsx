import './Certificates.css'
import api from '../../../services/api'
import { useState,useEffect } from 'react'

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
        <div className="certificatesWraper" id='CertificadosSection'>
            <div className="certificatesContainer" >
                <h2> <span>Certificados</span> </h2>
                <h3>Veja as minhas conclusões dos meus cursos</h3>

                <ul className='certificatesList'>
                    {certificates.map((certificates:any) => (
                        <li key={certificates._id}>
                            <h4>{certificates.curso}</h4>
                            <h5>{certificates.plataforma}</h5>
                            <a target='_blank' href={certificates.linkCertificado}>
                                Link certificado
                            </a>
                        </li>
                    ))}            
                </ul>
            </div>                        

        </div>
    )
}