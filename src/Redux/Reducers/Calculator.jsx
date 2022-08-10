const initialState=5

const Calculator=(state=initialState,action)=>{

    switch(action.type){
        case 'MULTIPY': return state*action.mul
        case 'DIVIDE': return state/2
        default: return state;
    }
}

export default Calculator