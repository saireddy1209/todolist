import React, { Component } from "react";
class Register extends Component {
  constructor(props) { 
    super(props); 
  
    // Setting up state 
    this.state = { 
      userInput : "", 
      list:[] 
    } 
  } 
  
  // Set a user input value 
  updateInput(value){ 
    this.setState({ 
      userInput: value, 
    }); 
  } 
  
  // Add item if user input in not empty 
  addItem(){ 
    if(this.state.userInput !== '' ){ 
      const userInput = { 
  
        // Add a random id which is used to delete 
        id :  Math.random(), 
  
        // Add a user value to list 
        value : this.state.userInput 
      }; 
  
      // Update list 
      const list = [...this.state.list]; 
      list.push(userInput); 
  
      // reset state 
      this.setState({ 
        list, 
        userInput:""
      }); 
    } 
  } 
  
  // Function to delete item from list use id to delete 
  deleteItem(key){ 
    const list = [...this.state.list]; 
  
    // Filter values and leave value which we need to delete 
    const updateList = list.filter(item => item.id !== key); 
  
    // Update list in state 
    this.setState({ 
      list:updateList, 
    }); 
  
  } 
  render() {
    return <div className="todo-list-main-container">
   <div><hr/>TODO LIST 
      </div>

     <hr/> 
    <div> 
<div>

<label>
  <select
            Projectvalue = {this.state.userInput} 
      onChange = {item => this.updateInput(item.target.value)} >
              <option value="">Please select project...</option>
              <option value="project1">Project 1</option>
              <option value="project2">Project 2</option>
              <option value="project3">Project 3</option>
            </select> 
    
          </label>
    {/* <input
      placeholder="add item . . . "
   
      value = {this.state.userInput} 
      onChange = {item => this.updateInput(item.target.value)} 
    
    />  */}
    
      <button
       
        onClick = {()=>this.addItem()} 
        > 
        ADD 
      </button> 
  
</div>
</div>
<div>
 <div> 
 
   {this.state.list.map(item => {return( 

      <div
        onClick = { () => this.deleteItem(item.id) }>
        {item.value} 
      </div>

   )})} 
  </div> 
</div>
</div>;
  }
}
export default Register;


