import React from 'react'

const MovieDetails = ({ match, movieList }) => {
    console.log(match);
    console.log(movieList);
    const movieList=movieList.find(movieList => movieList.id.tostring() === match.params.id)
    return (
        <div>

        </div>
    )
}

export default MovieDetails
