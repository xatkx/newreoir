import React from "react";

// components
import Task from './task'

class ListTask extends React.Component {
    render() {
        this.tasks = this.props.data;
        return (
            this.tasks.map(elem => <Task task={elem}/>)
        )
    }
}


export default ListTask;