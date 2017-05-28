

const AccountReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD': 
        let addId=0;
        if(state.length===0){
            addId=1
        }else{
            addId=(state[(state.length)-1].id)+1
        }  

        let account = {
            url:action.payload.url,
            username:action.payload.username,
            password:action.payload.password,
            id: addId,
            createdat:action.payload.createdat,
            updatedat:''
        }
        state = [...state, account]
        break;
        case 'EDIT':
        state = state.map(account=>{
            if(account.id===action.payload.id){
                account.url = action.payload.url
                account.username = action.payload.username
                account.password = action.payload.password
                account.createdat = action.payload.createdat
                account.updatedat = action.payload.updatedat
            }
            return account
        })
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