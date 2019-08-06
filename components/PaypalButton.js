import styled from 'styled-components';
import { Button } from '../common/ButtonStyles'

const DonateFormStyles = styled.form`
  height: 0px;
`;

const PaypalContainer = styled.div`
  padding: ${props => (props.padding ? props.padding : '')};
  padding-left: ${props => (props.padding_left ? props.padding_left : '')};
`;

export default function PaypalButton(props) {
  return (
    <PaypalContainer {...props}>
      <DonateFormStyles
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
        id="DonateForm"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="5PPY7MEKD8LMQ" />
      </DonateFormStyles>
      <Button {...props} type="submit" form="DonateForm" value="Submit">
        {props.children}
      </Button>
    </PaypalContainer>
  );
}
