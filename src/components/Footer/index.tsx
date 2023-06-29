import './Footer.css'
import { ImLinkedin2 } from 'react-icons/im'
import { VscGithubAlt } from 'react-icons/vsc'

export default function Footer(){

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

    return(
        <footer>
             <div className="footerContent">
                <h1 className='tituloFooter'>
                    <img src='https://i.im.ge/2023/06/29/0yq9Q1.JM2.png' alt='JM'/>
                </h1>

                <ul className='socialMediasFooter'>
                    {opcoesSocialMediasHeader.map((social:any) => (
                        <li key={social.name}>
                            <a href={social.link} target='_blank'>
                                {social.logo}    
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}