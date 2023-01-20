// Style your elements here
import styled from 'styled-components'

const Button = styled.button`
  color: #1e293b;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  padding: 5px 15px;
  border: none;
  background-color: #ededed;
  margin: 10px;
  cursor: pointer;
  opacity: ${props => props.opacity};
`

export default Button
