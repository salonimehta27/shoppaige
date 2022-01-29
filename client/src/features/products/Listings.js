import React from 'react'
import {Tab,Row,ListGroup,Col} from "react-bootstrap"

function Listings({listing}) {
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href={`/products/${listing.id}`}>
                {listing.name}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    )
}

export default Listings
