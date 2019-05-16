import styled from 'styled-components';

const Line = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 3px solid  ${props => props.primary ? "white" : 'rgba(223, 0, 18, 1)'};
  width: 60px;
  margin-left: ${props => props.override ? props.override : '0px'};
`
export default Line;