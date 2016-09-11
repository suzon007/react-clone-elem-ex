import React from 'react'

class RadioOption extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <label>
      <input type="radio" value={this.props.value} name={this.props.name} className={this.props.className} />
      {this.props.label}
      </label>
    )
  }
}

export default RadioOption;
