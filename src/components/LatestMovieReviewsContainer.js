import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  
    state = {
        reviews: []
    }

    componentDidMount = () => {
      fetch(URL)
      .then(res => res.json())
      .then(reviewsArray => {
        this.setState({reviews: reviewsArray.results})
        // console.log(this.state.reviews)
        })
    }
  

    render() {
        const reviewArr = this.state.reviews.map((review) => <MovieReviews review={review.critics_pick}/>) 
        return (
            <div className='latest-movie-reviews'>
                <h2>Latest Titles</h2>
                {reviewArr}
            </div>
        )
    }
}
