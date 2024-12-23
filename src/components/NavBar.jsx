import iconPizza from '../assets/img/icon-pizza.png'
import { Navbar, Nav, Container } from 'react-bootstrap';
import FormatoMiles from './FormatoMiles';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const total = 25000;
    const token = false;

  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand>MammaMia Pizzeria ♥</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto mb-2 mb-lg-0">
                        <Nav.Item className="cls-item-spacing navBtn">
                            <Link to='/' variant="outline-light" size="sm"><img src={iconPizza} alt="iconoPizza"></img> Home</Link>
                        </Nav.Item>
                        <Nav.Item className="cls-item-spacing navBtn">
                            <Link to='/login' variant="outline-light" size="sm">{token ? '🔓 Profile' : '🔐 Login'}</Link>
                        </Nav.Item>
                        <Nav.Item className="cls-item-spacing navBtn">
                            <Link to='/register' variant="outline-light" size="sm">{token ? '🔒 Logout' : '🔐 Register'}</Link>
                        </Nav.Item>

                        <Nav.Item className="cls-item-spacing navBtn">
                            <Link to='/profile' variant="outline-light" size="sm">{'🔒 Profile'}</Link>
                        </Nav.Item>
                        <Nav.Item className="cls-item-spacing navBtn">
                            <Link to='/pizza001' variant="outline-light" size="sm">{' 🍕 Pizza p001 '}</Link>
                        </Nav.Item>
                        <Nav.Item className="cls-item-spacing navBtn">
                            <Link to='/e404' variant="outline-light" size="sm">{' 💀 Error404'}</Link>
                        </Nav.Item>
                    </Nav>

                    
                    <div className="d-flex">
                        <Link to='/cart' variant="outline-info" size="sm">🛒Total: $<FormatoMiles numero={total} /></Link>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar;