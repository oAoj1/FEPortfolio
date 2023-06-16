import './EditingAboutMe.css'
import { useEffect, useState } from 'react'
import api from '../../../../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function EditingAboutMe(){

    const {id} = useParams()
    const navigate = useNavigate()
    const [listaAboutMe,setListaAboutMe] = useState<any>([])

    useEffect(() => {
        async function editandoAboutMe(){
            await api.get('/aboutme/' + id)
            .then(res => setListaAboutMe(res.data))
            .catch(err => console.log(err))
        }

        editandoAboutMe()

    },[])
    
    async function enviarAtualizacaoSobreMim(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        await api.put('/aboutme/'+id,listaAboutMe)
        .then(() => {
            alert('Sobre mim atualizado com sucesso')
            navigate('/edit/aboutme')
        })
    }

    return(
        <div className="editingAboutMeContainer">

            <div className="titleButtonsContainer">
                <Link to='/edit/aboutme'>
                    <button>Voltar para painel</button>
                </Link>
            </div>

            <form onSubmit={enviarAtualizacaoSobreMim}>

                <h3>Interesse profissional</h3>
                <textarea 
                    onChange={e => setListaAboutMe({
                        ...listaAboutMe,interesse:e.target.value
                    })}
                    value={listaAboutMe.interesse}
                />

                <hr className='linhaAboutMe'/> 

                <h3>Cursando</h3>
                <textarea 
                    onChange={e => setListaAboutMe({
                        ...listaAboutMe,cursando:e.target.value
                    })}
                    value={listaAboutMe.cursando}
                />

                <hr className='linhaAboutMe'/>

                <h3>Cargo atual</h3>
                <textarea 
                    onChange={e => setListaAboutMe({
                        ...listaAboutMe,cargoAtual:e.target.value
                    })}
                    value={listaAboutMe.cargoAtual}
                />

                <hr className='linhaAboutMe'/>

                <h3>Biografia</h3>
                <textarea 
                    onChange={e => setListaAboutMe({
                        ...listaAboutMe,biografia:e.target.value
                    })}
                    value={listaAboutMe.biografia}
                />

                <hr className='linhaAboutMe'/>

                <h3>Expêriencia</h3>
                <textarea 
                    value={listaAboutMe.experiencia}
                    onChange={e => setListaAboutMe({
                        ...listaAboutMe,experiencia:e.target.value
                    })}
                />

                <button>Atualizar</button>
            </form>
        </div>
    )
}