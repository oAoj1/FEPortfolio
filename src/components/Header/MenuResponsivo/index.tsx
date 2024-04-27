import './MenuResponsivo.css'
import { useState } from 'react'
import { ImLinkedin2 } from 'react-icons/im'
import { VscGithubAlt } from 'react-icons/vsc'
import { RxHamburgerMenu } from "react-icons/rx"
import { MdClose } from "react-icons/md"

export default function MenuResponsivo(){

    const [isOpen,setIsOpen] = useState(false)

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

    function scrollMenu(componente:any){
        const scrollID = `${componente}Section`
        document.getElementById(scrollID)?.scrollIntoView({behavior:'smooth'})
    }

    return(
        <>
            <RxHamburgerMenu 
                className='menuResponsivoHamburguer' 
                onClick={() => setIsOpen(!isOpen)}
            />

            {isOpen == false ? '' : 
                <aside className='menuResponsivo'>
                    <div className="fecharMenuResponsivo">
                        <MdClose 
                            onClick={() => setIsOpen(false)} 
                            className='fecharMenuResponsivoHamburguer'
                        />
                    </div>

                    <div className="opcoesMenuResponsivo">
                        <ul className='menuHeaderResponsivo'>
                            {opcoesMenuHeader.map((opcoes:string) => (
                                <li key={opcoes}>
                                    <button onClick={() => scrollMenu(opcoes)}>
                                        {opcoes}
                                    </button>
                                </li>
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

                </aside>

            }
            
        </>
    )
}