import React from 'react';



class Task extends React.Component {

    botonStyle = () => {
        return {
        background: 'red',
        border: 'none',
        borderRadius: "2px",
        color: "#fff",
        padding: "10px"
    }}

    styleChange = () => {
        return {
            width: "80%",
            textAlign: "center",
            color:this.props.task.done ? "blue": "#a90000",
            padding: "10px",
            background: "#efefff",
            margin: "15px auto",
            borderRdius: "5px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
            
        
      
        }
    }


    render(){

        const {task, deletTask, check} = this.props
        
        return (
            <div  style={this.styleChange()} key={task.id}>
                <p>{task.task}</p>
                <sub>{task.descripcion}</sub>
                <input type='checkbox' onChange={check.bind(this,task.id)}/>
                <input type='button' value='eliminar' style={this.botonStyle()} onClick={deletTask.bind(this,task.id)}/>
            </div>
        )
    }
}

export default Task;
