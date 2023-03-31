import React, { useState, useEffect } from 'react';
import Header from '../do_component/Header';
import Sidebar from '../do_component/Sidebar';
import axios from 'axios';


function Add_patient(props) {

    const [fname, setFname] = useState('');
    const [lname, setlname] = useState('');
    const [phone, setphone] = useState('');
    const [date, setdate] = useState('');
    const [age, setage] = useState('');
    const [gender, setgender] = useState('');
    const [email, setemail] = useState('');
    const [image, setimage] = useState('');
    const [status, setstatus] = useState(0);
    const [loader ,setloader] = useState(false);
    const [doctor ,setdoctor] = useState("");


    const senddata = () => {
        // e.preventDefault();
        const addpatient = new FormData()
        addpatient.append("fname", fname)
        addpatient.append("lname", lname)
        addpatient.append("phone", phone)
        addpatient.append("date", date)
        addpatient.append("age", age)
        addpatient.append("gender", gender)
        addpatient.append("email", email)
        addpatient.append("image", image)
        addpatient.append("status", status)
        addpatient.append("doctor", doctor)

        axios.post("http://localhost/php/hospital/patientdata/addpatient.php", addpatient)
            .then(function (response) {
                console.log(response);
                window.location.reload(); 
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const [results, setResults] = useState([]);
    useEffect(() => {
        axios
            .post("http://localhost/php/hospital/doctordata/viewdoctor.php")
            .then(function (response) {
                console.log(response.data.phpresult);
                setResults(response.data.phpresult);
                setloader(true)
               
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

   
        return (
            <>
                {/* Page Loader */}
                <div className="page-loader-wrapper">
                    <div className="loader">
                        <div className="m-t-30"><img className="zmdi-hc-spin" src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" width={48} height={48} alt="Oreo" /></div>
                        <p>Please wait...</p>
                    </div>
                </div>
                {/* Overlay For Sidebars */}
                <div className="overlay" />
                <Header />
                <Sidebar />
                {
                    loader ? (
                        <>
                            <div class="chat-launcher"></div>
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
                                <h2>Add Patient
                                    <small className="text-muted">Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Patient</a></li>
                                    <li className="breadcrumb-item active">Add Patient</li>
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
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                    <li><a href="javascript:void(0);">Edit</a></li>
                                                    <li><a href="javascript:void(0);">Delete</a></li>
                                                    <li><a href="javascript:void(0);">Report</a></li>
                                                </ul>
                                            </li>
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setFname(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setlname(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Phone No." onChange={(e) => setphone(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-3">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="zmdi zmdi-calendar" />
                                                    </span>
                                                    <input type="date" className="form-control" placeholder="Enter date" onChange={(e) => setdate(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Age" onChange={(e) => setage(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <select className="form-control show-tick" onChange={(e) => setgender(e.target.value)}>
                                                    <option selected disabled>- Gender -</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                            
                                            <div className="col-sm-3">
                                                <select className="form-control m-b-15" onChange={(e) => setdoctor(e.target.value)}>
                                                    <option selected disabled>Select Doctor</option>
                                                {
                                                    results.map((item, index) => {
                                                        return (
                                                            <>
                                                            <option value={item.fname}>{item.fname}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                                </select>
                                                </div>
    
    
                                          
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Enter Your Email" onChange={(e) => setemail(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
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
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <textarea rows={4} className="form-control no-resize" placeholder="Description" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary btn-round" onClick={senddata}>Submit</button>
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
                                        <h2><strong>Registration</strong> Information <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                    <li><a href="javascript:void(0);">Edit</a></li>
                                                    <li><a href="javascript:void(0);">Delete</a></li>
                                                    <li><a href="javascript:void(0);">Report</a></li>
                                                </ul>
                                            </li>
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Doctor Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Staff on Duty" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Ward No." />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="zmdi zmdi-calendar" />
                                                    </span>
                                                    <input type="text" className="datetimepicker form-control" placeholder="Please choose date & time..." />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                        </>
                    ): <></>
                }
                {/* <!-- Chat-launcher --> */}
            
    
    
            </>
        );
    

    
}

export default Add_patient;