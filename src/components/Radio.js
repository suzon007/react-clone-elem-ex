import React from 'react'
import RadioGroup from './RadioGroup'
import RadioOption from './RadioOption'

class Radio  extends React.Component {
  render() {
    return (
    <RadioGroup name="blizzard-games" className="test">
      <RadioOption label="Warcraft 2" value="wc2" />
      <RadioOption label="Warcraft 3" value="wc3" />
      <RadioOption label="Starcraft 1" value="sc1" />
      <RadioOption label="Starcraft 2" value="sc2" />
    </RadioGroup>
  )
}
}

export default Radio;
