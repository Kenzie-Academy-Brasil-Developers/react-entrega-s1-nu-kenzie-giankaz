import './style.css';
import Header from './Header'
import Form from './Form'
import Total from './Total'
import Card from './Card'
import NoCard from './NoCard'
export default function Application ({setStarted}) {

    return (
        <>
            <header className="homeHeader">
                <Header setStarted={setStarted}/>
            </header>

            <main className="homeMain">
                <section className="form">
                    <Form  />
                   {/*  <Total /> */}
                </section>  

                <section className="listSection">
                <div className="listHeader">
                    <p>Resumo Financeiro</p>
                    <div className="filters">
                        <button className="filter btnTodos">Todos</button>
                        <button className="filter btnEntrada">Entrada</button>
                        <button className="filter btnDespesa">Despesas</button>
                    </div>
                </div>
                <ul> 
                   <NoCard />
                    {/* <Card /> */}
                </ul>
                </section>
            </main>
        

        
        </>
    )
}