import React, { Component } from 'react'
class AddNinja extends Component{
    state = {
        name: null,
        age: null,
        belt:null
    }
    handleChange = (e) =>{
        this.setState({//captures the values and assign them to the variables
            [e.target.id]: e.target.value//target is the element your currently on
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state);
        this.props.addNinja(this.state); //to grab the ninja values to display later
    }
    render(){
        return(
            <div className="ninjas">
                <form  onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>


            </div>
        );
    }

}
export default AddNinja;