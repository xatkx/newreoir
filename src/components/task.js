import React from 'react';
import PropTypes from 'prop-types'

class Task extends React.Component {

    styleChange = () => {
        return {
            width: "80%",
            color:this.props.task.done ? "green": "red",
            padding: "10px",
            background: "gray"
        
      
        }
    }


    render(){

        const {task} = this.props
        return (
            <div  style={this.styleChange()} key={task.id}>
                <p>{task.task}</p>
                <sub>{task.descripcion}</sub>
                <input type='checkbox' />
                <input type='button' value='enter' />
            </div>
        )
    }
}

Task.prototype = {

    task: PropTypes.object.isRequired
}

export default Task;