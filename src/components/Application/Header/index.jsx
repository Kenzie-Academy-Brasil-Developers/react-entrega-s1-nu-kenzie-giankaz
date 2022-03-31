import logo from './nuLogo.svg'
import './style.css'

export default function Header ({setStarted}) {

    const handleLogout = () => {
        console.log('hi')
       setStarted(false)
    }

    return (
        <>
        <img src={logo} alt="Logo Nu Kenzie" className="homeLogo"/>
        
        
        <button className="logout" onClick={handleLogout}>Início</button>
        </>
    )
}