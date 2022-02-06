import React from 'react';
import {DropdownButton,Dropdown} from "react-bootstrap"
function Filter() {
  return <DropdownButton id="dropdown-basic-button" variant="dark" title="Filter By Category">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
}

export default Filter;
