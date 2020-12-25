import React from 'react';
import Planets from '../Planets/Planets'
import Favourites from '../Favourites/Favourites'
import Nav from '../Nav/Nav'
import Homepage from '../Container/Homepage'
import {PlanetProvider} from '../PlanetContext'
import { FavouriteProvider } from '../FavouritePlanets';


import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

const Main = () => {
    return (
    <div>
        <Router>
        <Nav />
        <PlanetProvider>
        <FavouriteProvider>
        <Switch>
                <Route path='/planets' component={Planets} />
                <Route path='/fav' component={Favourites} />
                <Route path='/' exact component={Homepage} />
        </Switch>
        </FavouriteProvider>
        </PlanetProvider>
        </Router>
    </div>
    
     );
}
 
export default Main;