import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import UpdateAccount from './CreateAccount'

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
    status:true
  };

  handleOpen = () => {
      if( this.props.Account===null){
        //   alert('check box firtst')
        this.setState({
            status:false
        })
        this.setState({open: true});
      }else{
          this.setState({
            status:true
        })
        this.setState({open: true});
      }
    
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    if(this.state.status===false){
            return (
      <div>
        <RaisedButton label="Update" primary={true} onTouchTap={this.handleOpen} />
        
        <Dialog
          title={'Wrong Step'}
          actions={actions[0]}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        Please choose the data first
        </Dialog>
      </div>
    );

    }else{
            return (
      <div>
        <RaisedButton label="Update" primary={true} onTouchTap={this.handleOpen} />
        
        <Dialog
          
         
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <UpdateAccount Account={this.props.Account} CloseModal={this.handleClose}/>
        </Dialog>
      </div>
    );
    }

  }
}
