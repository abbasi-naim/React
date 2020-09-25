import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Style.css';


const name = "Naim And Rana"
const msg = <p>Welcome to {name} React Site!! </p>

// ReactDOM.render(
//     msg,
//     document.getElementById("root"));
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
      return <h3>Hello {this.state.name}</h3>
      }
  }

  const re = <Stat/>;

  ReactDOM.render(
      re,
      document.getElementById("root")
  );

  //setState 
/*
  class Counter extends React.Component{
      state = {
          counter : 0 
      }
      increment = () => {
          this.setState({counter: this.state.counter+1});
      }

      render(){
          return <div>
              <p>{this.state.counter}</p>
              <button onClick={this.increment} >Click to Increment</button>
          </div>
      }
  }

  const el = <Counter/>;

  ReactDOM.render(
      el,
      document.getElementById("root")
  );
*/

  //Hook
 /* function Hook() {
    const [name, setName] = useState("DelaWare");
  
    return <h1>Welcome to {name} University.</h1>;
  }
  
  const elm = <Hook />; 
  ReactDOM.render(
    elm, 
    document.getElementById('root')
  );
*/
  // rewrite counter app using hook
//   function Counter() {
//     const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     alert("Number of clicks: " + counter);
    //   });
// the useEffect() method will run only if count changes.
    /*useEffect(() => {
        //do something
      }, [counter]);  */
  
    // function increment() {
    //   setCounter(counter+1);
    // }
    //Event Handler -- button  you should write function name in curley braces
//     return <div>
//     <p>{counter}</p>
//     <button onClick={increment}>Increment</button> 
//     </div>;
//   }
  
  
//   const el = <Counter />; 
//   ReactDOM.render(
//     el, 
//     document.getElementById('root')
//   );


  //LifeCycle Method   1-componentDidMount 2-componentWillUnmount
  //componentDidUpdate 
 /* componentDidMount() {
    this.setState({counter: 42});
  }*/

  //componentDidUpdate
  /*componentDidUpdate() {
    alert("Number of clicks: " + this.state.counter);
  }*/


  //Handling User Input -Example 
/*
  function Converter() {
      const [km,setKm]= useState(0);

      function handleChange(e) {
          setKm(e.target.value);
      }
      function convert(km) {
          return (km/1.609).toFixed(2);
          
      }

      return <div>
          <input type="text" value={km} onChange={handleChange}  />
    <p>km is {convert(km)} miles</p>
      </div>
      
  }

  const resu = <Converter/>;

  ReactDOM.render(
      resu,
      document.getElementById("root")
  );

*/
  //Example Event Handler 
/*
  function AddForm() {
    const [sum, setSum] = useState(0);
    const [num, setNum] = useState(0);
  
    function handleChange(e) {
      setNum(e.target.value);
    }
  
    function handleSubmit(e) {
      setSum(sum + Number(num));
      e.preventDefault();
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="number" value={num} onChange={handleChange} />
        <input type="submit" value="Add" />
        <p> Sum is {sum} </p>
      </form>
    );
  }
  
  const el = <AddForm />;
  ReactDOM.render(el, document.getElementById("root"));
  */

//Rendering A list
/*
const arr = ["X" , "Y" , "Z" , "W"];
const elemen = <MyList data = {arr} />;

function MyList(props) {
    const arr = props.data;
    const ListItem = arr.map((val) => 
    <li>{val}</li>
    );
return <ul>{ListItem}</ul>;    
}

ReactDOM.render(
    elemen,
    document.getElementById("root")
);
*/

//Example - create Contact Manager

function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
    
  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = [];

ReactDOM.render(
  <ContactManager data={contacts} />, 
  document.getElementById('root')
);