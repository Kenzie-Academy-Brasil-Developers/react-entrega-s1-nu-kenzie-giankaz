import './style.css'
import {useState} from 'react'



export default function Form ({setHave, setList, list, setTotal, total, setCopy}) {

    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('Entrada')
    const [counter, setCounter] = useState(0)


    const handleList = () => {
        setList([...list, {description: description, value: value, type: type, id: counter}])
        setCopy([...list, {description: description, value: value, type: type, id: counter}])

        type === 'Entrada' ? setTotal(total + Number(value)) : setTotal(total - Number(value))
        setCounter(counter + 1)
        setDescription('')
        setValue('')
    }

    return (
        <form className="homeForm" onSubmit={(event) => event.preventDefault()}>
                <h3>Descrição</h3>
                <input type="text" placeholder="Digite aqui sua descrição" onChange={(event) => setDescription(event.target.value)} value={description}/>
                <span>Ex. Compra de roupas</span>
         <div className="holder">
                <div className="valor">
                        <h3>Valor</h3>
                        <input type="number" className="inputValor" placeholder="1" onChange={(event) => setValue(event.target.value)} value={value}/>
                        <label htmlFor="inputValor">R$</label>
                </div>
                <div className="tipo">
                    <h3>Tipo de valor</h3>
                    <select onChange={(event) => setType(event.target.value)} value={type} defaultValue="Entrada">
                        <option value="Entrada" className="entrada">Entrada</option>
                        <option value="Despesa" className="saida">Despesa</option>

                    </select>
                </div>
          </div>
          <button type="submit" className="formSubmit" onClick={() => {
              handleList()
              setHave(true)
              }}>Inserir Valor</button>
        </form>
    )
}