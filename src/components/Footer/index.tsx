import './Footer.css'

import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer(){
    return(
        <footer>
            <button
                onClick={() => document.getElementById('HomeSection')?.scrollIntoView  ({behavior:'smooth'})}
            > 
            <h1>J<span>M</span></h1>
            </button>
            <div className="socialMediasFooter">
                <a href="http://github.com/oAoj1" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="http://www.linkedin.com/in/joaomarques711" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
            </div>
        </footer>
    )
}
