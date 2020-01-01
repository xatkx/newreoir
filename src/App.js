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

  listTask = () => {
    return {
        margin: "10px 20% 10px 20%"
    }
}
  render(){
    return (
    <div style={this.listTask()}>
      <Taskform />
      <ListTask task={this.state.task}/> 
    </div>
      )
  }
}

export default App;
