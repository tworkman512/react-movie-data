import React, { Component } from 'react'

class ListFavoriteMovies extends Component {
render() {
  console.log('Props', this.props);
  const users = this.props.users
  const profiles = this.props.profiles
  const movies = this.props.movies
  
	return (
      <div className='favorite-movie-wrapper'>
      	<ul className='movie-list'>
      	{profiles.map((profile) => (
    		<li key={profile.id}>
				{users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}.
			</li>
    	))}
      	</ul>
      </div>
      )
	}
}

export default ListFavoriteMovies