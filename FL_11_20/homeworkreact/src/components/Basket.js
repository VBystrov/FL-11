import React from 'react';
import './Basket.css';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inBasket: props.inBasket };
    this.handleClick = this.handleClick.bind(this);
    this.basketEmpty = true;
  }

  handleClick() {
    alert('Purchase completed!');
  }

  render() {
    this.basketEmpty = true;
    for (let i in this.props.inBasket) {
      if (this.props.inBasket[i]) {
        this.basketEmpty = false;
      }
    }
    let basket;
    if (this.basketEmpty) {
      basket = <p className="emptyBasket-text">No items to purchase</p>;
    } else {
      let emojiInBasket = this.props.emoji.filter(item => {
        let bool = this.props.inBasket[item.id];
        return bool;
      });
      var purchaseSum = 0;
      for (let i = 0; i < emojiInBasket.length; i++) {
        purchaseSum += emojiInBasket[i].price;
      }
      basket = emojiInBasket.map(function(item) {
        return (
          <div className="basketItem" key={item.id}>
            <span className="basketItem-title">{item.title}</span> -{' '}
            <span>{item.price}$</span>
            <button value={item.id} className="deleteIcon">
              X
            </button>
          </div>
        );
      });
    }
    return (
      <div className="basket">
        <p className="basket-title">Basket</p>
        <div>{basket}</div>
        {!this.basketEmpty && (
          <button onClick={this.handleClick} className="purchaseButton">
            Purchase ({purchaseSum}$)
          </button>
        )}
      </div>
    );
  }
}

export default Basket;
