import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux'

import Main from './Containers/Main'
import Header from './Components/Header'
import {initAccount} from './Actions/AccountAction'

const stylingapp={
    textAlign: "center",
    
  }
class App extends Component {

      componentDidMount(){
      this.props.initAccount()
}

  render() {
    return (
      <MuiThemeProvider>
      <div  style={stylingapp}>
        <Router>
      <div>
        <Header />
        <Main />
      </div>
      </Router>
      </div>
      </MuiThemeProvider>
    );

    

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    initAccount:()=>{
      dispatch(initAccount())
    }
    
  }
}


export default connect(null,mapDispatchToProps)(App);
