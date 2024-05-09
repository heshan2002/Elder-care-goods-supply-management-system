import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DonorDashboard() {
    

    return (
        <div className="center px-5 mt-3">
            <h1>Welcome </h1>
            <div style={{ float: "right" }}>
                <Link to="/addGoodsDonation" className="btn btn-primary mb-3">+ Add Goods Donation</Link>
            </div>
            <div style={{ float: "right" }}>
                <Link to="/addCashDonation" className="btn btn-primary mb-3">+ Add Cash Donation</Link>
            </div>
        </div>
    );
}
