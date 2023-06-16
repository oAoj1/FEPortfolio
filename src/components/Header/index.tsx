import './Header.css'
import { AiOutlineMenu } from 'react-icons/ai'
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
            <div className="headerContent">
                
                <h1 className='tituloHeader'>
                    <img src='JM.png' alt='JM'/>
                </h1>

                <div className='menuResponsivo'>

                    <span className='menuHamburguer'>
                        <AiOutlineMenu/>
                    </span>

                    <ul className='menuHeaderResponsivo'>
                        {opcoesMenuHeader.map((opcoes:string) => (
                            navegarMenu(opcoes)
                        ))}
                    </ul>

                    <ul className='socialMediasHeaderResponsivo'>
                        {opcoesSocialMediasHeader.map((social:any) => (
                            <li key={social.name}>
                                <a href={social.link} target='_blank'>
                                    {social.logo}    
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>

                <ul className='menuHeader'>
                    {opcoesMenuHeader.map((opcoes:string) => (
                        navegarMenu(opcoes)
                    ))}
                </ul>

                <ul className='socialMediasHeader'>
                    {opcoesSocialMediasHeader.map((social:any) => (
                        <li key={social.name}>
                            <a href={social.link} target='_blank'>
                                {social.logo}    
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
        </header>
    )
}