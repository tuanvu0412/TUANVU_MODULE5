import { useEffect } from "react";
import { useState } from "react";
import { getListVilla, getListType, deleteVilla } from "../data/serviceData";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Service = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        getService();
        getListType();
    }, []);
    const getService = async () => {
        const data = await getListVilla();
        setService(data);
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }
        ).then((res) => {
            if (res.isConfirmed) {
                deleteVilla(id).then(() => {
                    getListVilla().then((data) => {
                        setService(data);
                    }).then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'delete success fully!!!!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                });
            } else if (res.dismiss === Swal.DismissReason.cancel) {
            }
        })
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Số mục hiển thị trên mỗi trang
    const data = Array.from({ length: 15 }, (_, index) => `Item ${index + 1}`); // Dữ liệu mẫu
    
    // Tính toán số trang dựa trên dữ liệu và số mục trên mỗi trang
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Lấy dữ liệu của trang hiện tại
    const currentData = services.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Xử lý sự kiện chuyển trang
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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
                                    <h2>Manage <b>Villa</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <Link to='/villas/villa'><i className="material-icons"></i> <span>Add New Villa</span></Link>
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
                                    <th>Villa</th>
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
                                {services.map(ser => (
                                    <tr key={ser.id}>
                                        <td>{ser.id}</td>
                                        <td>{ser.service}</td>
                                        <td>{ser.usable_area}</td>
                                        <td>{ser.costs}</td>
                                        <td>{ser.max_people}</td>
                                        <td>{ser.types.name}</td>
                                        <td>{ser.standard}</td>
                                        <td>{ser.description}</td>
                                        <td>{ser.pool}</td>
                                        <td>{ser.floor}</td>
                                        <td>{ser.free}</td>
                                        <td>
                                            <Link to={`/villas/villa/${ser.id}`} ><i className="material-icons" data-toggle="tooltip" title="Edit"></i></Link>
                                            <a onClick={() => handleDelete(ser.id)}><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                        </td>
                                    </tr>
                                ))

                                }
                            </tbody>
                        </table>
                        <div>
                            {/* Hiển thị các nút phân trang */}
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    disabled={currentPage === index + 1}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Service;