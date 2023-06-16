/* import api from '../../../../services/api' */
import { Link } from 'react-router-dom'
import './ComponentSkill.css'
import api from '../../../../services/api'

export default function ComponentSkill({rank,habilidade,id}:any){

    async function excluirSkill(id:any){
        const conf = window.confirm('Deseja excluir skill?')

        if(conf){
            await api.delete('/skill/' + id)
            .then(() => {
                alert('Skill excluida com sucesso, recarregue a página')
            })
            .catch(err => {
                console.log(err)
            })
        }
        
    }

    return(
        <div className="componentSkillContainer">

            <div className="propertiesContainer">
                <h3>{rank}</h3>
                <h2>{habilidade}</h2>
            </div>

            <div className="buttonsContainer">
                <Link to ={`/edit/skill/editing/${id}`}>
                    <button>
                        Editar
                    </button>
                </Link>
                
                <button onClick={() => excluirSkill(id)}>
                    Excluir
                </button>
            </div>

        </div>
    )
}