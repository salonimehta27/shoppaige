import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {useState,useEffect} from "react"
import Home from './Home';
import {useSelector,useDispatch} from "react-redux"
import {currentUserAdded} from "./features/signup/signinSlice"
import { cartProductsAdded,totalAdded } from './features/cart/cartsSlice';
import Signin from './features/signup/Signin';
import NavbarDisplay from './NavbarDisplay';
import Signup from './features/signup/Signup';
import ProductDetails from './features/products/ProductDetails';
import AddProduct from './features/products/AddProduct';
import CurrentUserListings from './features/products/CurrentUserListings';
import Cart from './features/cart/Cart';
import PaymentComplete from './features/cart/PaymentComplete';
import Checkout from './features/cart/Checkout';


function App() {
  const currentUser=useSelector((state)=>state.currentUser.entities)
  const cartData=useSelector((state)=>state.carts.entities)
  const dispatch=useDispatch()
  const[currentProduct,setCurrentProduct]=useState(null)
  useEffect(()=>{
    fetch("/me")
    .then((r)=>{
      if(r.ok){
        r.json().then(user=>dispatch(currentUserAdded(user)))
      }
    })
    fetch(`/myCart`)
    .then(res=>res.json())
    .then(data=>{
      dispatch(cartProductsAdded(data))
    })
    if(currentUser!==undefined && cartData!==null && cartData!==undefined){
      if(cartData.ok){
      const total=cartData.cart_products.reduce((acc,x)=>acc+=x.product.price,0)
      dispatch(totalAdded(total))
      }
     }
  },[])

  
  // function handleCurrentProduct(product){
  //   setCurrentProduct(product)
  // }
 
  return (
    <div>
       
      <NavbarDisplay currentUser={currentUser} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} currentUser={currentUser}/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/signup" element={<Signup /> }/>
          <Route exact path="/products/:id" element={<ProductDetails product={currentProduct} currentUser={currentUser}/>}/>
          <Route exact path="/addProduct" element={<AddProduct currentUser={currentUser}/>}/>
          <Route exact path="/yourListings/:id" element={<CurrentUserListings currentUser={currentUser}/>}/>
          <Route exact path="/carts/:id" element={<Cart currentUser={currentUser}/>} />
          <Route exact path="/paymentComplete" element={<PaymentComplete/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          {/* <Route exact path="/cardPayment" element={<StripeContainer name={name} address={address}/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
