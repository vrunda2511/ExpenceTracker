import React,{useContext,useState} from 'react'
import {Globalcontext} from '../../context/Globalcontext'
import { toast, ToastContainer } from 'react-toastify';

export const AddTransection=()=>{
    const [text,settext]=useState("");
    const [amount,setamount]=useState(0);
    // const { error } = useContext(Globalcontext);

    
    const {AddTransection,errorHandler,reseterrorHandler}=useContext(Globalcontext);

    const handleError=()=>{
        if(text===''||Number(amount)<=0){
            errorHandler('All Fileds are required')
            // toast.error('All Filed are required')

            //  toast.error(error)

            return;
        }
        return;
    }

    const ondeposit=(e)=>{
        e.preventDefault();
        reseterrorHandler();
        if(text!==''&&Number(amount)>0){
            const newTrensection={
                id:Math.floor(Math.random()*10000),
                text,
                amount:+amount
            }
            AddTransection(newTrensection)
        }
        handleError();
        settext('')
        setamount(0);
        
        return;
    }
    const onExpence=(e)=>{
        e.preventDefault();
        reseterrorHandler();
        if(text!==''&&Number(amount)>0){
            const newTrensection={
                id:Math.floor(Math.random()*10000),
                text,
                amount:-amount
            }
            AddTransection(newTrensection)
        }
        handleError();
        settext('')
        setamount(0);
        return;
    }
   
    return(
        
        <div>
           <h3>Add new transaction</h3>
      <form id="form">
        <div class="form-control">
          <label for="text">Transaction Detail</label>
          <input type="text" id="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder="Enter New Transaction..." />
        </div>
        <div class="form-control">
          <label for="amount"
            >Amount
            </label>
          <input type="number" id="amount" value={amount} onChange={(e)=>setamount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <div >
        <button style={{float:"left",background:"#2ecc71"}} class="btn deposit" onClick={ondeposit}>Deposit</button>
        <button style={{float:"right",background:"#c0392b"}} class="btn expense" onClick={onExpence}>Expense</button>
        </div>

      </form>
     
        
        </div>
      
    )
    
}
