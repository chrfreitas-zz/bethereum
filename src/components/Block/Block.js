import React, { Component } from 'react';

class Block extends Component {
  render() {
    const { data } = this.props;
    return <li>{data.number}</li>;
  }
}

export default Block;
