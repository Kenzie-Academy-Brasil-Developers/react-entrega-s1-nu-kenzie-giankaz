import './style.css'
export default function Button ({setStarted}) {

   const isStarted = () => {
       setStarted(true)
   } 

    return (
        <>
        <button onClick={isStarted} className="btn btnHome">Iniciar</button>
        </>
    )
}