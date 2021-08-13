import "./navBar.scss";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import _ from "lodash";

const NavBar = ({ categories }) => {

    const renderedDropdownitem = categories && categories.map((articles) => (
        <NavDropdown.Item href={`/${articles.name.replace(/\s+/g, '-').toLowerCase()}`}>{articles.name}</NavDropdown.Item>
    ))
    console.log(categories)

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className="container-navbar b-800" >
                    <Navbar.Brand className="title " href="/">LINE TODAY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ml-auto">
                        <Nav className="ms-auto f-14 b-400">
                            <Nav.Link href="/top">TOP</Nav.Link>
                            <Nav.Link href="/">For You</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                {renderedDropdownitem}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
