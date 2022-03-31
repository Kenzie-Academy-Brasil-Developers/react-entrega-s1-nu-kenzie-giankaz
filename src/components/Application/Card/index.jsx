import trash from './trash.svg'
import './style.css'

export default function Card () {


    return (
        <li key="" className="card">
            <div className="info">
                    <p className="infoDes">Salário-Mês Dezembro</p>
                    <span className="infoType">Entrada</span>
            </div>
            <div className="totalDel">
                    <p>R$ <span className="infoValue">6.660,00</span></p>
                    <button><img src={trash} alt="" /></button>
            </div>
       </li>
    )
}