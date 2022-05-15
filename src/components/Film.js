import React from 'react';

const Film = ({film, onFilmClick}) => {

    const handleClick = function(){
        onFilmClick(film);
    }


    return <li onClick = {handleClick}>{film.title} ({film.release_date})</li>
}




export default Film;