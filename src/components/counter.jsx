import React, { Component } from 'react';
import { getMovies, saveMovie, deleteMovie } from './../data/fakeMovieService';


export default class Counter extends Component {
  state = { 
    count: 0,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  };
  
  render() {

    return (
    <div>
      <span className={this.getBadgeClasses()}>{this.state.count}</span>
      <button className='btn btn-secondary btn-sm' onClick={() => this.increment()}>Increment</button>
      <ul>
        {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
      </ul>
    </div>
    );
  }

  increment = () => {
    this.setState({count: this.state.count + 1 });
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

}