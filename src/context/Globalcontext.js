import React,{useReducer} from 'react'
import  Reducer from './AppReducer';
import { deleteTransectionAction, AddTransectionAction, seterror, reseterror } from './AppAction';
const initialState={
    transection:[],
    error:undefined,
};
export const Globalcontext=React.createContext(initialState);

export const GlobalProvider=({children})=>{
    const [state, dispatch] = useReducer(Reducer, initialState);

    function deleteTransection(id){
        dispatch(deleteTransectionAction(id));
    }

    function AddTransection(transection){
        dispatch(AddTransectionAction(transection));
    }

    function errorHandler(error){
        dispatch(seterror(error))
    }
    function reseterrorHandler(error){
        dispatch(reseterror(error))
    }
    return(
        <Globalcontext.Provider
        value={{
            transection:state.transection,
            error:state.error,
            deleteTransection,
            AddTransection,
            errorHandler,
            reseterrorHandler
        }}
        >
            {children}
        </Globalcontext.Provider>
    )
};