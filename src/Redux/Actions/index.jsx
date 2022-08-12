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

export const addTodo=(data)=>{
    return{
        type:'ADD_TODO',
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo=(id)=>{
    return{
        type:'DELETE_TODO',
        id:id
    }
}

export const removeTodo=()=>{
    return{
        type:'REMOVE_TODO',
       
    }
}