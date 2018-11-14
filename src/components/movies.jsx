import React, { Component } from 'react';
import { getMovies, saveMovie, deleteMovie } from './../data/fakeMovieService';


export default class Movies extends Component {
  state = { 
    count: 0,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3'],
    movies: getMovies()
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    console.log('new array of movies: ' , movies);
    this.setState({ movies });
  }
  
  render() {

    console.log(getMovies())

    let movies = this.state.movies.map((movie, i) => { 
      return <tr key={movie._id}>
      <td>{i + 1}</td>
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>{<button className="btn-danger btn.sm" onClick={() => this.handleDelete(movie)}>Delete</button>}</td>
             </tr>
    });

    const { length } = this.state.movies;

    if (length === 0) {
      return <h3>There are no movies in the database</h3>
    }

    return (

      <div>
        <h3>There are { length } movies in the database</h3>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
              {movies}
          </tbody>
        </table>
      </div>
    );
  }

}