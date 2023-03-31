import { Route, Routes } from 'react-router-dom';
import './App.css';
// css
import './css/assets/plugins/bootstrap/css/bootstrap.min.css';
import './css/hospital management Admin/assets/plugins/jvectormap/jquery-jvectormap-2.0.3.min.css';
import './css/hospital management Admin/assets/plugins/morrisjs/morris.min.css';
import './css/hospital management Admin/light/assets/css/main.css';
import './css/hospital management Admin/light/assets/css/color_skins.css';
import './css/hospital management Admin/assets/plugins/dropzone/dropzone.css';
// components
import Do_sign_in from './do_component/Do_sign_in';
import Do_sign_up from './do_component/Do_sign_up';
import Index from './do_component/Index';
import Dashboard from './do_component/Dashboard';
import Do_add from './do_component/Do_add';
import Doctors from './do_component/Doctors';
import Add_patient from './user_component/Add_patient';
import Patient from './user_component/Patient';
import Profile_doctor from './do_component/Profile_doctor';

function App() {
  return (
    <div className='theme-cyan' >
      <div className="App">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/' element={(window.localStorage.getItem('hs_user_id') == null) ? <Do_sign_in /> : <Index />} />
          <Route path='/home' element={(window.localStorage.getItem('hs_user_id') != null) ? <Index/> : <Do_sign_in />} />
          <Route path='/signup' element={<Do_sign_up />} />
          {/* <Route path='/dash' element={<Dashboard />} /> */}
          <Route path='/dash' element={(window.localStorage.getItem('hs_user_id') == null) ? <Do_sign_in/> : <Dashboard/>}  />
          {/* <Route path='/dash' element={(window.localStorage.getItem('hs_user_id') != null) ? <Dashboard/> : <Do_sign_in />} /> */}
          <Route path='/signin' element={<Do_sign_in />} />

          {/* {doctor} */}
          <Route path="/adddoctor" element={<Do_add />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path='/doctor-profile/:doctor_id' element={<Profile_doctor />} />  

          {/* patient */}
          <Route path="/addpatient" element={<Add_patient />} />
          <Route path="/patient" element={<Patient />} />


        </Routes>

      </div>

    </div>

  );
}

export default App;
