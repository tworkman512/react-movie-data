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
			{profiles.map( (profile) => {
              const userName = users[profile.userID].name;
			  const favoriteMovie = movies[profile.favoriteMovieID].name;
              return (
              	<li key={profile.id}>
                {`${userName}\'s favorite movie is "${favoriteMovie}".`}
				</li>
              )
            })}	
      	</ul>
      </div>
      )
	}
}

export default ListFavoriteMovies