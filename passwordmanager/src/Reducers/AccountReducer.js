import moment from 'moment'

const AccountReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD': 
        let now = moment();
        let time = now.format("D MMMM YYYY, h:mm:ss a")
        let account = {
            url:action.payload.url,
            username:action.payload.username,
            password:action.payload.password,
            id: (state[(state.length)-1].id)+1,
            createdat:time,
            updatedat:''
        }
        state = [...state, account]
        break;
        case 'EDIT':
        break;
        case 'DELETE':
              state = state.filter(account=>{
        return account.id!==action.payload
      })
        break;
        case 'INIT':
        state = action.payload
        break;
        default: return state
    }
    return state
}

export default AccountReducer