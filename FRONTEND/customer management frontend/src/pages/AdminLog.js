import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <div className="Home">
     <Layout title={"Best offers "}>
      
       <h1 className="htitle">ADMIN LOGIN</h1>
 
       {/* Buttons in the first row */}
       <div className="button-container2">
         <button>CUSTOMER MANAGER</button>
         <button>ORDER PROCESSING MANAGER</button>
         <button>INVENTORY MANAGER</button>
       </div>
 
         {/* Buttons in the second row */}
         <div className="button-container2">
         <button>SUPPLIER MANAGER</button>
         <button>STAFF MANAGER</button>
         <button>ELDER CARE DONATIONS MANAGER</button>
       </div>

       {/* Buttons in the third row */}
       <div className="button-container2">
         <button>PAYMENT MANAGER</button>
         <button>CARETAKER PACKAGE MANAGER</button>
        
       </div>
 
    
       
     </Layout>
     </div>
   );
};

export default Pagenotfound;
