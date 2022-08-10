const initialState=0

const UpDown=(state=initialState,action)=>{

    switch(action.type){
        case 'INCREMENT': return state=state+action.newNumb
        case 'DECREMENT': return state=state-1
        default: return state;
    }
}

export default UpDown