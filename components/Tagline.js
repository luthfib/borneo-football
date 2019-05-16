import Line from '../common/LineStyles'
import styled from 'styled-components';

const ContainerStyles = styled.div`
  display: block;
  width: 550px;
`

const FoundationNameStyles = styled.div`
  color: white;
  font-size: 60px;
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