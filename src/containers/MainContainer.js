import React, {useState, useEffect} from 'react';
import FilmList from '../components/FilmList';
import FilmDetails from '../components/FilmDetails';
import FilmSelect from '../components/FilmSelect';
import FavouriteFilms from '../components/FavouriteFilms';

const MainContainer = () => {
    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [favouriteFilm,setFavouriteFilm] = useState([]);

    useEffect (() => {
        getFilms();
    }, [])

    const getFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films))
    }

    const onFilmClick = function(film){
        setSelectedFilm(film);
    }

    const onFilmSelected = function(selectedFilm){
        const favouriteFilmCopy = [...favouriteFilm]
        if(favouriteFilmCopy.indexOf(selectedFilm) === -1){favouriteFilmCopy.push(selectedFilm)}
        setFavouriteFilm(favouriteFilmCopy);
    }
    
    return(
    <div className ="main-container">
    {selectedFilm ? 
        <FilmDetails selectedFilm={selectedFilm} /> : 
        null}
    <FilmList films={films} onFilmClick={onFilmClick} /> 
    {/* {selectedFilm ? 
        <FilmDetails selectedFilm={selectedFilm} /> : 
        null} */}
    {favouriteFilm ?
        <FavouriteFilms favouriteFilm={favouriteFilm} />
        :
        null}
    <FilmSelect films={films} onFilmSelected={onFilmSelected} />  
    </div>
    )
}






export default MainContainer;