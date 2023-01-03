import logo from './logo.svg';
import './App.css';
import LogIn from './login/login';
import NavigationBar from './navBar/navBar';
import Footer from './footer/footer';
import Donations from './donations/donations';
import HomePage from './homePage/homepage';
import {BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import  FirstAidKits  from './firstkits/firstkits'
import  Applyforvolunteer  from './applyforvolunteer/applyforvolunteer'
import  ReportAccident  from './reportaccident/reportaccident'
import  Accident  from './accident/accident'
import  AcceptedAccident  from './acceptedaccident/accepteaccident'
import FinalReport from './final_report/final_report'
import FirstAidSteps from './firstAidSteps/firstAidSteps'
import Login from './login/login'
import Security from './security/security'
import CustomerSupport from './customersupport/customer_support'


function App() {

  return (
    
    <div className="App">
      <NavigationBar />
        
         <Routes>
          <Route path="/kits" element={<FirstAidKits />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/volunteer" element={<Applyforvolunteer />} />
          <Route path="/report" element={<ReportAccident />} />
          <Route path="/accident" element={<Accident />} />
          <Route path="/acceptedaccident" element={<AcceptedAccident />} />
          <Route path="/finalreport" element={<FinalReport />} />
          <Route path="/firststeps" element={<FirstAidSteps />} />
          <Route path="/login" element={<Login />} />
          <Route path="/security" element={<Security />} />
          <Route path="/customer" element={<CustomerSupport />} />
          
         
          </Routes> 
        
    
      {/* <LogIn></LogIn> */}
       {/* <FirstAidKits></FirstAidKits> */}
   
      {/* <Donations></Donations> */}
      
      {/* <Footer />  */}
        
    </div>

    
  );
}

export default App;
