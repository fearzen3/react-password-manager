
import axios from 'axios'


export function addAccount(url,username,password){
      return dispatch =>{
    axios.post('http://localhost:3004/accounts',{
        url,
        username,
        password
    })
    .then(function(response){
        dispatch({
    type : "ADD",
    payload: {
        url,
        username,
        password
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

export function editAccount(id){
  return{
    type : "MARKED",
    payload: id
  }
}