import './Header.css'
import MenuResponsivo from './MenuResponsivo'
import { ImLinkedin2 } from 'react-icons/im'
import { VscGithubAlt } from 'react-icons/vsc'

export default function Header(){

    const opcoesMenuHeader = [
        'Home',
        'Projetos',
        'Skills',
        'Certificados',
        'SobreMim'
    ]

    const opcoesSocialMediasHeader = [
        {
            name:'github',
            logo:<VscGithubAlt/>,
            link:'https://github.com/oAoj1'
        },
        {
            name:'linkedin',
            logo:<ImLinkedin2/>,
            link:'https://www.linkedin.com/in/joão-marques-52776123b/?trk=public_profile-settings_edit-profile-content&originalSubdomain=br'
        }
    ]

    function navegarMenu(componente:any){
        const scrollID = `${componente}Section`

        function scrollMenu(){
            document.getElementById(scrollID)?.scrollIntoView({behavior:'smooth'})
        }

        return(
            <ul key={componente} className='menuHeader'>
                <li>
                    <button onClick={scrollMenu}>
                        {componente}
                    </button>
                </li>
            </ul>
        )
    }

    return(
        <header>
            <div className="logoHeader">
                <span> João <i>Marques</i> </span>
            </div>
            
            <ul className='opcoesMenuHeader'>
                {opcoesMenuHeader.map(opcoes => (
                    <li key={opcoes}>
                        <button>
                            {opcoes}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    )
}