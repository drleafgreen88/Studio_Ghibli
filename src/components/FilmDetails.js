import React from 'react';

const FilmDetails = ({selectedFilm}) => {
    return (

        <div>
            <h3>{selectedFilm.description}</h3>
            <img id="movie_banner" src={selectedFilm.movie_banner} />
        </div>
    )
}




export default FilmDetails;