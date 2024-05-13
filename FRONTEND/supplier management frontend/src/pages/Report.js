import React, { useState } from 'react';
import './PaymentDetails.css'; 

const PaymentDetails = () => {
  const [supplierName, setSupplierName] = useState('');
  const [order, setOrder] = useState('');
  const [dateOfPayment, setDateOfPayment] = useState('');
  const [amountToBePaid, setAmountToBePaid] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Supplier Name:', supplierName);
    console.log('Order:', order);
    console.log('Date of Payment:', dateOfPayment);
    console.log('Amount to be paid:', amountToBePaid); 
   
    
    setSupplierName('');
    setOrder('');
    setDateOfPayment('');
    setAmountToBePaid('');
  };

  return (
    <div>
      <h1 className="form-title">Payment Details</h1>
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-group">
          <label htmlFor="supplierName">Supplier's Name:</label>
          <input
            id="supplierName"
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="order">Order:</label>
          <input
            id="order"
            type="text"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfPayment">Date of Payment:</label>
          <input
            id="dateOfPayment"
            type="date"
            value={dateOfPayment}
            onChange={(e) => setDateOfPayment(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amountToBePaid">Amount to be paid:</label>
          <input
            id="amountToBePaid"
            type="number"
            value={amountToBePaid}
            onChange={(e) => setAmountToBePaid(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default PaymentDetails;
