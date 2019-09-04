import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: !this.props.buttonInactive };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  componentDidUpdate(prevProps) {
    if (!this.props.buttonInactive !== this.state.isToggleOn) {
      this.setState({ isToggleOn: !this.props.buttonInactive });
    }
  }

  render() {
    return (
      <button
        value={this.props.id}
        onClick={this.handleClick}
        className={
          this.state.isToggleOn
            ? 'getButton getButton-active'
            : 'getButton getButton-disabled'
        }
      >
        {`Get (${this.props.price}$)`}
      </button>
    );
  }
}

export default Button;
