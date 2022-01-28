import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {useState,useEffect} from "react"
import Home from './Home';
import Signin from './features/signup/Signin';
import NavbarDisplay from './NavbarDisplay';
import Signup from './features/signup/Signup';
import DisplayProducts from './features/products/DisplayProducts';
import ProductDetails from './features/products/ProductDetails';
import AddProduct from './features/products/AddProduct';
import Searchbar from './Searchbar';
import CurrentUserListings from './features/products/CurrentUserListings';

function App() {
  const[currentUser,setCurrentUser]=useState(null)
  const[currentProduct,setCurrentProduct]=useState(null)
  useEffect(()=>{
    fetch("/me")
    .then((r)=>{
      if(r.ok){
        r.json().then(user=>setCurrentUser(user))
      }
    })
  },[])
  console.log(currentUser)

  function handleCurrentProduct(product){
    setCurrentProduct(product)
  }
  console.log(currentProduct)
  return (
    <div>
       
      <NavbarDisplay currentUser={currentUser} setUser={setCurrentUser}/>
      {/* <Searchbar/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>}/>
          <Route exact path="/signin" element={<Signin onSignin={setCurrentUser}/>}/>
          <Route exact path="/signup" element={<Signup setCurrentUser={setCurrentUser}/> }/>
          <Route exact path="/products/:id" element={<ProductDetails product={currentProduct}/>}/>
          <Route exact path="/addProduct" element={<AddProduct/>}/>
          <Route exact path="/yourListings/:id" element={<CurrentUserListings currentUser={currentUser}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
