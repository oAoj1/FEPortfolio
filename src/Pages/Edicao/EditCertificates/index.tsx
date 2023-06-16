import './EditCertificates.css'
import { useEffect,useState } from 'react'
import api from '../../../services/api'
import './EditCertificates.css'
import ComponentCertificate from './ComponentCertificate'
import { Link } from 'react-router-dom'

export default function EditCertificates(){

    const [certificatesList,setCertificatesList] = useState<any>([])

    useEffect(() => {
        async function mostrarCertificados(){
            const response = await api.get('/certificates')
            const data = await response.data

            setCertificatesList(data)
        }

        mostrarCertificados()

    },[])

    return(
        <div className="editCertificatesContainer">
            
            <div className="titleButtonsContainer">
                <Link to='/edit'>
                    <button>Voltar para painel</button>
                </Link>
                
                <Link to='/edit/certificates/add'>
                    <button>Adicionar certificados</button>
                </Link>

            </div>

            <ul>
                {certificatesList.map((certificates:any) => (
                    <li key={certificates._id}>
                        <ComponentCertificate
                            id={certificates._id}
                            curso={certificates.curso}
                            plataforma={certificates.plataforma}
                            link={certificates.linkCertificado}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}