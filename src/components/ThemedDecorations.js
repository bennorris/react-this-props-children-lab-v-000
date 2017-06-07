import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const decWithProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child,
        {className: this.props.theme});
    })
    return (
      <div>
        {decWithProp}
      </div>

    )
  }

}
