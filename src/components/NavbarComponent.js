import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar variant="dark" light expand="md">
                <NavbarBrand href="/">
                    <img src="./assets/pokemonlogo.png"></img>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{ color: 'white' }} href="/"><strong>Explore Pokemon</strong></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: 'white' }} href="#"><strong>My Pokemon List</strong></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}

export default NavbarComponent;