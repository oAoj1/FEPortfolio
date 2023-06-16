import './EditingSkills.css'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect,useState } from 'react'
import api from "../../../../services/api"
import { Link } from "react-router-dom"

export default function EditingSkills(){

    const navigate = useNavigate()
    const {id} = useParams()
    const [listaSkills,setListaSkills] = useState<any>([])

    useEffect(() => {
        async function editandoSkill(){
            await api.get('/skill/'+ id)
            .then(res => setListaSkills(res.data))
            .catch(err => console.log(err))

        }

        editandoSkill()

    },[])

    async function enviarAtualizacaoSkill(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        await api.put('/skill/'+ id, listaSkills)
        .then(() => {
            alert('Skill atualizada')
            navigate('/edit/skill')
        })

    }

    return(
        <div className="editingSkillsContainer">

            <Link to='/edit/skill'>
                <button>Voltar para skills</button>
            </Link>

            <form onSubmit={enviarAtualizacaoSkill}>

                <input 
                    required
                    type="text" 
                    placeholder='ID'
                    disabled
                    value={listaSkills._id} 
                />

                <input 
                    required
                    type="text" 
                    placeholder="Editar rank"
                    value={listaSkills.rank}
                    onChange={e => setListaSkills({
                        ...listaSkills,
                        rank:e.target.value
                    })}
                />

                <input 
                    required
                    type="text" 
                    placeholder="Editar habilidade"
                    value={listaSkills.habilidade}
                    onChange={e => setListaSkills({
                        ...listaSkills,
                        habilidade:e.target.value
                    })}
                />

                <input 
                    type="text" 
                    placeholder="Editar skill"
                    value={listaSkills.skill}
                    onChange={e => setListaSkills({
                        ...listaSkills,
                        skill:e.target.value
                    })}
                />

                <button>Atualizar</button>

            </form>
        </div>
    )
}