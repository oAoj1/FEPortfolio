import './AddCertificates.css'
import api from '../../../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AddCertificates(){

    const navigate = useNavigate()
    const [dadosCertificados,setDadosCertificados] = useState<any>({
        curso:'',
        plataforma:'',
        linkCertificado:''
    })

    async function enviarCertificado(){
        await api.post('/certificates', dadosCertificados)
        .then(() => {
            alert('Certificado adicionado com sucesso')
            navigate('/edit/certificates')
        })

        .catch(err => {
            console.log(err)
        })

    }

    return(
        <div className="addCertificatesContainer">
            <Link to='/edit/certificates'>
                <button>voltar para certificados</button>
            </Link>
            <form onSubmit={enviarCertificado}>
                <input 
                    type="text" 
                    placeholder="Adicionar curso"
                    onChange={e => setDadosCertificados({
                        ...dadosCertificados,curso:e.target.value
                    })}
                />

                <input 
                    type="text" 
                    placeholder="Adicionar plataforma"
                    onChange={e => setDadosCertificados({
                        ...dadosCertificados,plataforma:e.target.value
                    })}
                />

                <input 
                    type="text" 
                    placeholder="Adicionar link do certificado"
                    onChange={e => setDadosCertificados({
                        ...dadosCertificados,linkCertificado:e.target.value
                    })}
                />

                <button>Adicionar</button>
            </form>
        </div>
    )
}