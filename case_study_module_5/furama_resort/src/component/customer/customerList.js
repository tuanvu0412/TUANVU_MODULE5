import { useEffect } from "react";
import { useState } from "react";
import { getListCustomer, getListTypeCustomer } from "../data/customerData";
import Modal from './deleteModal';
import axios from "axios";
import { Link } from "react-router-dom";


const Customer = () => {
    const [customers, setCustomers] = useState([]);
    
    useEffect(() => {
        getList();
        getListTypeCustomer();
    }, [])
    const getList = async () => {
        const data = await getListCustomer();
        setCustomers(data);
    }
   
    const handleDeleteItem = (id) => {
        axios.delete(`http://localhost:8080/customers/${id}`)
        .then(response =>{
            setCustomers(customers.filter(cus=>cus.id!==id));
            
        }).catch(error=>{
            alert(error);
        })
       
    };
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
                                    <h2>Manage <b>Customer</b></h2>
                                </div>
                                <div className="col-sm-6">
                                <Link to='/customers/customer'><i className="material-icons"></i> <span>Add New Customer</span></Link>
                                </div>
                            </div>
                        </div>
                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a><a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>

                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Date of birth</th>
                                    <th>Gender</th>
                                    <th>Id card</th>
                                    <th>Phone number</th>
                                    <th>Email</th>
                                    <th>Customer type</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map(cus => (
                                    <tr key={cus.id}>
                                        <td>{cus.id}</td>
                                        <td>{cus.name}</td>
                                        <td>{cus.date_of_birth}</td>
                                        <td>{cus.gender.name}</td>
                                        <td>{cus.id_card}</td>
                                        <td>{cus.phone_number}</td>
                                        <td>{cus.email}</td>
                                        <td>{cus.customerTypes.name}</td>
                                        <td>{cus.address}</td>
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={handleDeleteItem}>
                                           Delete
                                            </button>
                                        
                                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                           
                                        </td>
                                    </tr>
                                ))

                                }

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
            {/* Edit Modal HTML */}
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-success" defaultValue="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-info" defaultValue="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Delete Modal HTML */}
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Customer;