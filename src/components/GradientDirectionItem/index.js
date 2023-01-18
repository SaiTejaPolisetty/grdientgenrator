// Write your code here

import Button from './styledComponents'

const GradientDirectionItem = props => {
  const {tabDetails, directionFunc, selectedTab} = props
  const {value, displayText} = tabDetails

  const setDirection = () => {
    directionFunc(value)
  }

  return (
    <li>
      <Button
        /* bgColor={value === selectedTab ? '#ededed' : '#ffffff79'} */
        opacity={value === selectedTab ? 1 : 0.5}
        onClick={setDirection}
        type="button"
      >
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
