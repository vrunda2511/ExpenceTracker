export const DELETE_TRANSECTION='DELETE_TRANSECTION';
export const ADD_TRANSECTION='ADD_TRANSECTION';
export const SET_ERROR='SET_ERROR';
export const RESET_ERROR='RESET_ERROR';

export const deleteTransectionAction=(id)=>({
    type:DELETE_TRANSECTION,
    payload:{id,error:undefined}
})

export const AddTransectionAction=(transection)=>({
    type:ADD_TRANSECTION,
    payload:transection
    
})
export const seterror=(error)=>({
    type:SET_ERROR,
    payload:error
})
export const reseterror=()=>({
    type:RESET_ERROR,
    payload:{
        error:undefined
    }
})



