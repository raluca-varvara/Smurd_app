import logo from './logo.svg';
import './App.css';
import LogIn from './login/login';
import NavigationBar from './navBar/navBar';
import Footer from './footer/footer';
import Donations from './donations/donations';
import HomePage from './homePage/homepage';
import FinalReport from './final_report/final_report';
import FirstAidSteps from './firstAidSteps/firstAidSteps';
import CustomerSupport from './extra/customer_support';
import Security from './extra/security';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      {/* <LogIn></LogIn> */}
      {/* <HomePage></HomePage> */}
      <Donations></Donations>
      {/* <FinalReport></FinalReport> */}
      {/* <FirstAidSteps type = "fainting"/> */}
      {/* <Security/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
