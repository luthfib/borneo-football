import styled from 'styled-components';
import device from '../utils/ResponsiveHelpers'

const LogoStyled = styled.img`
  padding-right: 25px;

  @media ${device.tabletMd} {
    height: 130px;
  }
`

export default function Logo(props) {
  return (
        <LogoStyled alt="Brand" src={props.src} height={props.height} />
  )
}