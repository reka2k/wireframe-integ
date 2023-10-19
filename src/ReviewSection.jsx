import { Container } from "react-bootstrap";
import ReviewCard from "./ReviewCard";

export default function ReviewSection() {
  const people = [
    {
      firstName: "Jackie",
      lastName: "Chan",
      title: "Stockmarket entuthiast",
      company: "Home",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ult",
    },
    {
      firstName: "Ana",
      lastName: "De Armas",
      title: "Actress",
      company: "Hollywood",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ult",
    },
    {
      firstName: "Jake",
      lastName: "Gyllenhaal",
      title: "Actor",
      company: "Hollywood",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ult",
    },
  ];
  return (
    <Container className="container-fluid bg-dark text-white text-center mt-5 row">
      <h2 className="mt-3">Here&apos;s what they think about us</h2>
      <ReviewCard reviewers={people} />
    </Container>
  );
}
