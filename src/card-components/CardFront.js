import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    console.log('hello from FrontCard', this.props.poster)
    return (
      <div
				className="card-front"
				style={{ backgroundImage: `url(${this.props.poster})` }}
			/>
    )
  }
}
