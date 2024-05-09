import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Donors() {

    return (

        <div>
            <div>
                <h1>Donors</h1>
                <div style={{float:"right"}}> 
                    <Link to="/add" className="btn btn-primary">+ Add Donor</Link>
                </div>
            </div>
        </div>
    )
}
