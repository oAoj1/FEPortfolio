import './Header.css'
import MenuResponsivo from './MenuResponsivo'

export default function Header(){

    const opcoesMenuHeader = [
        'Home',
        'Projetos',
        'Skills',
        'Certificados',
        'SobreMim'
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
                        {navegarMenu(opcoes)}
                    </li>
                ))}
            </ul>

            <MenuResponsivo/>
        </header>
    )
}