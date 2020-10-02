import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPaperclip } from '@fortawesome/free-solid-svg-icons'


function App(){
    return (

        <div className="container">
            <div className="headerbox">
               <h2>Inicio</h2>
            </div>
            <div className="imgbox">
                <img className="userImg" src="https://i.pinimg.com/originals/72/93/ef/7293ef1502ee628da42ab265968773bc.jpg" />
            </div>
            <div className="writebox">
                <p>Que esta pasando?</p>
            </div>
            <div className="footerbox">
               <a href="https://twitter.com/"> <FontAwesomeIcon className="paperclip" icon={faPaperclip} /></a>
            
               <button className="twittearButton">Twittear</button>
            </div>
            
            
        </div>
        
    )

}

export default App;