import ReactDOM from 'react-dom'
import React from 'react'
import './Style.css';

const name = "Naim And Rana"
const msg = <p>Welcome to {name} React Site!! </p>

ReactDOM.render(
    msg,
    document.getElementById("root"));
/*
    let counter = 0 
    function show() {
        counter++;
    const mesg = <p>{counter}</p>;
    ReactDOM.render(
        mesg,
        document.getElementById("root")
    );
        
    }
setInterval(show,2000);
*/

///There are two types of Components
//1-functional component  2- class component
//here is functional component example 

function HelloWorld() {
    return <div>Willkommen auf {name} Seite.</div>
}