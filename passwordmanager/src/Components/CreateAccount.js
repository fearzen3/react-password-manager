import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'


import {addAccount} from '../Actions/AccountAction'

const style = {
  margin: 12,
};

class Home extends Component {  
    constructor(){
        super()
        
    this.state={
        url:'',
        username:'',
        password:'',
        status:'false'
    }
}

      handleInputChange=(event)=> {
    const target = event.target;
    const value = event.target.value
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }
     
      handleClick=()=>{
    this.props.addAccount(this.state.url,this.state.username,this.state.password)
  }

  render() {
    return (
        <div>
        <h1>CREATE ACCOUNT</h1>
        <Card>
                <TextField
                name='url'
      hintText="Hint Text"
      floatingLabelText="URL"
            value={this.state.url} 
      onChange={this.handleInputChange}
    /><br />
        <TextField
        name='username'
      hintText="Hint Text"
      floatingLabelText="Username"
            value={this.state.username} 
      onChange={this.handleInputChange}
    /><br />
        <TextField
        name='password'
      hintText="Hint Text"
      floatingLabelText="Password"
            value={this.state.password} 
      onChange={this.handleInputChange}
      type="password"
    /><br />
    <RaisedButton label="SAVE" primary={true} style={style} onClick={()=>this.handleClick()}/>
        </Card>
        </div>


    );


  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addAccount:(url,username,password)=>{
        dispatch(addAccount(url,username,password))
    }
  }
}

export default connect(null,mapDispatchToProps)(Home);









