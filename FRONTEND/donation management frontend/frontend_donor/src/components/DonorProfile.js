import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DonorProfile() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUserDetails() {
            try {
                const response = await axios.get(`http://localhost:8070/donor/get/${id}`);
                setUser(response.data);
            } catch (error) {
                alert(error.message);
            }
        }

        fetchUserDetails();
    }, [id]);

    return (
        <div>
            {user && (
                <div style={{color:"white"}}>
                    <h2 className="center mt-5 mb-3" style={{color:"black"}}>{user.firstName} {user.lastName}</h2>
                    <div className="container bg-dark p-5 mb-5" style={{maxWidth:"400px", height: "auto"}}>
                        <h5 style={{ marginBottom: "25px" }}>First Name: {user.firstName}</h5>
                        <h5 style={{ marginBottom: "25px" }}>Last Name: {user.lastName}</h5>
                        <h5 style={{ marginBottom: "25px" }}>Email: {user.email}</h5>
                        <h5 style={{ marginBottom: "25px" }}>Phone Number: {user.phoneNumber}</h5>
                        <h5 style={{ marginBottom: "25px" }}>NIC: {user.nic}</h5>
                        <h5>Address: {user.address}</h5>
                    </div>
                </div>
            )}
        </div>
    );
}






/*

return (
        <div>
            {user && (
                <div>
                    <h2>User Details</h2>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone Number: {user.phoneNumber}</p>
                    <p>NIC: {user.nic}</p>
                    <p>Address: {user.address}</p>
                </div>
            )}
        </div>
    );

*/