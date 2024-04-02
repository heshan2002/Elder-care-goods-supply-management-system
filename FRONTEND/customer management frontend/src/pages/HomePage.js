import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import "../styles/Home.css";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
   <div className="Home">
    <Layout title={"Best offers "}>
     
      <h1 className="htitle">HomePage</h1>

      {/* Buttons in the first row */}
      <div className="button-container1">
        <button>PRODUCTS</button>
        <button>CART</button>
        <button>DONATIONS</button>
      </div>

        {/* Buttons in the second row */}
        <div className="button-container1">
        <button>CARETAKERS</button>
        <button>PAYMENT HISTORY</button>
        <button>OFFERS</button>
      </div>

   
      
    </Layout>
    </div>
  );
};

export default HomePage;
