import './style.css'

export default function Total () {

    return (
        <>
        <div className="totalDiv">
            <div className="valor">
                <h3>Valor Total:</h3>
                <span>O valor se refere as entradas</span>
            </div>
            <p>R$ <span className="valorTotal"></span></p>
        </div>
        </>
    )
}