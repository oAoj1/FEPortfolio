import './ComponentAboutMe.css'
import { Link } from 'react-router-dom'

export default function ComponentAboutMe({
    biografia,
    experiencia,
    id,
    cargoAtual,
    cursando,
    interesse
}:any){
    return(
        <div className='componentAboutMeContainer'>
            <div className="contentsAboutMe">

                <h3>Interesse</h3>
                <span>{interesse}</span> 

                <hr className='linhaAboutMe'/>

                <h3>Cursando</h3>
                <span>{cursando}</span> 

                <hr className='linhaAboutMe'/>

                <h3>Cargo atual</h3>
                <span>{cargoAtual}</span> 

                <hr className='linhaAboutMe'/>

                <h3>Biografia</h3>
                <span>{biografia}</span> 

                <hr className='linhaAboutMe'/>

                <h3>Expêriencia</h3>
                <span>{experiencia}</span> 

            </div>

            <Link to={`/edit/aboutme/editing/${id}`}>
                <button>Editar</button>
            </Link>
        </div>
    )
}