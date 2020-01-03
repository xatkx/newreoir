import React from 'react';
import  './css.css/style.css'


export default class taskForm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            title: 'lol',
            description: 'lul'

        }
    }


    onSubmit = event => {
        //console.log(event)
        event.preventDefault()
        this.props.tranferTask(this.state.title,this.state.description)
        
        return false
    }

    onChange = event => {
        console.log(event.target.name,event.target.value)

        this.setState({
            [event.target.name]:event.target.value
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
                <input className='btn'  type='submit' value='enter' />
            </form>
        )
    }
}