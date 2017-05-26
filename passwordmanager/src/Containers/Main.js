import React, { Component } from 'react';
import {Route} from 'react-router-dom';


import Home from './Home.js'
import CreateAccount from '../Components/CreateAccount'



class Main extends Component {
  render() {
    return (


      <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/createaccount" component={CreateAccount}/>
      </div>

    )
  }
}





export default Main;
