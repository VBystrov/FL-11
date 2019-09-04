import React from 'react';
import './App.css';
import ItemContainer from './components/ItemContainer';
import Basket from './components/Basket';

class App extends React.Component {
  constructor(props) {
    super(props);
    const inBasket = {};
    for (let i = 0; i < this.props.emoji.length; i++) {
      inBasket[this.props.emoji[i].id] = false;
    }
    this.state = { inBasket: inBasket };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (
      e.target.className.search('getButton') !== -1 ||
      e.target.className.search('deleteIcon') !== -1
    ) {
      let buttonId = parseInt(e.target.value);
      this.setState(state => {
        let inBasket = {};
        for (let i = 0; i < this.props.emoji.length; i++) {
          let itemId = this.props.emoji[i].id;
          if (itemId === buttonId) {
            inBasket[itemId] = !state.inBasket[itemId];
          } else {
            inBasket[itemId] = state.inBasket[itemId];
          }
        }
        return {
          inBasket: inBasket
        };
      });
    }
    if (e.target.className.search('purchaseButton') !== -1) {
      this.setState(state => {
        let inBasket = {};
        for (let i = 0; i < this.props.emoji.length; i++) {
          let itemId = this.props.emoji[i].id;
          inBasket[itemId] = false;
        }
        return {
          inBasket: inBasket
        };
      });
    }
  }
  render() {
    return (
      <div className="myApp" onClick={this.handleClick}>
        <ItemContainer
          inBasket={this.state.inBasket}
          emoji={this.props.emoji}
        />
        <Basket inBasket={this.state.inBasket} emoji={this.props.emoji} />
      </div>
    );
  }
}

export default App;
