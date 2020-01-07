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
    this.setState( {
      task: [...this.state.task, newTask]
    })
    console.log(this.state.task)
  }

  deletTask = id => {
      this.setState({
        task: this.state.task.filter(elem => elem.id !== id)
      })
  }

  checkTask = id => {

    const newTask = this.state.task.map(elem => {
      if (elem.id === id)
      {
        elem.done = !elem.done
      }  
      return elem;
    })

    this.setState({
      task: newTask 
    })
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
      <ListTask task={this.state.task} deletTask={this.deletTask} check={this.checkTask}/> 
    </div>
      )
  }
}

export default App;
