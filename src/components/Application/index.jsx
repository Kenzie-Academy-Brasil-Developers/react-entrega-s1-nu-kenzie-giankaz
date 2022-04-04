import './style.css';
import './Card/style.css'
import trash from './Card/trash.svg'
import Header from './Header'
import Form from './Form'
import Total from './Total'
import NoCard from './NoCard'
import {useState} from 'react'

export default function Application ({setStarted}) {

    const [have, setHave] = useState(false)
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)
    const [copy, setCopy] = useState([])


    const removeFromList = (item) => {
        const newList = list.filter((value) => {
            return value.id !== item.id
        })
        setList(newList)
        setCopy(newList)

        if (newList.length === 0) {
            setHave(false)
        }
        item.type === 'Entrada' ? setTotal(total - Number(item.value)) : setTotal(total + Number(item.value))

    }
    const filterEntrada = () => {
        const newList = list.filter((value) => {
            return value.type === 'Entrada'
        })
        setCopy(newList)

        if (newList.length === 0) {
            setHave(false)
        }  else {
            setHave(true)
        }
    }
    const filterDespesa = () => {
        const newList = list.filter((value) => {
            return value.type === 'Despesa'
        })

        setCopy(newList)

        if (newList.length === 0) {
            setHave(false)
        } else {
            setHave(true)
        }
    }

    const filterTodos = () => {
        setCopy(list)
    }
    return (
        <>
            <header className="homeHeader">
                <Header setStarted={setStarted}/>
            </header>

            <main className="homeMain">
                <section className="form">
                    <Form setHave={setHave}setList={setList} list={list} setTotal={setTotal} total={total} setCopy={setCopy}/>
                   {have && <Total total={total}/>}
                 
                </section>  

                <section className="listSection">
                <div className="listHeader">
                    <p>Resumo Financeiro</p>
                    <div className="filters">
                        <button className="filter btnTodos" autoFocus onClick={filterTodos}>Todos</button>
                        <button className="filter btnEntrada" onClick={filterEntrada}>Entrada</button>
                        <button className="filter btnDespesa" onClick={filterDespesa}>Despesas</button>
                    </div>
                </div>
                <ul>
                   { have ?
                   <>
                      { copy.map((value) => {

                        return (<li key={value.id} className={value.type === 'Entrada' ? "in" : "out"}>
                            <div className="info">
                                    <p className="infoDes">{value.description}</p>
                                    <span className="infoType">{value.type}</span>
                            </div>
                            <div className="totalDel">
                                    <p>R$ <span className="infoValue">{value.value}</span></p>
                                    <button><img src={trash} alt="" onClick={() => removeFromList(value)}/></button>
                            </div>
                       </li>
                      )
                    })}
                    </>
                    : 
                    <NoCard />
                   }
                </ul>
                </section>
            </main>
        

        
        </>
    )
}