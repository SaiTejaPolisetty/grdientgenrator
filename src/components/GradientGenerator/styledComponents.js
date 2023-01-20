// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    ${props =>
      `to ${props.direction}, ${props.selectedColor1}, ${props.selectedColor2}`}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const ContentContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

export const MainHeading = styled.h1`
  color: #ededed;
`
export const SubHeading = styled.p`
  color: #ffffff79;
  font-size: 20px;
`

export const TabList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: center;
`

export const ColorInputContainer = styled.div`
  text-align: center;
`

export const Label = styled.p`
  color: #ffffff79;
  font-weight: 500;
`

export const Input = styled.input`
  width: 100px;
  height: 40px;
`
export const Button = styled.button`
  color: #1e293b;
  border-radius: 10px;
  font-weight: 500px;
  font-size: 15px;
  padding: 10px 15px;
  border: none;
  background-color: #00c9b7;
  cursor: pointer;
  align-self: center;
  margin-top: 10px;
`
