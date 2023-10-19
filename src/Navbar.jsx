import { Navbar, Nav, Button, Container } from "react-bootstrap";
export default function HeaderNavbar() {
  const logoClickHandler = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  };
  // navbar using react-bootstrap
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5 fixed-top">
      <Container>
        <Navbar.Brand href="#" onClick={logoClickHandler}>
          MatchMentor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Find a mentor</Nav.Link>
            <Nav.Link href="#">Become a mentor</Nav.Link>
            <Button variant="outline-dark mx-1" expand="lg">
              Login
            </Button>
            <Button variant="dark" className="mx-1" expand="lg">
              Sign up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
