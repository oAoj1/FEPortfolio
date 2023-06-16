import { Link } from 'react-router-dom'
import './ComponentCertificates.css'
import api from '../../../../services/api'

export default function ComponentCertificate({curso,plataforma,link,id}:any){

    async function excluirCertificado(id:any){
        const conf = window.confirm('Deseja excluir certificado?')

        if(conf){
            await api.delete('/certificates/'+id)
            .then(() => {
                alert('Certificado excluido com sucesso, recarregue a página')
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    return(
        <div className="componentCertificateContainer">
            
            <h4>{plataforma}</h4>
            <h2>{curso}</h2>

            <a target='_blank' href={link}>
                Link certificado
            </a>

            <div className="buttonsContainer">
                <Link to={`/edit/certificates/editing/${id}`}>
                    <button>Editar</button>
                </Link>

                <button onClick={() => excluirCertificado(id)}>
                    Excluir
                </button>
            </div>

        </div>
    )
}