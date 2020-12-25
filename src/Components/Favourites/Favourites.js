import React, { useContext} from 'react';
import {FavouriteContext} from '../FavouritePlanets';
import Fav from './Fav'
import './Favourites.css'


const FavouritePlanets = () => {

    const [favourite] = useContext(FavouriteContext);

    return ( 
        <div className="Favourites">
            <h2>Your Favourite Planets are:</h2>
            <div className="Favourites-List">
            {favourite.map(planet=>(
                <Fav
                name={planet.name} 
                />
            )
            )}
            </div>
        </div>
        
     );
}
 
export default FavouritePlanets;