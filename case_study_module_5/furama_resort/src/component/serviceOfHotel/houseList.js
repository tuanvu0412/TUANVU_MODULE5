import { useEffect } from "react";
import { useState } from "react";
import { getListVilla, getListType, getListHouses, getListRooms } from "../data/serviceData";
import { Link } from "react-router-dom";

const House = () => {
    const [houses, setHouse] = useState([]);

    useEffect(() => {
        getHouses();
        getListType();
    }, []);
    const getHouses = async () => {
        const data = await getListHouses();
        setHouse(data);
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
                                    <h2>Manage <b>House</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <Link to='/houses/house'><i className="material-icons"></i> <span>Add New House</span></Link>
                                    {/* <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Customer</span></a>
                                <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a> */}
                                </div>
                            </div>
                        </div>
                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a><a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>

                                    <th>STT</th>
                                    <th>House</th>
                                    <th>Usable area</th>
                                    <th>Costs</th>
                                    <th>Max people</th>
                                    <th>Type</th>
                                    <th>Standard</th>
                                    <th>Description</th>
                                    <th>Pool</th>
                                    <th>Floor</th>
                                    <th>Free</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {houses.map(house => (
                                    <tr key={house.id}>
                                        <td>{house.id}</td>
                                        <td>{house.service}</td>
                                        <td>{house.usable_area}</td>
                                        <td>{house.costs}</td>
                                        <td>{house.max_people}</td>
                                        <td>{house.types.name}</td>
                                        <td>{house.standard}</td>
                                        <td>{house.description}</td>
                                        <td>{house.pool}</td>
                                        <td>{house.floor}</td>
                                        <td>{house.free}</td>
                                        <td>
                                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
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

            {/* Edit Modal HTML */}

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
        </div >
    );
}
export default House;