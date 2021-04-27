import React,{useContext} from 'react'
import {Globalcontext} from '../../context/Globalcontext'
import { Transection } from './Transection';

export const TransectionList=()=>{
    const {transection}=useContext(Globalcontext);

    return(
        
        <div>
         <h3>History</h3>
         <ul className="list">
             
             {transection.map((transection)=>(<Transection key={transection.id} transection={transection} />))}
         </ul>
        </div>
      
    )
}