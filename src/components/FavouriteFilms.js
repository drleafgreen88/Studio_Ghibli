import React from 'react';
import Film from './Film';

const FavouriteFilms = ({favouriteFilm}) => {

    const favouritesItems = favouriteFilm.map((film,index) => {
        return <Film film={film} key={index} />
    })

    return (
        <container>
        <h2>Favourite Films</h2>
            <ul>
                {favouritesItems}
            </ul>
        </container>
    )
}




export default FavouriteFilms;