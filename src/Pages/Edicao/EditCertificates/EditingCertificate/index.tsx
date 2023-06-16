import './EditingCertificate.css'
import { useNavigate, useParams } from "react-router-dom"
import React, { useEffect,useState } from 'react'
import api from "../../../../services/api"
import { Link } from "react-router-dom"

export default function EditingCertificates(){

    const navigate = useNavigate()
    const {id} = useParams()
    const [listaCertificates,setListaCertificates] = useState<any>([])

    useEffect(() => {
        async function editandoCertificate(){
            await api.get('/certificates/'+ id)
            .then(res => setListaCertificates(res.data))
            .catch(err => console.log(err))

        }

        editandoCertificate()

    },[])

    async function enviarAtualizacaoCertificates(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        await api.put('/certificates/'+ id, listaCertificates)
        .then(() => {
            alert('Certificado atualizado com sucesso')
            navigate('/edit/certificates')
        })

    }

    return(
        <div className="editingCertificatesContainer">
            
            <Link to='/edit/certificates'>
                <button>voltar para certificados</button>
            </Link>

            <form onSubmit={enviarAtualizacaoCertificates}>

                <input 
                    type="text" 
                    placeholder={listaCertificates._id}
                    disabled
                    value={listaCertificates._id} 
                />

                <input 
                    type="text" 
                    placeholder="Editar curso"
                    value={listaCertificates.curso}
                    onChange={e => setListaCertificates({
                        ...listaCertificates,
                        curso:e.target.value
                    })}
                />

                <input 
                    type="text" 
                    placeholder="Editar plataforma"
                    value={listaCertificates.plataforma}
                    onChange={e => setListaCertificates({
                        ...listaCertificates,
                        plataforma:e.target.value
                    })}
                />

                <input 
                    type="text" 
                    placeholder="Editar link certificado"
                    value={listaCertificates.linkCertificado}
                    onChange={e => setListaCertificates({
                        ...listaCertificates,
                        linkCertificado:e.target.value
                    })}
                />

                <button>Atualizar</button>

            </form>
        </div>
    )
}