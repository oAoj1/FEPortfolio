import './Edicao.css'
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from '../../auth/login'
import LogoutButton from '../../auth/logout'
import Loading from '../../auth/loading'

export default function PaginaEdicao(){
    
    const { isAuthenticated, isLoading } = useAuth0()

    if (isLoading) {
        return <Loading/>
    }

    return(
        <div className='paginaEdicaoContainer'>
            
            <div className="usuario">
                {isAuthenticated ? 
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
                    </div>  : 

                <div style={{
                    display:"flex",
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'column'
                }}>
                    <LoginButton/>
                    <h1>Editar Portfólio</h1>
                    <h2>Entre com seu Email para editar seu Portfólio</h2>
                </div>}

            </div>

            <LogoutButton/> 
               
        </div>
    )
}