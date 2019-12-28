import React from 'react';
import './App.css';
// components

import ListTask from './components/taskListComponet.js'
//---/>
import tasks from "./sample/task.json";

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      task: tasks
    }
    
  }

  render(){
    return <div> 
      <ListTask data={this.state.task}/> 
      </div>
  }
}

export default App;
