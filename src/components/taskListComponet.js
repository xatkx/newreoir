import React from "react";
import propTypes from 'prop-types';
// components
import Task from './task';


class ListTask extends React.Component {

    render() {
        this.tasks = this.props.task;
        return (
            <div>
                {this.tasks.map(elem => <Task key={elem.id+Math.random()} task={elem}/>)}
            </div>
        )
    }
}

ListTask.propTypes = {
    task: propTypes.array.isRequired
}

export default ListTask;