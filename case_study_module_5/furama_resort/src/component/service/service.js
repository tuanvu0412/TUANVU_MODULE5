function Service() {
    return (
        <div>
            <div className="container-xxl bg-white p-0">
                {/* Spinner Start */}
                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                {/* Spinner End */}
                {/* Header Start */}
                <div className="container-fluid bg-dark px-0">
                    <div className="row gx-0">
                        <div className="col-lg-3 bg-dark d-none d-lg-block">
                            <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                            </a>
                        </div>
                        <div className="col-lg-9">
                            <div className="row gx-0 bg-white d-none d-lg-flex">
                                <div className="col-lg-7 px-5 text-start">
                                    <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                        <i className="fa fa-envelope text-primary me-2" />
                                        <p className="mb-0">info@example.com</p>
                                    </div>
                                    <div className="h-100 d-inline-flex align-items-center py-2">
                                        <i className="fa fa-phone-alt text-primary me-2" />
                                        <p className="mb-0">+012 345 6789</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 px-5 text-end">
                                    <div className="d-inline-flex align-items-center py-2">
                                        <a className="me-3" href><i className="fab fa-facebook-f" /></a>
                                        <a className="me-3" href><i className="fab fa-twitter" /></a>
                                        <a className="me-3" href><i className="fab fa-linkedin-in" /></a>
                                        <a className="me-3" href><i className="fab fa-instagram" /></a>
                                        <a className href><i className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                <a href="index.html" className="navbar-brand d-block d-lg-none">
                                    <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                                </a>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div className="navbar-nav mr-auto py-0">
                                        <a href="index.html" className="nav-item nav-link">Home</a>
                                        <a href="about.html" className="nav-item nav-link">About</a>
                                        <a href="service.html" className="nav-item nav-link active">Services</a>
                                        <a href="room.html" className="nav-item nav-link">Rooms</a>
                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                            <div className="dropdown-menu rounded-0 m-0">
                                                <a href="booking.html" className="dropdown-item">Booking</a>
                                                <a href="team.html" className="dropdown-item">Our Team</a>
                                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                            </div>
                                        </div>
                                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                                    </div>
                                    <a href="https://htmlcodex.com/hotel-html-template-pro" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Premium Version<i className="fa fa-arrow-right ms-3" /></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Header End */}
                {/* Page Header Start */}
                <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(carousel-1.jpg)' }}>
                    <div className="container-fluid page-header-inner py-5">
                        <div className="container text-center pb-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Booking Start */}
                <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="bg-white shadow" style={{ padding: '35px' }}>
                            <div className="row g-2">
                                <div className="col-md-10">
                                    <div className="row g-2">
                                        <div className="col-md-3">
                                            <div className="date" id="date1" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="date" id="date2" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select">
                                                <option selected>Adult</option>
                                                <option value={1}>Adult 1</option>
                                                <option value={2}>Adult 2</option>
                                                <option value={3}>Adult 3</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <select className="form-select">
                                                <option selected>Child</option>
                                                <option value={1}>Child 1</option>
                                                <option value={2}>Child 2</option>
                                                <option value={3}>Child 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-primary w-100">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Booking End */}
                {/* Service Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
                            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a className="service-item rounded" href>
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-hotel fa-2x text-primary" />
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Rooms &amp; Appartment</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                <a className="service-item rounded" href>
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-utensils fa-2x text-primary" />
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Food &amp; Restaurant</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <a className="service-item rounded" href>
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-spa fa-2x text-primary" />
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Spa &amp; Fitness</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                <a className="service-item rounded" href>
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-swimmer fa-2x text-primary" />
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Sports &amp; Gaming</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <a className="service-item rounded" href>
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-glass-cheers fa-2x text-primary" />
                                        </div>
                                    </div>
                                    <h5 className="mb-3">Event &amp; Party</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                <a className="service-item rounded" href>
                                    <div className="service-icon bg-transparent border rounded p-1">
                                        <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                            <i className="fa fa-dumbbell fa-2x text-primary" />
                                        </div>
                                    </div>
                                    <h5 className="mb-3">GYM &amp; Yoga</h5>
                                    <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}
                {/* Testimonial Start */}
                <div className="container-xxl testimonial mt-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s" style={{ marginBottom: '90px' }}>
                    <div className="container">
                        <div className="owl-carousel testimonial-carousel py-5">
                            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="testimonial-1.jpg" style={{ width: '45px', height: '45px' }} />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
                            </div>
                            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="testimonial-2.jpg" style={{ width: '45px', height: '45px' }} />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
                            </div>
                            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="testimonial-3.jpg" style={{ width: '45px', height: '45px' }} />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                                <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
                {/* Newsletter Start */}
                <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 border rounded p-1">
                            <div className="border rounded text-center p-1">
                                <div className="bg-white rounded text-center p-5">
                                    <h4 className="mb-4">Subscribe Our <span className="text-primary text-uppercase">Newsletter</span></h4>
                                    <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                                        <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                        <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter Start */}
                {/* Footer Start */}
                <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
                    <div className="container pb-5">
                        <div className="row g-5">
                            <div className="col-md-6 col-lg-4">
                                <div className="bg-primary rounded p-4">
                                    <a href="index.html"><h1 className="text-white text-uppercase mb-3">Hotelier</h1></a>
                                    <p className="text-white mb-0">
                                        Download <a className="text-dark fw-medium" href="https://htmlcodex.com/hotel-html-template-pro">Hotelier – Premium Version</a>, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
                                    <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="row gy-5 g-4">
                                    <div className="col-md-6">
                                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                        <a className="btn btn-link" href>About Us</a>
                                        <a className="btn btn-link" href>Contact Us</a>
                                        <a className="btn btn-link" href>Privacy Policy</a>
                                        <a className="btn btn-link" href>Terms &amp; Condition</a>
                                        <a className="btn btn-link" href>Support</a>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                        <a className="btn btn-link" href>Food &amp; Restaurant</a>
                                        <a className="btn btn-link" href>Spa &amp; Fitness</a>
                                        <a className="btn btn-link" href>Sports &amp; Gaming</a>
                                        <a className="btn btn-link" href>Event &amp; Party</a>
                                        <a className="btn btn-link" href>GYM &amp; Yoga</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                                    {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                    Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <a href>Home</a>
                                        <a href>Cookies</a>
                                        <a href>Help</a>
                                        <a href>FQAs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
            </div>
            {/* JavaScript Libraries */}
            {/* Template Javascript */}
        </div>
    );
}
export default Service;