import './MenuResponsivo.css'
import { useState } from 'react'
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

    window.addEventListener('resize', fecharMenu)

    function fecharMenu(){
        setIsOpen(false)
    }

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
                <>  
                    <div 
                        className='overlay'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                    </div>
                    <aside 
                    className='menuResponsivo'>
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
                                        <button 
                                            onClick={() => {
                                                scrollMenu(opcoes)
                                                setIsOpen(!isOpen)
                                            }}
                                        >
                                            {opcoes}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </aside>
                </>

            }
            
        </>
    )
}