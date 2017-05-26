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

import {deleteAccount as DeleteAccount} from '../Actions/AccountAction'

const style = {
  margin: 12,
};


class Home extends Component {  
    constructor(){
        super()
        
    this.state={
        row:null    
    }
}
    
    onRowSelection(key) {


        this.setState({
            row: this.props.accounts[key[0]].id
        })

    }

    handleClick=()=>{

        this.props.DeleteAccount(this.state.row)
    }

  render() {
    return (
        <div>
        <h1>HOME</h1>
        <RaisedButton label="Delete" secondary={true} style={style} onClick={()=>this.handleClick()}/>
          <Table
          
          onRowSelection={this.onRowSelection.bind(this)}
          
          >
    <TableHeader>
      <TableRow>
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
      
          {this.props.accounts.map(account=>(
            <TableRow key={account.id}>
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






