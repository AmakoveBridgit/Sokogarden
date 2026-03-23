import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import Mpesa from './components/Mpesa';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
// https://github.com/jimmindungu3/portfolio.git

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <h1 className="text-warning">Sokogarden-Buy and sell online</h1>
      </header>

      <nav className='align-items-center  mt-3 d-flex '>
        <h1 className='garden m-3'>Sokogarden</h1>
        <Link className='m-4  navlink ' to="/signup">Sign Up</Link>
        <Link className=' m-2 navlink'  to="/signin">Sign In</Link>
        <Link className=' m-2 navlink'  to="/">Products</Link>
        <Link className='m-2 navlink'  to="/addproducts">Add Products</Link>
        <Link className=' m-2 navlink' to="/about">About Us</Link>
      </nav>



      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addproducts" element={<AddProducts />} />
        {/* This is the default component */}
        <Route path="/" element={<GetProducts/>} />
        <Route path="/mpesa" element={<Mpesa />} />
        <Route path='/about' element={<AboutUs/>}/>


    </Routes>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
