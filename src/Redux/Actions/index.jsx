export const Incr=(num)=>{
    return{
        type:"INCREMENT",
        newNumb:num
    }
}

export const Decr=()=>{
    return{
        type:"DECREMENT",
     
    }
}

export const Mult=(num)=>{
    return{
        type:"MULTIPY",
        mul:num
    }
}

export const Div=()=>{
    return{
        type:"DIVIDE",
     
    }
}