import React,{useContext} from 'react'
import {Globalcontext} from '../../context/Globalcontext'

export const Transection=(transection)=>{
    const {deleteTransection}=useContext(Globalcontext);

    const sign=transection.transection.amount<0?'-':'+';

    return(
        
        <div>
            {console.log(transection.transection.text)}
           <li className={transection.transection.amount<0?'minus':'plus'}>
               {transection.transection.text}{''}
               <span>
                   {sign}₹{Math.abs(transection.transection.amount)}
               </span>
               <button
               onClick={()=>deleteTransection(transection.transection.id)}
               className="delete-btn"
               >
                   X
               </button>
           </li>
        </div>
      
    )
}