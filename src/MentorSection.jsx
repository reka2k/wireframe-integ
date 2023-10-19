import { Button, Container } from "react-bootstrap";
import MentorCard from "./MentorCard";
import { ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import "./MentorSection.css";

export default function MentorSection() {
  const users = [
    {
      firstName: "John",
      lastName: "Smith",
      title: "CEO",
      company: "Google",
      bio: "I am a mentor",
      profilePicture: "https://placehold.co/300x300",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      title: "CEO",
      company: "Facebook",
      bio: "I am a mentor",
      profilePicture: "https://placehold.co/300x300",
    },
    {
      firstName: "Peter",
      lastName: "Parker",
      title: "CEO",
      company: "Apple",
      bio: "I love saving my city",
      profilePicture: "https://placehold.co/300x300",
    },
    {
      firstName: "Tony",
      lastName: "Stark",
      title: "CEO",
      company: "Stark Industries",
      bio: "Making tech since forever",
      profilePicture: "https://placehold.co/300x300",
    },
  ];

  return (
    <>
      <Container id="mentorsButtonRow" className="justify-content-end d-flex ">
        <Button variant="outline-dark">Explore all mentors</Button>
        <Button variant="link" className="pe-1 ps-3 linkIcon">
          <ArrowLeftCircle size={30} />
        </Button>
        <Button variant="link" className="px-1 linkIcon me-3">
          <ArrowRightCircle size={30} />
        </Button>
      </Container>
      <Container className="row">
        <MentorCard users={users} />
      </Container>
    </>
  );
}
