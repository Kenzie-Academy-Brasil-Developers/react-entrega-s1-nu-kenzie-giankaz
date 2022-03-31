import NoCardImg from './NoCard.svg'
import rec from './rec.svg'
import './style.css'
export default function NoCard () {


    return (
      <>
      <h2 className="empty">Você ainda não possui nenhum lançamento</h2>
      <img src={NoCardImg} alt="" className="emptyImg" />


      </>
    )
}