import React from 'react';
import RadioOption from './RadioOption'

class RadioGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  renderChildren() {

    return React.Children.map(this.props.children, child => {
      if (child.type === RadioOption) {
        return React.cloneElement(child, {name: this.props.name, className: this.props.className})
      }else{
        return child //for other child elements (link google)
      }
    })
  }

  render() {
    return (
      <div className="radio-group">
        {this.renderChildren()}
      </div>
    )
  }
}

export default RadioGroup;
