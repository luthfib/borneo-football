import styled from 'styled-components';

const LogoStyled = styled.img`
  padding-right: 25px;
`

export default function Logo(props) {
  return (
        <LogoStyled alt="Brand" src={props.src} height={props.height} />
  )
}