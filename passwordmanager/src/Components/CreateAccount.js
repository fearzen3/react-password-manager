import React, { Component } from 'react';
import {Card} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'
import {Redirect } from 'react-router'
import Checkbox from 'material-ui/Checkbox';


import {addAccount, editAccount} from '../Actions/AccountAction'

const style = {
  margin: 12,
};

const syle2 = {
  color: "red"
}

const syle4 = {
  textAlign : 'center',
}

const styles3 = {
  block: {
    textAlign : 'left',
    maxWidth: 300,
       margin: 'auto',
    // width: '50%',
    // border: '3px solid green',
    padding: '10px',
  },
  checkbox: {
    marginBottom: 16,
    
  },
};

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
        // warning:[],
        onespecial:false,
        onelowcase:false,
        oneuppercase:false,
        onedigit:false,
        fivechar:false,
        righturl:false
    }
}

  componentWillMount(){
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

  componentDidMount(){
      this.setState({
        onedigit:this.checkPassDigit(this.state.password),
        oneuppercase:this.checkUpCase(this.state.password),
        onelowcase:this.checkLowCase(this.state.password),
        onespecial:this.checkOneSpecial(this.state.password),
        fivechar:this.checkPassLength(this.state.password),
        righturl:this.checkURLString(this.state.url)
      })
  }
    
    checkPassDigit(value){
      return /^(?=.*\d)/.test(value)
    }
    checkUpCase(value){
      return /^(?=.*[A-Z])/.test(value)
    }
    checkLowCase(value){
      return /^(?=.*[a-z])/.test(value)
    }
    checkOneSpecial(value){
      return /[*@!#%&$()^~{}]+/.test(value)
    }
    checkPassLength(value){
      return /.{5,}/.test(value)
    }
    checkURLString(value){
      return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value)
    }

    handleInputChange=(event)=> {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });

    if(name==='password'){
      this.setState({
        onedigit:this.checkPassDigit(value),
        oneuppercase:this.checkUpCase(value),
        onelowcase:this.checkLowCase(value),
        onespecial:this.checkOneSpecial(value),
        fivechar:this.checkPassLength(value)
      })
    }
    if(name==='url'){
      this.setState({righturl:this.checkURLString(value)})
    }

  }
     
      handleClick=()=>{
        // let warn=[]
        // if(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(this.state.url)){
        // }else{
        //   warn.push('wrong URL')
        // }

        // if(/^(?=.*[a-z])/.test(this.state.password)){
        // }else{
        //   warn.push('at least one lower case')
        // }

        // if(/^(?=.*[A-Z])/.test(this.state.password)){
        // }else{
        //   warn.push('at least one upper case')
        // }

        // if(/^(?=.*\d)/.test(this.state.password)){
        // }else{
        //   warn.push('at least one digit number')
        // }
         
        //  if(/[*@!#%&$()^~{}]+/.test(this.state.password)){
        // }else{
        //   warn.push('at least one special character')
        // }
        
        //   if(/.{5,}/.test(this.state.password)){
        // }else{
        //   warn.push('at least 5 character')
        // }


        // if(warn.length!==0){
        //     this.setState({
        //     warning: warn
        //   })

        // }else if(this.state.id===''){
        //   this.props.addAccount(this.state.url,this.state.username,this.state.password)
        //   this.setState({
        //     status:true
        //   })
        // }else{
        //   this.props.editAccount(this.state.id,this.state.url,this.state.username,this.state.password,this.state.createdat)
        //   this.props.CloseModal()
        // }

        if(this.state.fivechar===true 
        &&this.state.onelowcase===true
        &&this.state.oneuppercase===true
        &&this.state.onespecial===true
        &&this.state.onedigit===true
        &&this.state.righturl===true){
          if(this.state.id===''){
          this.props.addAccount(this.state.url,this.state.username,this.state.password)
          this.setState({
            status:true
          })
          }else{
          this.props.editAccount(this.state.id,this.state.url,this.state.username,this.state.password,this.state.createdat)
          this.props.CloseModal()
        }
        }
  }

  render() {
    
    if(this.state.status===false){
    return (
        <div >
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
    {/*{this.state.warning.map((warn,index)=>{
      return(
        <p key={index} style={syle2}>{warn}</p>
      )
    })}*/}
    <div style={styles3.block}>
    <Checkbox
    checked={this.state.onedigit}
      disabled={true}
      label='at least one digit number'
      style={styles3.checkbox}
    />
        <Checkbox
    checked={this.state.onelowcase}
      disabled={true}
      label='at least one lower case'
      style={styles3.checkbox}
    />
        <Checkbox
    checked={this.state.oneuppercase}
      disabled={true}
      label='at least one upper case'
      style={styles3.checkbox}
    />
        <Checkbox
    checked={this.state.onespecial}
      disabled={true}
      label='at least one special character'
      style={styles3.checkbox}
    />
        <Checkbox
    checked={this.state.fivechar}
      disabled={true}
      label='at least 5 character'
      style={styles3.checkbox}
    />
            <Checkbox
    checked={this.state.righturl}
      disabled={true}
      label='URL Format'
      style={styles3.checkbox}
    />
    </div>
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









