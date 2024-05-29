import './Projects.css'

import { BiLogoTypescript,BiLogoJavascript  } from "react-icons/bi";
import { FaJava, FaGithub  } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function Projeto(props:any){

    return(
        <>
            <div className="tituloLI">
                <h5>
                    {props.projeto.language == 'TypeScript' ? <BiLogoTypescript  title={props.projeto.language}/> 
                    :props.projeto.language == 'JavaScript' ? <BiLogoJavascript title={props.projeto.language}/>
                    :props.projeto.language == 'Java' ? <FaJava title={props.projeto.language}/> 
                    :props.projeto.language}
                </h5>

                <h3>{props.projeto.name}</h3>
                <h4>{props.projeto.description}</h4>
            </div>
            
            <div className="linksLI">
                <span>
                    {props.projeto.html_url.length > 1 ? 
                        <a 
                            href={props.projeto.html_url}
                            target='_blank'
                            title={`GitHub de ${props.projeto.name} -> ${props.projeto.html_url}`}
                        >
                            <button>GitHub<FaGithub/></button>
                        </a>
                    : ''}
                </span>
                <span>
                    {props.projeto.homepage ? 
                        <a 
                            href={props.projeto.homepage}
                            target='_blank'
                            title={`Pagina de ${props.projeto.name} -> ${props.projeto.homepage}`}
                        >
                            <button>Página <CgWebsite/></button>
                        </a> 
                    : ''}
                </span>
            </div>
        </>
    )
}