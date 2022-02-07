import React from "react";
import { MDBCol } from "mdbreact";
import {Container,Row,Col} from "react-bootstrap"
import Filter from "./Filter";

const Searchbar = ({search,setSearch}) => {

  return (
   
      <Container  style={{marginTop:"75px"}}>
        <Row>
          <Col sm={4}>
          <Filter/>
          </Col>
          <Col>
          <input className="form-control" type="text" placeholder="Search"value={search} onChange={(e)=>setSearch(e.target.value)} aria-label="Search" />
          </Col>
        </Row>
      </Container>
     
      
      
 
  );
}

export default Searchbar
