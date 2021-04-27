import {DELETE_TRANSECTION,ADD_TRANSECTION,RESET_ERROR,SET_ERROR} from './AppAction'

 const Reducer=(state,action)=>{
    switch(action.type){
        case DELETE_TRANSECTION:
            return{
                ...state,
                transection:state.transection.filter(transection=>transection.id!==action.payload.id),
                error:action.payload.error
            };
        case ADD_TRANSECTION:
                console.log(state.transection)
            return{
                ...state,
                transection:[action.payload,...state.transection],
            };
        case SET_ERROR:
            return{
                ...state,
                error:action.payload,
            };
        case RESET_ERROR:
             return{
                        ...state,
                        error:action.payload,
                    };
            default:
                return state;
    }


}
export default Reducer;