import React from "react";
import { MDBCol } from "mdbreact";
import Filter from "./Filter";

const Searchbar = () => {
  return (
    <MDBCol md="3" style={{marginTop:"80px"}}>
      <Filter/>
      <input className="form-control" style={{float:"left"}} type="text" placeholder="Search" aria-label="Search" />
      
    </MDBCol>
  );
}

export default Searchbar
