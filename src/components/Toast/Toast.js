import React, { useContext } from "react";
import { Globalcontext } from "../../context/Globalcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Toast = () => {
  const { error } = useContext(Globalcontext);

  if (error !== undefined) {
    
 
    return(
      toast.error(error,{
      
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
        
        })
    )
      }

  return <div></div>;
};
