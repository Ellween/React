import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person'


// New Version Of React

// function App() {

//   const [person, setPerson] = useState({
//     persons : [
//               {name:"Alex" , age : 23},
//               {name:"NAe", age : 21},
//               {name: "aewq" , age : 213},
//             ],
//     otherState : "Other State",
//   });

//   const switchHandler = () => {
//     setPerson({
//       persons : [
//         {name:"MIllenia" , age : 23},
//         {name:"NAe", age : 21},
//         {name: "aewq" , age : 11},
//       ],
//     });
//   } 


//   return ( 
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>  
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         > 
//           Learn React
//         </a>
//         <button onClick={switchHandler}>Switch</button> 
//         <Person name ={person.persons[0].name} age ={person.persons[0].age} ></Person>
//         <Person name ={person.persons[1].name} age ={person.persons[1].age}>This is fcked Up</Person>
//         <Person name ={person.persons[2].name} age ={person.persons[2].age} ></Person>
//       </header>
//     </div>
//   );
//   // return React.createElement('div', {className : 'App'}, React.createElement('h1' , null , 'IM reacr app'), React.createElement('p',null ,  'This is Second Text'));
// }when


// Late Version of React 

class App extends Component {

    state = {
      persons : [
        { id: "a0"  ,name:"Alex" , age : 23},
        { id: "a1" ,name:"NAe", age : 21},
        { id: "a2" ,name: "aewq" , age : 213},
      ],
      otherState : "Some State", 
      show: false,
      
    }


    switchHandler = (newName) => {
      this.setState({
        persons : [
          {name: newName , age : 22},
          {name:"NAe", age : 21},
          {name: "Meow" , age : 213},
        ]
      }); 
    }


    deleteHandler = (index) => {
      const person = [...this.state.persons];
      person.splice(index, 1);
      this.setState({
        persons: person
      })
    }


    onchangeaHandler = (event , id) => 
    { 

      const personIndex  = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value  

      const persons = [...this.state.persons]

      persons[personIndex] = person;

      console.log("aaaa",persons);
      this.setState({
        persons : persons
      }); 
    }

    toggle = () => 
    {
      const showdiv = this.state.show
      this.setState({
        show: !showdiv
      });
    }


  render() {

    const style = {
      backgroundColor: 'green',
      border: '1px solid green',
      fontSize: '18px',
      color: 'white',
      padding: "20px 40px",
      margin: "20px 0px",
      ':hover': {
        backgroundColor: 'yellow',
        color: 'black',
      }
    }


    let person = null

    // if(this.state.show)
    // {
      
    //    person = (
    //     <div>
    //       <Person change = {this.onchangeaHandler} name ={this.state.persons[0].name} age ={this.state.persons[0].age} ></Person>
    //       <Person name ={this.state.persons[1].name} age ={this.state.persons[1].age}>This is fcked Up</Person>
    //       <Person name ={this.state.persons[2].name} age ={this.state.persons[2].age} ></Person>
    //     </div>
    //   );

    // }

    if(this.state.show)
    {
      
       person = (
        <div>
          {this.state.persons.map((person,index)  => {
            return <Person 
            change = {(event) => this.onchangeaHandler(event,person.id)}
            click = {this.deleteHandler.bind(this, index)} 
            name ={person.name} 
            age = {person.age} 
            key ={person.id}
            ></Person>
          })}
        </div>
      );
      

      style.backgroundColor = 'red';
      style.border = '1px solid red';
      style[':hover'] = {
        backgroundColor: 'blue',
        color: 'black',
      }


    }

    const classes = [];

    if(this.state.persons.length <= 2)
    {
      classes.push('red');
    }

    if(this.state.persons.length <=1)
    {
      classes.push('bold');
    }
    
    return (
      <StyleRoot>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className={classes.join(" ")}>
            Edit <code>src/App.js</code> and save to reload.
          </p>  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button style ={style} onClick={this.toggle}>Toggle Div</button>

          {person}

          {/* <button style={style} onClick={this.switchHandler.bind(this, 'Abrakadabara')}>Switch</button>
          { this.state.show ?  : null 
          } */}
        </header>
      </div>
     </StyleRoot>
    );
  }


}


export default Radium(App);
