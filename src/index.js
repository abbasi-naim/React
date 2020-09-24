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

/*
function HelloWorld() {
    return <h1>Willkommen auf {name} Seite.</h1>
}
const helloMsg = <HelloWorld/>
ReactDOM.render(
    helloMsg,
    document.getElementById("root")
);
*/

// here is example of class component

class Hello extends React.Component{
    render(){
    return <h3>Welcome to {name} website!!</h3>;
    }
};

const helMsg = <Hello/>;

ReactDOM.render(
    helMsg,
    document.getElementById("root")
);

//Props   passing argument to function

function Test (props) {
return <p>{"A"+props.title}</p>;
}
const testMsg = <Test title="Z"/>;
ReactDOM.render(
    testMsg,
    document.getElementById("root")
);

//component using component

function Comp() {
    return <h5>
        <Test title="B" />
        <Test title="C"/>
    </h5>
    
};

//Props in class component

class Mein extends React.Component{
    render(){
    return <p>Hello , {this.props.name}</p>;
    }
}

//Create Shopping List  Example
/*
function List() {
    return <div>
    <Item name="Cheese" price="4.50" ></Item>
<Item name="Fruit" price="3.50"></Item>
<Item name="gemuse" price="2.5"></Item>
<Item name="Kleidung" price="59"></Item>
</div>
}

function Item(props) {
    return <div className="item">
    <b>Name:</b> {props.name} <br />
    <b>Price:</b> ريال {props.price}
    </div>;
  }

  const result = <List/>;

  ReactDOM.render(
      result,
      document.getElementById("root")
  );
*/
  //State 
  class Stat extends React.Component{
      state = { 
          name : "Naim"
      }
      render(){
      return <h3>{this.state.name}</h3>
      }
  }

  const re = <Stat/>;

  ReactDOM.render(
      re,
      document.getElementById("root")
  );

