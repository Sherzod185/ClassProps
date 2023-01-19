import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const {img, title, descr, price, skidka} = this.props;
    return (
      <div className="card">
        <div className="card__bady">
          <img src={img} alt="" />
          <h2 className="card__titile">{title}</h2>
          <p className="card__info">{descr}</p>
          <h1 className="card__price">$ {price}</h1>
          <button className="card__btn">VIEW PRODUCT</button>
          <span className="card__skidka"> - %{skidka}</span>
        </div>
      </div>
    );
  }
}
