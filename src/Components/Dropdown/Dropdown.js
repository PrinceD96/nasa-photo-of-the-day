import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ApodSelector = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Date
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>11/21</DropdownItem>

      </DropdownMenu>
    </Dropdown>
  );
}

export default ApodSelector;