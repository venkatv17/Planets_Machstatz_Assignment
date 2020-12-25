import React, { useContext} from 'react';
import Planet from './Planet/Planet'
import {PlanetContext} from '../PlanetContext'
import {FavouriteContext} from '../FavouritePlanets'
import './Planets.css'


const Planets = () => {

    const [planets] = useContext(PlanetContext);

    const [favourite] = useContext(FavouriteContext);

    const clickHandler=(planet,isFavourite)=>{
        for(let i=0;i<planets.length;i++){
            if(planets[i].name===planet){
                let temp =planets[i].isFavourite;
                planets[i].isFavourite= !temp;
            }
        }
    }

    const submitHandler=event=>{
        event.preventDefault();
        planets.map(planet=>{
            if(planet.isFavourite===true){
                favourite.push(planet);
                
            }
            return null;
        })
        let favouriteNames =[];
        favourite.map(planet=>{
            favouriteNames.push(planet.name);
            return null;
    })
        alert("Your favourites are: "+favouriteNames);
        
    }

    return ( 
        <div className="PlanetsBackground">
        {planets.map(planet=>(
            <Planet 
            name={planet.name}
            key={planet.id}
            isFavourite={planet.isFavourite}
            clicked={clickHandler}/>
        )   
        )}
        <div  className="Submit">
        <button type="submit" onClick={submitHandler}>Add Favourites</button>
        </div>
        </div>
     );
}
 
export default Planets;