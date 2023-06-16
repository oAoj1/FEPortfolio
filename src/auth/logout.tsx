import './auth.css'
import { useAuth0 } from "@auth0/auth0-react";
import { BiLogOutCircle } from 'react-icons/bi'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button 
      className="sairBotao" 
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      <BiLogOutCircle/>
      Sair
    </button>
  )
};

export default LogoutButton