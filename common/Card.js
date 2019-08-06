import styled from 'styled-components';
import PropTypes from 'prop-types';
import CardItem from './CardItem/CardItem';

const CardStyles = styled.div`
  width: 33%;
  background: rgb(226, 241, 255);

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
`;

function Card(props) {
  const { src, heading, content, button } = props;
  return (
    <CardStyles>
      <CardItem
        src={src}
        heading={heading}
        content={content}
        button={button}
      ></CardItem>
    </CardStyles>
  );
}

Card.propTypes = {
  src: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.string,
};

export default Card;
