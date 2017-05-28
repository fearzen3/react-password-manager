
import axios from 'axios'
import moment from 'moment'

export function addAccount(url,username,password){
          let now = moment();
        let createdat = now.format("D MMMM YYYY, h:mm:ss a")
      return dispatch =>{
    axios.post('http://localhost:3004/accounts',{
        url,
        username,
        password,
        createdat
    })
    .then(function(response){
        dispatch({
    type : "ADD",
    payload: {
        url,
        username,
        password,
        createdat
    }
  })
    })
  }
}

export function initAccount(){
      return dispatch => {
    axios.get('http://localhost:3004/accounts/')
    .then(function(response){
      dispatch({
          type : "INIT",
          payload: response.data
        })
    })
  }
}

export function deleteAccount(id){
      return dispatch => {
    axios.delete(`http://localhost:3004/accounts/${id}`)
    .then(function(response){
      dispatch({
    type : "DELETE",
    payload: id
  })
    })
  }
}

export function editAccount(id,url,username,password,createdat){
    let now = moment();
        let updatedat = now.format("D MMMM YYYY, h:mm:ss a")


        return dispatch => {
    axios.put(`http://localhost:3004/accounts/${id}`,{
            url,
      username,
      password,
      createdat,
      updatedat
    })
    .then(function(response){
      dispatch({
    type : "EDIT",
    payload: {
      id,
      url,
      username,
      password,
      createdat,
      updatedat
    }
  })
    })
  }



}