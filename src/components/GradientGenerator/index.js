import {Component} from 'react'

import {
  BgContainer,
  ContentContainer,
  MainHeading,
  SubHeading,
  ColorInputContainer,
  Label,
  Input,
  Button,
  TabList,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
class GradientGenerator extends Component {
  state = {
    direction: 'top',
    selectedColor1: ' #8ae323',
    selectedColor2: '#014f7b',
    finalValues: {
      finalDirection: 'top',
      finalSelectedColor1: '#8ae323',
      finalSelectedColor2: '#014f7b',
    },
  }

  selectedColor1Func = event => {
    this.setState({selectedColor1: event.target.value})
  }

  selectedColor2Func = event => {
    this.setState({selectedColor2: event.target.value})
  }

  setDirection = direction => {
    this.setState({direction})
    console.log(direction)
  }

  setFinalValues = () => {
    const {direction, selectedColor1, selectedColor2} = this.state

    this.setState({
      finalValues: {
        finalDirection: direction,
        finalSelectedColor1: selectedColor1,
        finalSelectedColor2: selectedColor2,
      },
    })
  }

  render() {
    const {finalValues, direction, selectedColor1, selectedColor2} = this.state
    const {
      finalDirection,
      finalSelectedColor1,
      finalSelectedColor2,
    } = finalValues
    return (
      <BgContainer
        direction={finalDirection}
        selectedColor1={finalSelectedColor1}
        selectedColor2={finalSelectedColor2}
        data-testid="gradientGenerator"
      >
        <ContentContainer>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <SubHeading>Choose Direction</SubHeading>
          <TabList>
            {gradientDirectionsList.map(obj => (
              <GradientDirectionItem
                tabDetails={obj}
                key={obj.directionId}
                directionFunc={this.setDirection}
                selectedTab={direction}
              />
            ))}
          </TabList>
          <SubHeading>Pick the Colors</SubHeading>
          <ColorInputContainer>
            <Label>{selectedColor1}</Label>
            <br />
            <Input
              type="color"
              onChange={this.selectedColor1Func}
              value={selectedColor1}
            />
          </ColorInputContainer>
          <ColorInputContainer>
            <Label>{selectedColor2}</Label>
            <br />
            <Input
              type="color"
              onChange={this.selectedColor2Func}
              value={selectedColor2}
            />
          </ColorInputContainer>
          <Button type="button" onClick={this.setFinalValues}>
            Generate
          </Button>
        </ContentContainer>
      </BgContainer>
    )
  }
}

export default GradientGenerator
