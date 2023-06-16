import './auth.css'
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLogin } from 'react-icons/ai'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return(
    <button 
      className="logarBotao" 
      onClick={() => loginWithRedirect()}
    >
      <AiOutlineLogin/>
      Entrar
    </button>
  )
}

export default LoginButton