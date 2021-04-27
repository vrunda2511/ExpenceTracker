import React,{useContext} from 'react'
import {Globalcontext} from '../../context/Globalcontext'

export const Balance=()=>{
    const {transection}=useContext(Globalcontext);

    const amounts=transection.map(transection=>transection.amount);

    const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

    return(
        
        <div>
            <h4>your Balance</h4>
        <h1>₹{total}</h1>
        </div>
      
    )
}