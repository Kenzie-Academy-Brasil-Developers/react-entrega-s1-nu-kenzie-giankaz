import './style.css'

export default function Form () {

    return (
        <form className="homeForm">
                <h3>Descrição</h3>
                <input type="text" placeholder="Digite aqui sua descrição"/>
                <span>Ex. Compra de roupas</span>
         <div className="holder">
                <div className="valor">
                        <h3>Valor</h3>
                        <input type="number" className="inputValor" placeholder="1"/>
                        <label htmlFor="inputValor">R$</label>
                </div>
                <div className="tipo">
                    <h3>Tipo de valor</h3>
                    <select>
                        <option value="entrada" className="entrada">Entrada</option>
                        <option value="saida" className="saida">Despesa</option>

                    </select>
                </div>
          </div>
          <button type="submit" className="formSubmit">Inserir Valor</button>
        </form>
    )
}