import styled from 'styled-components';

const Button = styled.button`
  background: rgba(223, 0, 18, 1);
  color: white;
  border: none;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  :hover {
    background-color: rgba(223, 0, 18, .7);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    color: #fff;
    transform: translateY(-2px);
    cursor: pointer; 
  }
`

const BlueButton = styled(Button)`
    background: rgb(226, 241, 255);
    color: rgba(223, 0, 18, 1);
    font-size: 22px;
    border-radius: 45px;
    padding-left: 30px;
    padding-right: 30px;

    :hover {
    color: rgba(223, 0, 18, 1);
    background-color: rgb(226, 241, 255, .9);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
}
`

export { Button, BlueButton };