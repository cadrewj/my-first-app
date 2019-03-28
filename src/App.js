import React, { Component } from 'react';
import Ninjas from './Ninjas';//adding the ninja file to the dom so it can be displayed on screen
import AddNinja from './AddNinja';



class App extends Component {
  state = {
    ninjas : [ //area of ninjas
      {name: "James", age: 29, belt: "Gold",id: 1},
      {name: "MNP", age: 25, belt: "Black",id: 2},
      {name: "Crystral", age: 22, belt: "Brown",id: 3}

    ]
  }
  addNinja = (ninja) =>{ //function to set the values of the new ninja
    console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]; //"let" give you the ability to declare loacally
    //... allows you to copy the old array and add a new feild to whats there (ninja) 
    this.setState({ninjas: ninjas}); // assign the new ninja to the state to update the page
  }
  deleteNinja = (id) =>{
   
  // let ninjas = this.state.ninjas.filter(ninja =>{
  //    return(ninja.id!==id);//if false it filters the ninja out of the array
   // });
   // this.setState({ninjas: ninjas});
    console.log(id);
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        {/*this is how you nest Components*/}
        {/*<Ninjas name="James" age="25" belt="Gold"/>*/}{/*creating props/property names to pass*/}
      
        <Ninjas ninjas={this.state.ninjas}/>{/*used to ouput the ninjas onto the DOM/Html page*/}
        <br/>
        <AddNinja addNinja = {this.addNinja} deleteNinja={this.deleteNinja}/>{/*used to ouput the form Add Ninjas onto the DOM/Html page*/}
        {/*passing the prop to make it possible to delete a ninja
        passing the new ninja in as a prop
        note: the prop contains the new values for the ninja
        */}
      </div>
    );
  }
}

export default App;
