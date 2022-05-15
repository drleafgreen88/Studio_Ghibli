import React from 'react';

const Film = ({film, onFilmClick}) => {

    const handleClick = function(){
        onFilmClick(film);
    }


    // return <li onClick = {handleClick}>{film.title} ({film.release_date}), {film.original_title}</li>

    return <div class="film_posters" onClick = {handleClick}>
        <img id="image" class="film-image" src={film.image} />
    </div> 
}




export default Film;