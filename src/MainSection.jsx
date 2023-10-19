import { Button, Container, Form } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import MentorSection from "./mentorSection";
import "./MainSection.css";
import ReviewSection from "./ReviewSection";

export default function MainSection() {
  return (
    <Container className="container-fluid" id="mainSection">
      <Container className="row">
        <Container className="col-lg-6 col-md-12 col-sm-12">
          <img
            className="img-fluid"
            src="https://media.istockphoto.com/id/1334472503/photo/indian-ceo-mentor-leader-talking-to-female-trainee-using-laptop-at-meeting.jpg?s=612x612&w=0&k=20&c=RypRc4QwkdD-ke1kY5dpBfiGpD2mQNFrXwNJj1W-wEo="
            alt="mentor"
          />
        </Container>
        <Container className="col-lg-6 col-md-12 col-sm-12">
          <h1 className="fs-1 fw-bold">
            Learn and grow from world-class mentors
          </h1>
          <p className="fs-2">
            Book and meet over xxxx+ mentors for 1:1 mentorship in our global
            community
          </p>
          <Container className="d-grid gap-4 mt-4">
            <Button variant="dark" className="mx-2 fw-bold" size="lg">
              {" "}
              Find a mentor{" "}
            </Button>
            <Button variant="outline-dark" className="mx-2 fw-bold" size="lg">
              {" "}
              Become a mentor{" "}
            </Button>
          </Container>
        </Container>
      </Container>
      <Container className="text-center ls-wide" id="discover">
        <h3>Discover the world&apos;s top mentors !</h3>
        <Button variant="link" href="#mentorsSection">
          <ArrowDownCircle size={30} />
        </Button>
      </Container>
      <Container id="mentorsSection">
        <MentorSection />
      </Container>
      <Container id="reviewSection">
        <ReviewSection />
      </Container>
      <Container>
        <Container className="text-center ls-wide mt-5" id="signupForm">
          <h1 className="fs-1 fw-bold">
            All your dreams, possible with mentorship
          </h1>
          <h3 className="text-secondary">
            Explore mentors from all around the world and overcome your
            challenges
          </h3>
        </Container>
        <Container className="text-center mt-5" id="formContainer">
          <Form>
            <Form.Group className="mb-3 d-flex">
              <Form.Control
                type="text"
                placeholder="First name"
                className="me-2"
              />
              <Form.Control
                type="text"
                placeholder="Last name"
                className="ms-2"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Occupation" />
            </Form.Group>
            <Container className="d-grid">
              <Button variant="dark" className="fw-bold btn-lg">
                Get Stared
              </Button>
            </Container>
          </Form>
        </Container>
      </Container>
    </Container>
  );
}
