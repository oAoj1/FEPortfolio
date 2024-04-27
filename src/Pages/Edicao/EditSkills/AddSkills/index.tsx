import './AddSkills.css'
import { useState } from 'react'
import api from '../../../../services/api'
import { Link, useNavigate } from 'react-router-dom'

export default function AddSkills(){

    const navigate = useNavigate()
    const [dadosSkills,setDadosSkills] = useState<any>({
        skill:'',
        habilidade:'',
    })

    async function enviarSkill(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        api.post('/skill', dadosSkills)
            .then((() => {
                alert('Skill adicionada com sucesso!')
                navigate('/edit/skill')
            }))
            .catch((err:any) => {
                alert('Erro ao adicionar skill')
                console.log(err)
                
            })
    }

    return(
        <div className="addSkillsContainer">
            <Link to='/edit/skill'>
                <button>
                    Voltar para skills
                </button>
            </Link>

            <form onSubmit={enviarSkill}>
                <input 
                    required
                    type="text" 
                    placeholder="Adicionar habilidade"
                    onChange={e => setDadosSkills({
                        ...dadosSkills, habilidade:e.target.value
                    })}
                />
                <input 
                    required
                    type="text" 
                    placeholder="Adicionar skill"
                    onChange={e => setDadosSkills({
                        ...dadosSkills, skill:e.target.value
                    })}
                />
                <button>Adicionar</button>
            </form>
        </div>
    )
}