import React, { useEffect, useState } from "react";
import { getListContract } from "../data/contractData";
import { Link } from "react-router-dom";
const Contract = () => {
    const [contracts, setContract] = useState([]);

    useEffect(() => {
        getContract();
    }, []);
    const getContract = async () => {
        const data = await getListContract();
        setContract(data);
    }
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Bootstrap CRUD Data Table for Database with Modal Form</title>
            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" /> */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Contract</b></h2>
                                </div>
                                <div className="col-sm-6">
                                <Link to='/contracts/addContract'><i className="material-icons"></i> <span>Add New Contract</span></Link>
                                </div>
                            </div>
                        </div>
                        <table  className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th>Costs</th>
                                    <th>Quantity</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Deposit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contracts.map(contract => (
                                    <tr key={contract.id}>
                                        <td>{contract.id}</td>
                                        <td>{contract.customers.name}</td>
                                        <td>{contract.customers.phone_number}</td>
                                        <td>{contract.customers.email}</td>
                                        <td>{contract.services.service}</td>
                                        <td>{contract.services.costs}</td>
                                        <td>{contract.services.quantity}</td>
                                        <td>{contract.startDate}</td>
                                        <td>{contract.endDate}</td>
                                        <td>{contract.deposit}</td>
                                    </tr>
                                ))}
                            </tbody> 
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#">Previous</a></li>
                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" className="page-link">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contract;