import React from 'react';
import './App.css';
import GetTherapy from './components/GetTherapy/GetTherapy';
import SignUp from './components/Register/Login/SignUp'
import Home from './components/Home/Home/Home';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Login from './components/Register/Login/Login';
import TherapySelection from './components/Register/TherapySelection/TherapySelection';
import AuthProvider from './context/AuthProvider';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import AddData from './components/Admin/AddData';
import Welcome from './components/WelcomePage/Welcome';
import TherapySection from './components/TherapySection/TherapySection';
import TherapyInfo from './components/GetTherapy/TherapyInfo';
import Event from './components/Event/Event';
import PrivateRoute from './components/Register/PrivateRoute/PrivateRoute';


function App() {
  
return (
  <div className = "app">
    <AuthProvider>
  <BrowserRouter> 
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/event-session' element={<Event/>}></Route>
          <Route path='getTherapy' element={<GetTherapy />}></Route>
          <Route path='registration' element={<SignUp/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/addData' element={<AddData/>}></Route>
          <Route path='/welcome' element={<Welcome/>}></Route>
          <Route path='/therapy' element={<TherapySection/>}></Route>
          <PrivateRoute path='/therapyInfo'  element={<TherapyInfo/>} ></PrivateRoute>
          <Route path='/therapySelection' element={<TherapySelection/>} ></Route>
        </Routes>    
    
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;