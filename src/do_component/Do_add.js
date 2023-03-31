import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import '../App.css';    

function Do_add(props) {
    // dpctor-info
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [dob, setdob] = useState("");
    const [gender, setgender] = useState("");
    const [speciality, setspeciality] = useState("");
    const [Phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [websiteurl, setwebsiteurl] = useState("");
    const [image, setimage] = useState("");
    // email password
    const [do_email,setdo_email] = useState("");
    const [do_pass,setdo_pass] = useState("");
    const [do_c_pass,setdo_c_pass] = useState("");
    // account info
    const [ facebook, setfacebook] = useState("");
    const [ twitter, settwitter] = useState("");
    const [googleplus, setgoogleplus] = useState("");
    const [ linkedin, setlinkedin] = useState("");
    const [behance, setbehance] = useState("");
    const [ dribbble, setdribbble] = useState("");

    const senddata = () => {
        // e.preventDefault();
        const adddoctor = new FormData()
        adddoctor.append("fname", fname)
        adddoctor.append("lname", lname)
        adddoctor.append("dob", dob)
        adddoctor.append("gender", gender)
        adddoctor.append("speciality", speciality)
        adddoctor.append("Phone", Phone)
        adddoctor.append("email", email)
        adddoctor.append("websiteurl", websiteurl)
        adddoctor.append("image", image)

        axios.post("http://localhost/php/hospital/doctordata/adddoctor.php", adddoctor)
        .then(function (response) {
            console.log(response);
            window.location.reload(); 
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    const sendaccountdata = () => {
        const accountdata = new FormData()
        accountdata.append("do_email", do_email)
        accountdata.append("do_pass", do_pass)
        accountdata.append("do_c_pass", do_c_pass)

        axios.post("http://localhost/php/hospital/doctordata/account-info.php", accountdata)
        .then(function (response) {
            console.log(response);
            // window.location.reload(); 
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const socialsenddata = () => {
        const socialdata = new FormData()
        socialdata.append("facebook", facebook)
        socialdata.append("twitter", twitter)
        socialdata.append("googleplus", googleplus)
        socialdata.append("linkedin", linkedin)
        socialdata.append("behance", behance)
        socialdata.append("dribble", dribbble)

        axios.post("http://localhost/php/hospital/doctordata/do-account-info.php", socialdata)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>
            <div class="theme-cyan">
                {/* Page Loader */}
                <div className="page-loader-wrapper">
                    <div className="loader">
                        <div className="m-t-30"><img className="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={48} height={48} alt="Oreo" /></div>
                        <p>Please wait...</p>
                    </div>
                </div>
                {/* Overlay For Sidebars */}
                <div className="overlay" />
                {/* Top Bar */}
                <nav className="navbar p-l-5 p-r-5">
                    <ul className="nav navbar-nav navbar-left">
                        <li>
                            <div className="navbar-header">
                                <a href="javascript:void(0);" className="bars" />
                                <a className="navbar-brand" href="index.html"><img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={30} alt="Oreo" /><span className="m-l-10">Oreo</span></a>
                            </div>
                        </li>
                        <li><a href="javascript:void(0);" className="ls-toggle-btn" data-close="true"><i className="zmdi zmdi-swap" /></a></li>
                        <li className="d-none d-lg-inline-block"><a href="events.html" title="Events"><i className="zmdi zmdi-calendar" /></a></li>
                        <li className="d-none d-lg-inline-block"><a href="mail-inbox.html" title="Inbox"><i className="zmdi zmdi-email" /></a></li>
                        <li><a href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone" /></a></li>
                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications" />
                            <div className="notify"><span className="heartbit" /><span className="point" /></div>
                        </a>
                            <ul className="dropdown-menu pullDown">
                                <li className="body">
                                    <ul className="menu list-unstyled">
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Sophia <span className="time">30min ago</span></span>
                                                        <span className="message">There are many variations of passages</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar3.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Sophia <span className="time">31min ago</span></span>
                                                        <span className="message">There are many variations of passages of Lorem Ipsum</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Isabella <span className="time">35min ago</span></span>
                                                        <span className="message">There are many variations of passages</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Alexander <span className="time">35min ago</span></span>
                                                        <span className="message">Contrary to popular belief, Lorem Ipsum random</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="media">
                                                    <img className="media-object" src="../assets/images/xs/avatar6.jpg" alt />
                                                    <div className="media-body">
                                                        <span className="name">Grayson <span className="time">1hr ago</span></span>
                                                        <span className="message">There are many variations of passages</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"> <a href="javascript:void(0);">View All</a> </li>
                            </ul>
                        </li>
                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-flag" />
                            <div className="notify">
                                <span className="heartbit" />
                                <span className="point" />
                            </div>
                        </a>
                            <ul className="dropdown-menu pullDown">
                                <li className="header">Project</li>
                                <li className="body">
                                    <ul className="menu tasks list-unstyled">
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="progress-container progress-primary">
                                                    <span className="progress-badge">Neurology</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                                                            <span className="progress-value">86%</span>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled team-info">
                                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="progress-container progress-info">
                                                    <span className="progress-badge">Gynecology</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{ width: '45%' }}>
                                                            <span className="progress-value">45%</span>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled team-info">
                                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar10.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar9.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar8.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar7.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <div className="progress-container progress-warning">
                                                    <span className="progress-badge">Cardio Monitoring</span>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" aria-valuenow={29} aria-valuemin={0} aria-valuemax={100} style={{ width: '29%' }}>
                                                            <span className="progress-value">29%</span>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled team-info">
                                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar5.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                                        </li>
                                                        <li>
                                                            <img src="../assets/images/xs/avatar7.jpg" alt="Avatar" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer"><a href="javascript:void(0);">View All</a></li>
                            </ul>
                        </li>
                        <li className="d-none d-md-inline-block">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-search" />
                                </span>
                            </div>
                        </li>
                        <li className="float-right">
                            <a href="sign-in.html" className="mega-menu" data-close="true"><i className="zmdi zmdi-power" /></a>
                            <a href="javascript:void(0);" className="js-right-sidebar" data-close="true"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a>
                        </li>
                    </ul>
                </nav>
                {/* Left Sidebar */}
                <Sidebar />

                {/* Chat-launcher */}
                <div className="chat-launcher" />
                <div className="chat-wrapper">
                    <div className="card">
                        <div className="header">
                            <ul className="list-unstyled team-info margin-0">
                                <li className="m-r-15"><h2>Doctor Team</h2></li>
                                <li>
                                    <img src="../assets/images/xs/avatar2.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar3.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar4.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <img src="../assets/images/xs/avatar6.jpg" alt="Avatar" />
                                </li>
                                <li>
                                    <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div className="chat-widget">
                                <ul className="chat-scroll-list clearfix">
                                    <li className="left float-left">
                                        <img src="../assets/images/xs/avatar3.jpg" className="rounded-circle" alt />
                                        <div className="chat-info">
                                            <a className="name" href="#">Alexander</a>
                                            <span className="datetime">6:12</span>
                                            <span className="message">Hello, John </span>
                                        </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br /> How are you!</span> </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                                    </li>
                                    <li className="left float-left"> <img src="../assets/images/xs/avatar2.jpg" className="rounded-circle" alt />
                                        <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
                                    </li>
                                    <li className="left float-left"> <img src="../assets/images/xs/avatar1.jpg" className="rounded-circle" alt />
                                        <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                                    </li>
                                    <li className="right">
                                        <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="input-group p-t-15">
                                <input type="text" className="form-control" placeholder="Enter text here..." />
                                <span className="input-group-addon">
                                    <i className="zmdi zmdi-mail-send" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-5 col-sm-12">
                                <h2>Add Doctors
                                    <small className="text-muted">Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                    <i className="zmdi zmdi-plus" />
                                </button>
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
                                    <li className="breadcrumb-item active">Add Doctors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='fname' placeholder="First Name" onChange={(e) =>  setfname(e.target.value) } />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"  name='lname' placeholder="Last Name" onChange={(e) => setlname(e.target.value) } />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"  name='dob' placeholder="Date of Birth" onChange={(e) =>  setdob(e.target.value) } />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-control show-tick" onChange={(e) => { setgender(e.target.value) }}>
                                                    <option selected disabled>- Gender -</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"  onChange={(e) =>  setspeciality(e.target.value) } name='Speciality' placeholder="Speciality" />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='phone' onChange={(e) =>  setphone(e.target.value) } placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='email' onChange={(e) =>  setemail(e.target.value) } placeholder="Enter Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name='websiteurl' onChange={(e) =>  setwebsiteurl(e.target.value) } placeholder="Website URL" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                    <div className="dz-message">
                                                        <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                        <h3>Drop files here or click to upload.</h3>
                                                        <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                    <div className="fallback">
                                                        <input name="file" type="file" multiple onChange={(e) => setimage(e.target.files[0])} />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" onClick={senddata} className="btn btn-primary btn-round">Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Doctor's</strong> Account Information <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="User Name" onChange={(e)=> setdo_email(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Password" onChange={(e)=> setdo_pass(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Confirm Password" onChange={(e)=> setdo_c_pass(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" onClick={sendaccountdata} className="btn btn-primary btn-round">Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Doctor</strong> Social Media Info <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-facebook" /></span>
                                                    <input type="text" className="form-control" placeholder="Facebook" onChange={(e)=> setfacebook(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-twitter" /></span>
                                                    <input type="text" className="form-control" placeholder="Twitter" onChange={(e)=> settwitter(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-google-plus" /></span>
                                                    <input type="text" className="form-control" placeholder="Google Plus" onChange={(e)=> setgoogleplus(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-linkedin" /></span>
                                                    <input type="text" className="form-control" placeholder="LinkedIN" onChange={(e)=> setlinkedin(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-behance" /></span>
                                                    <input type="text" className="form-control" placeholder="Behance" onChange={(e)=> setbehance(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-dribbble" /></span>
                                                    <input type="text" className="form-control" placeholder="dribbble" onChange={(e)=> setdribbble(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <p> <b>With Search Bar</b> </p>
                                                <select className="form-control z-index show-tick" data-live-search="true">
                                                    <option>Hot Dog, Fries and a Soda</option>
                                                    <option>Burger, Shake and a Smile</option>
                                                    <option>Sugar, Spice and all things nice</option>
                                                </select>
                                                <button type="submit" className="btn btn-primary btn-round" onClick={socialsenddata}>Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    );
}

export default Do_add;