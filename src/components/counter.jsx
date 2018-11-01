import React, { Component } from 'react';

export default class Counter extends Component {
  state = { 
    count: 1,
    imageUrl: 'https://picsum.photos/200'
  };
  
  render() { 

    return (
    <React.Fragment>
      <span className={this.getBadgeClasses()}>{this.state.count}</span>
      <button className='btn btn-secondary btn-sm'>Increment</button>
    </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

}
 