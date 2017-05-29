import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import {deleteAccount as DeleteAccount} from '../Actions/AccountAction'
import UpdateModal from '../Components/UpdateModal'


const style = {
  margin: 12,
};

const styles2 = {
  // display: 'inline-block',
  float:'left',
      // position: 'relative',
    right: '0px',
    width: '300px',
    padding: '10px'
};

const styles3 = {
  display: 'inline-block',
  float:'auto',
      // position: 'relative',
    right: '0px',
    width: '300px',
    padding: '10px'
};

class Home extends Component {  
    constructor(){
        super()
        
    this.state={
      searchbox:'',
      filter:'',
        data:null,
        accountData:null,
        selectedRow:null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}
    
    _onRowSelection(e) {
      console.log(e)
      let rowNumber = e[0]
      let dataId 
      let accData
      if(e.length===0){
        dataId = null
        accData=null
      }else{
        accData = this.props.accounts[e[0]]
        dataId =this.props.accounts[e[0]].id
      }
       
      this.setState({
        id: dataId,
        accountData:accData,
        selectedRow: rowNumber
      })
    }



    handleSubmit=(e)=>{
      e.preventDefault();
      this.setState({
        filter:this.state.searchbox
      })
    }

        handleClickDelete=()=>{
            if(this.state.id!==null){
        this.props.DeleteAccount(this.state.id)
        this.setState({
          selectedRow:null
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

        filterAccount(data){
      let filtering = new RegExp(`${this.state.filter}.*`);
      return data.filter(dat=>{
        return filtering.test((dat.username).toLowerCase())

      })
    }

  render() {
    return (
        <div>
        <h1>HOME</h1>

        
          <form onSubmit={this.handleSubmit} style={styles2} >
           <TextField onChange={this.handleInputChange} name='searchbox'hintText="Search Username"/><br />
        </form>
        <div style={styles3}>

        <UpdateModal Account={this.state.accountData}  />
        <RaisedButton label="Delete" secondary={true} style={style} onClick={()=>this.handleClickDelete()}/>
            </div>
        
          <Table onRowSelection={(e)=>this._onRowSelection(e)}>
    <TableHeader>
      <TableRow  >
        <TableHeaderColumn>URL</TableHeaderColumn>
        <TableHeaderColumn>Username</TableHeaderColumn>
        <TableHeaderColumn>Password</TableHeaderColumn>
        <TableHeaderColumn>CreatedAt</TableHeaderColumn>
        <TableHeaderColumn>UpdatedAt</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
    deselectOnClickaway= {false}
    >
          {this.filterAccount(this.props.accounts).map((account,index)=>(
            <TableRow key={index} selected={this.state.selectedRow === index}>
                <TableRowColumn>{account.url}</TableRowColumn>
                <TableRowColumn>{account.username}</TableRowColumn>
                <TableRowColumn>{account.password}</TableRowColumn>
                <TableRowColumn>{account.createdat}</TableRowColumn>
                <TableRowColumn>{account.updatedat}</TableRowColumn>
            </TableRow>
          ))}
    </TableBody>
  </Table>
  </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    accounts : state.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    DeleteAccount:(id)=>{
      dispatch(DeleteAccount(id))
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);






