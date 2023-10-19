import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import "./MentorCard.css";

MentorCard.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function MentorCard({ users }) {
  return (
    <>
      {users.map((user, index) => (
        <>
          <Container id="card">
            <Container key={index + "img"} id="cardImage" className="mb-2">
              <img src={user.profilePicture} />
            </Container>
            <Container key={index} id="cardInfo">
              <h4 className="fw-bold">
                {user.firstName} {user.lastName}
              </h4>
              <h5>
                {user.title} @ {user.company}
              </h5>
              <h5> {user.bio} </h5>
            </Container>
          </Container>
        </>
      ))}
    </>
  );
}

MentorCard.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
    })
  ).isRequired,
};
