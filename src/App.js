import home from './components/StartPage/home.svg'
import Button from './components/StartPage'
import Application from './components/Application';
import {useState} from 'react'
import './App.css';

function App() {

const [start, setStarted] = useState(false)




  return (
    <div className="App">
        { start === false ?
        <main>
              <section className="start">
                  <img src={home}  alt="home" className="startImg"/>
                  <Button setStarted={setStarted}/>
            </section>
       </main>
            :
            <Application setStarted={setStarted}/>
         }
     
    </div>
  );
}

export default App;
