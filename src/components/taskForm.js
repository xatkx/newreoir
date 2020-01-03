import React from 'react';
import  './css.css/style.css'


export default class taskForm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
           
            title: '',
            description: '',
            done: false,
            id: 0
        }
    }


    onSubmit = event => {
        event.preventDefault()

        let task = {}
        task.description = this.state.description
        task.title = this.state.title
        task.done = this.state.done
        task.id = this.state.id
        
        this.props.tranferTask(task)
        
        return false
    }

    onChange = event => {
        
        this.setState({
            
                [event.target.name]: event.target.value
        })
    }

    styleInput = () => { 
        return {
                margin: '9px 0',
                border: 'none',
                borderBottom: '2px solid gray',
                width: '100%'
            }
        
    }

    render(){

        
        return (
            <form className='card' onSubmit={this.onSubmit}>
                <input name='title' style={this.styleInput()} type='text' placeholder='la pampara' onChange={this.onChange}/>
                <br />
                <textarea name='description' style={this.styleInput()} placeholder='descripcion' onChange={this.onChange}></textarea>
                 <br />
                 <input name='done' type="checkbox" onChange={this.onChange}/>
                 <br />
                <input className='btn'  type='submit' value='enter' />
            </form>
        )
    }
}