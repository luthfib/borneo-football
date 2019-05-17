import Line from '../common/LineStyles'
import styled from 'styled-components';
import device from '../utils/ResponsiveHelpers'

const ContainerStyles = styled.div`
  display: block;
  width: 500px;
  padding-top: 8vh;

  @media ${device.tabletMd} {
    width: 475px;
  }  
`

const FoundationNameStyles = styled.div`
  color: white;
  font-size: 60px;

  @media ${device.tabletMd} {
    font-size: 50px;
  }  
`

const TaglineStyles = styled.div`
  color: white;
  font-size: 35px;
`

export default function Tagline(props) {
  return (
        <ContainerStyles>
            <Line />
            <FoundationNameStyles>{props.foundationName}</FoundationNameStyles>
            <TaglineStyles>{props.tagline}</TaglineStyles>
        </ContainerStyles>
  )
}