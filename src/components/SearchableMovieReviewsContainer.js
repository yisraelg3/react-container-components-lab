import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  
  state = {
    reviews: [],
    searchTerm: ''
  }

    componentDidMount = () => {
      fetch(URL)
      .then(res => res.json())
      .then(reviewsArray => this.setState({reviews: reviewsArray.results}))
  }
    render() {
    return (
      <div className='latest-movie-reviews'>
          <h2>Search Results</h2>
        <MovieReviews  reviews={this.state.reviews}/>
      </div>
    )
  }
}
