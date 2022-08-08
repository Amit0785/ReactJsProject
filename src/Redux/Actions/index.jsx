export const increment=(num)=>{
    return{
        type:"INCREMENT",
        newNumb:num
    }
}

export const decrement=()=>{
    return{
        type:"DECREMENT",
     
    }
}

export const Multiply=(num)=>{
    return{
        type:"MULTIPY",
        mul:num
    }
}

export const Divide=()=>{
    return{
        type:"DIVIDE",
     
    }
}