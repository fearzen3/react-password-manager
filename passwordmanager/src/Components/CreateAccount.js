import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'
import {Redirect } from 'react-router'


import {addAccount, editAccount} from '../Actions/AccountAction'

const style = {
  margin: 12,
};

const syle2 = {
  color: "red"
}

class Home extends Component {  
    constructor(props){
        super(props)
        
    this.state={
        title:'CREATE ACCOUNT',
        id:'',
        url:'',
        username:'',
        password:'',
        createdat:'',
        status:false,
        warning:[]
    }
}

  componentDidMount(){
    if(this.props.Account!==undefined){
      this.setState({
        title:'EDIT ACCOUNT',
        id:this.props.Account.id,
        url:this.props.Account.url,
        username:this.props.Account.username,
        password:this.props.Account.password,
        createdat:this.props.Account.createdat
      })
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
        let warn=[]
        if(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(this.state.url)){
        }else{
          warn.push('wrong URL')
        }

        if(/^(?=.*[a-z])/.test(this.state.password)){
        }else{
          warn.push('at least one lower case')
        }

        if(/^(?=.*[A-Z])/.test(this.state.password)){
        }else{
          warn.push('at least one upper case')
        }

        if(/^(?=.*\d)/.test(this.state.password)){
        }else{
          warn.push('at least one digit number')
        }
         
         if(/[*@!#%&$()^~{}]+/.test(this.state.password)){
        }else{
          warn.push('at least one special character')
        }
        
          if(/.{5,}/.test(this.state.password)){
        }else{
          warn.push('at least 5 character')
        }


        if(warn.length!==0){
            this.setState({
            warning: warn
          })

        }else if(this.state.id===''){
          this.props.addAccount(this.state.url,this.state.username,this.state.password)
          this.setState({
            status:true
          })
        }else{
          this.props.editAccount(this.state.id,this.state.url,this.state.username,this.state.password,this.state.createdat)
          this.props.CloseModal()
        }
  }

  render() {
    
    if(this.state.status===false){
    return (
        <div>
        <h1>{this.state.title}</h1>
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
    {this.state.warning.map((warn,index)=>{
      return(
        <p key={index} style={syle2}>{warn}</p>
      )
    })}
    <RaisedButton label="SAVE" primary={true} style={style} onClick={()=>this.handleClick()}/>
        </Card>
        </div>
    )
    }else{
      return (<Redirect to="/"/>)
    }

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addAccount:(url,username,password)=>{
        dispatch(addAccount(url,username,password))
    },
    editAccount:(id,url,username,password,createdat)=>{
      dispatch(editAccount(id,url,username,password,createdat))
    }
  }
}

export default connect(null,mapDispatchToProps)(Home);









