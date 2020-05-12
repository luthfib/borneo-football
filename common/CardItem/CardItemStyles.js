import styled from 'styled-components';

const CardItemContentStyles = styled.div`
  font-size: 18px;
  line-height: 1.8;
  font-weight: 400;
`;

const CardItemHeadingStyles = styled.div`
  color: rgba(223, 0, 18, 1);
  font-weight: 500;
  font-size: 25px;
  background: 'green';
`;

const CardItemImgStyles = styled.img`
  height: 125px;
  padding-bottom: 15px;
`;

const CardItemStyles = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
`;

export {
  CardItemContentStyles,
  CardItemHeadingStyles,
  CardItemImgStyles,
  CardItemStyles,
};
