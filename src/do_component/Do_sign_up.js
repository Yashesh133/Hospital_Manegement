import React, { useState } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/assets/plugins/bootstrap/css/bootstrap.min.css';
import '../App.css';
import '../css/hospital management Admin/light/assets/css/main.css';
import '../css/hospital management Admin/light/assets/css/authentication.css';
import '../css/hospital management Admin/light/assets/css/color_skins.css';


function Do_sign_up(props) {

    const [username, setUsername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");



    const senddata = (e) => {
        e.preventDefault();
        const logindata = new FormData()
        logindata.append("username", username)
        logindata.append("email", email)
        logindata.append("password", password)

        axios.post("http://localhost/php/hospital/doctordata/sign_up_data.php", logindata)
        .then(function (response) {
            console.log(response);
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
    return (
        <>
            <div className="theme-cyan authentication sidebar-collapse">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
                    <div className="container">
                        <div className="navbar-translate n_logo">
                            <a className="navbar-brand" href="#" title="" target="_blank">Oreo</a>
                            <button className="navbar-toggler" type="button">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Search Result</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" title="Follow us on Twitter" href="#" target="_blank">
                                        <i className="zmdi zmdi-twitter"></i>
                                        <p className="d-lg-none d-xl-none">Twitter</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" title="Like us on Facebook" href="#" target="_blank">
                                        <i className="zmdi zmdi-facebook"></i>
                                        <p className="d-lg-none d-xl-none">Facebook</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" title="Follow us on Instagram" href="#" target="_blank">
                                        <i className="zmdi zmdi-instagram"></i>
                                        <p className="d-lg-none d-xl-none">Instagram</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-white btn-round" href="/signin">SIGN IN</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Navbar */}
                <div className="page-header">
                    <div className="page-header-image" ></div>
                    <div className="container">
                        <div className="col-md-12 content-center">
                            <div className="card-plain">
                                <form className="form" method="" action="#">
                                    <div className="header">
                                        <div className="logo-container">
                                            <img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" alt="" />
                                        </div>
                                        <h5>Sign Up</h5>
                                        <span>Register a new membership</span>
                                    </div>
                                    <div className="content">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Enter User Name" name='username' onChange={(e) => { setUsername(e.target.value) }} />
                                            <span className="input-group-addon">
                                                <i className="zmdi zmdi-account-circle"></i>
                                            </span>
                                        </div>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Enter Email" name='email' onChange={(e) => { setemail(e.target.value) }} />
                                            <span className="input-group-addon">
                                                <i className="zmdi zmdi-email"></i>
                                            </span>
                                        </div>
                                        <div className="input-group">
                                            <input type="password" placeholder="Password" className="form-control" name='password' onChange={(e) => { setpassword(e.target.value) }} />
                                            <span className="input-group-addon">
                                                <i className="zmdi zmdi-lock"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="checkbox">
                                        <input id="terms" type="checkbox" />
                                        <label for="terms">
                                            I read and agree to the <a href="#">terms of usage</a>
                                        </label>
                                    </div>
                                    <div className="footer text-center">
                                        <a href="/" className="btn btn-primary btn-round btn-block  waves-effect waves-light" onClick={senddata}>SIGN UP</a>
                                        <h5><a className="link" href="/">You already have a membership?</a></h5>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="container">
                            <nav>
                                <ul>
                                    <li><a href="http://thememakker.com/contact/" target="_blank">Contact Us</a></li>
                                    <li><a href="http://thememakker.com/about/" target="_blank">About Us</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </nav>
                            <div className="copyright">
                                &copy;
                                {/* <script>
                                    document.write(new Date().getFullYear())
                                </script>, */}
                                <span>Designed by <a href="http://thememakker.com/" target="_blank">ThemeMakker</a></span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

export default Do_sign_up;