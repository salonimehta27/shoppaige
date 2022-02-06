import React from 'react'
import {Tab,Row,ListGroup,Col, Container,Badge} from "react-bootstrap"

function Listings({listing}) {
    return (
      <Container>
        <ListGroup as="ol">
        <ListGroup.Item
         action href={`/products/${listing.id}`}
         className="d-flex justify-content-between align-items-start"
         >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{listing.name} ${listing.price}</div>
        {listing.description.length>50?`${listing.description.substring(0,50)}...`:listing.description}
       </div>
       <Badge variant="primary" pill>
        {listing.quantity}
      </Badge>
  </ListGroup.Item>
  </ListGroup>
        {/* <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href={`/products/${listing.id}`}>
                Name: {listing.name}, Desc: {listing.description}, Price: ${listing.price}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container> */}
      </Container>
    )
}

export default Listings
