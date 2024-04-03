import React from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import "../../styles/Adash.css";

const CreateProduct = () => {
  return (
    <Layout title={"Dashboard - Print Details"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Print Details</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
