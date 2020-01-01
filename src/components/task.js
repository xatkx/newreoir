import React from 'react';



class Task extends React.Component {

    botonStyle = () => {
        return {
        border: 'none',
        borderRadius: "2px",
        background: "gray",
        color: "#fff",
        padding: "10px"
    }}

    styleChange = () => {
        return {
            width: "80%",
            textAlign: "center",
            color:this.props.task.done ? "green": "blue",
            padding: "10px",
            background: "#efefff",
            margin: "15px auto",
            borderRdius: "5px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
            
        
      
        }
    }


    render(){

        const {task} = this.props
        return (
            <div  style={this.styleChange()} key={task.id}>
                <p>{task.task}</p>
                <sub>{task.descripcion}</sub>
                <input type='checkbox' />
                <input type='button' value='enter' style={this.botonStyle()}/>
            </div>
        )
    }
}

export default Task;
