import React from 'react';
//import propTypes from 'prop-types';
import './App.css';
// components

import ListTask from './components/taskListComponet.js'

import Taskform  from './components/taskForm.js'

//---/>
import tasks from "./sample/task.json";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      task: tasks
    } 
  }

  tranferTask = (newTask) => { 
    console.log(newTask)
    this.setState(elem => {
      elem.task.unshift(newTask)
    })
    console.log(this.state.task)
  }

  listTask = () => {
    return {
        margin: "10px 20% 10px 20%"
    }
  
}
componentDidUpdate(){
  this.render()
}
  render(){
    return (
    <div style={this.listTask()}>
      <Taskform tranferTask={this.tranferTask} />
      <ListTask task={this.state.task}/> 
    </div>
      )
  }
}

export default App;
