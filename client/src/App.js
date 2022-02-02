import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {useState,useEffect} from "react"
import Home from './Home';
import {useSelector,useDispatch} from "react-redux"
import {currentUserAdded} from "./features/signup/signinSlice"
import Signin from './features/signup/Signin';
import NavbarDisplay from './NavbarDisplay';
import Signup from './features/signup/Signup';
import DisplayProducts from './features/products/DisplayProducts';
import ProductDetails from './features/products/ProductDetails';
import AddProduct from './features/products/AddProduct';
import Searchbar from './Searchbar';
import CurrentUserListings from './features/products/CurrentUserListings';
import StripeContainer from './StripeContainer';
import Cart from './features/cart/Cart';


function App() {
  // const[currentUser,setCurrentUser]=useState(null)
  //passing the client secret obtained from the server
  // const options={
  //   clientSecret:
  // }
 
  const currentUser=useSelector((state)=>state.currentUser.entities)
  const dispatch=useDispatch()
  const[currentProduct,setCurrentProduct]=useState(null)
  useEffect(()=>{
    fetch("/me")
    .then((r)=>{
      if(r.ok){
        r.json().then(user=>dispatch(currentUserAdded(user)))
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
       
      <NavbarDisplay currentUser={currentUser} />
      {/* <Searchbar/> */}
     
      <Router>
        <Routes>
          <Route exact path="/" element={<Home currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/signup" element={<Signup /> }/>
          <Route exact path="/products/:id" element={<ProductDetails product={currentProduct}/>}/>
          <Route exact path="/addProduct" element={<AddProduct/>}/>
          <Route exact path="/yourListings/:id" element={<CurrentUserListings currentUser={currentUser}/>}/>
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
