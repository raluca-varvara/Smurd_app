import logo from './logo.svg';
import './App.css';
import LogIn from './login/login';
import NavigationBar from './navBar/navBar';
import Footer from './footer/footer';
import Donations from './donations/donations';
import HomePage from './homePage/homepage';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      {/* <LogIn></LogIn> */}
      <HomePage></HomePage>
      <Donations></Donations>
      <Footer/>
    </div>
  );
}

export default App;
