import './style.css';
import Header from './Header'
import Form from './Form'
import Total from './Total'
export default function Application ({setStarted}) {

    return (
        <>
            <header className="homeHeader">
                <Header setStarted={setStarted}/>
            </header>

            <main className="homeMain">
                <section className="form">
                    <Form  />
                    <Total />
                </section>  

                <section className="listSection">

                </section>
            </main>
        

        
        </>
    )
}