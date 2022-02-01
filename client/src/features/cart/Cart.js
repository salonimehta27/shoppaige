import React,{useState} from 'react';

function Cart() {
    const[showItem,setShowItem]=useState(false)
  return <div>
       {showItem?<StripeContainer/>:<><h3>$10.00</h3><button onClick={()=>setShowItem(true)}>Purchase</button></>}
  </div>;
}

export default Cart;
