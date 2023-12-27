import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import MyNotes from '../../screens/MyNotes/MyNotes';

function BasicExample() {
  return (
    <Navbar bg="primary" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to='/'>My App 1.1</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='m-auto'>
            <Form inline>
              <FormControl
              type="text"
              placeholder="search"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="/mynotes">
              <Link to='mynotes'>My Notes</Link>
              </Nav.Link>
            <Nav.Link href="#link">My Links</Nav.Link>
            <NavDropdown title="JEROME" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dashbord
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicExample;
//   )
// }

// export default Header