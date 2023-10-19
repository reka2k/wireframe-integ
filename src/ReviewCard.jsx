import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "./ReviewCard.css";

export default function ReviewCard({ reviewers }) {
  return (
    <>
      {reviewers.map((reviewer, index) => (
        <>
          <Container id="reviewCard">
            <Container
              key={index + "review"}
              id="cardInfo"
              className="text-start"
            >
              <p className="fw-medium mt-2"> {reviewer.review} </p>
              <h5 className="fw-bold">
                {reviewer.firstName} {reviewer.lastName}
              </h5>
              <h5>
                {reviewer.title} @ {reviewer.company}
              </h5>
            </Container>
          </Container>
        </>
      ))}
    </>
  );
}

ReviewCard.propTypes = {
  reviewers: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
    })
  ).isRequired,
};
