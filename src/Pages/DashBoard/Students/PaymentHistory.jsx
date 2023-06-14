import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => setPayments(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>-PaymentsHistory</title>
            </Helmet>
            <div>
                <h3 className="text-3xl">Payment History</h3>
                <div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>EMAIL</th>
                                    <th>PRICE</th>
                                    <th>DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((history, index) => <tr key={history._id}>
                                        <th>{index + 1} </th>
                                        <td>{history.email}</td>
                                        <td>${history.price}</td>
                                        <td>{history.date}</td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;