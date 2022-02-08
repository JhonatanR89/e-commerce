import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import carIcon from '../icon/carIcon'

const NavBar = () => {
  return (   
    <NavBar bg="light" expand="lg">
      <Container> 
        <Navbar.Brand href="#home">Car selected</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <carIcon />
      </Container>
    </NavBar>
  );
};
export default NavBar;