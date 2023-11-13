import './Edicao.css'
import { Link } from "react-router-dom"

export default function PaginaEdicao(){
    
    return(
        <div className='paginaEdicaoContainer'>
            
            <div className="usuario">
                    <div className='editContainer'>
                        <div className="titleContainer">
                            <Link to='/'>
                                <button className='backPortfolio'>
                                    Voltar para Portfólio
                                </button>
                            </Link>

                        </div> 

                        <div className="redirectPagesButtonsContainer">
                            <Link to='/edit/skill' >
                                <button>Skills</button>
                            </Link>

                            <Link to='/edit/certificates' >
                                <button>Certificados</button>
                            </Link>

                            <Link to='/edit/aboutme'>
                                <button>Sobre mim</button>
                            </Link>

                        </div>
                    </div>

            </div>

        </div>
    )
}