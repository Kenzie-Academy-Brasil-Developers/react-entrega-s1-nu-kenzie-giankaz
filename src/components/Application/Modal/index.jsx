 import './style.css'
 export default function Modal ({msg, setModal}) {

    return (
        <div className="modal">
            <div className="modalDiv">
                <p>{msg}</p>
                <button onClick={() => setModal(false)}>Ok</button>
            </div>
      </div>
    )
 }