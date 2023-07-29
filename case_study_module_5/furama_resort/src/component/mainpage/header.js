import { Link } from "react-router-dom";

function Header() {
    return (
        <div class="container-xxl bg-white p-0">

            <div class="container-fluid bg-dark px-0">
                <div class="row gx-0">
                    <div class="col-lg-3 bg-dark d-none d-lg-block">
                        <a href="index.html" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 class="m-0 text-primary text-uppercase">Furama</h1>
                        </a>
                    </div>
                    <div class="col-lg-9">
                        <div class="row gx-0 bg-white d-none d-lg-flex">
                            <div class="col-lg-7 px-5 text-start">
                                <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i class="fa fa-envelope text-primary me-2"></i>
                                    <p class="mb-0">info@example.com</p>
                                </div>
                                <div class="h-100 d-inline-flex align-items-center py-2">
                                    <i class="fa fa-phone-alt text-primary me-2"></i>
                                    <p class="mb-0">+012 345 6789</p>
                                </div>
                            </div>
                            <div class="col-lg-5 px-5 text-end">
                                <div class="d-inline-flex align-items-center py-2">
                                    <a class="me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="me-3" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="me-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a class="me-3" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="" href=""><i class="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <a href="index.html" class="navbar-brand d-block d-lg-none">
                                <h1 class="m-0 text-primary text-uppercase">Hotelier</h1>
                            </a>
                            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div class="navbar-nav mr-auto py-0">
                                    <a href="/" class="nav-item nav-link active">Home</a>
                                    <div class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Villa</a>
                                        <div class="dropdown-menu rounded-0 m-0">
                                            <Link to='/service'>List Villas</Link><br></br>
                                            <Link to='/villas/villa'>Add new Villa</Link><br />
                                            <Link to='/'>Edit Villa</Link>
                                        </div>
                                    </div>
                                    <div class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">House</a>
                                        <div class="dropdown-menu rounded-0 m-0">
                                            <Link to='/house'>List House</Link><br></br>
                                            <Link to='/houses/house'>Add New House</Link><br />
                                            <Link to='/'>Edit House</Link>
                                        </div>
                                    </div>
                                    <div class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Rooms</a>
                                        <div class="dropdown-menu rounded-0 m-0">
                                            <Link to='/room'>List Rooms</Link><br></br>
                                            <Link to='/rooms/room'>Add new Rooms</Link><br />
                                            <Link to='/'>Edit Rooms</Link>
                                        </div>
                                    </div>
                                    <div class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Customer</a>
                                        <div class="dropdown-menu rounded-0 m-0">
                                            <Link to='/customer'>List Customer</Link><br></br>
                                            <Link to='/customers/customer'>Add new Customer</Link><br />
                                            <Link to='/'>Edit Customer</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Contract</a>
                                        <div class="dropdown-menu rounded-0 m-0">
                                            <Link to='/contract'>List Contract</Link><br></br>
                                            <Link to='/customers/customer'>Add new Contract</Link><br />

                                        </div>
                                    </div>

                                </div>
                                <a href="https://htmlcodex.com/hotel-html-template-pro" class="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Premium Version<i class="fa fa-arrow-right ms-3"></i></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;