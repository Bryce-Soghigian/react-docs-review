import React from 'react';
import Swal from 'sweetalert2'

export default class EssayForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "Write here",
            comment:""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this .handleChange.bind(this);

    }
    handleChange(e) {
        this.setState({value: e.target.value});
        
      }
      handleSubmit(e){
        Swal.fire(
            'The text below was submitted!',
            `${this.state.value}`,
            'success'
          )
        e.preventDefault()
      }
      render(){
          return( 
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <textarea value={this.state.value} placeholder="type here" onChange={this.handleChange}/>
                      <input type="submit" value="Submit"/>
                  </form>

              </div>
          )
      }
}