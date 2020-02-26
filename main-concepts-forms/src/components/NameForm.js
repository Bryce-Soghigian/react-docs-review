import React from 'react';
import Swal from 'sweetalert2'


export default class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }
        handleChange(e) {
            this.setState({value: e.target.value})
        }
        handleSubmit(e){
            Swal.fire(
                'The name below was submitted!',
                `${this.state.value}`,
                'success'
              )
            e.preventDefault()
        }
        //Using an input in the docs instead of a button for handlesubmit. not sure why
        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value = {this.state.value} onChange={this.handleChange}/>
                    <input type = "submit" value="Submit"/>
                </form>
            )
        }
}
