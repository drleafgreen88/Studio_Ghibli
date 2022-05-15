import React from 'react';

const FilmSelect = ({films, onFilmSelected}) => {

    const handleChange = function(event) {
        const chosenFilm = films[event.target.value];
        onFilmSelected(chosenFilm)
    }

    const filmOptions = films.map((film,index) => {
        return <option value={index} key={index}>{film.title}</option>
    })

    return(
        <div>
            <div class="clear"></div>
            <h2>Favourite Films</h2>
            <select defaultValue="" onChange={handleChange}>
                <option value="" selected>Choose Your Favourite Film</option>
                {filmOptions}
            </select>
        </div>
    )

}



export default FilmSelect;