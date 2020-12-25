import React,{useState, createContext, useEffect} from 'react';

export const PlanetContext = createContext();

export const PlanetProvider = props =>{
    
    
    useEffect(()=>{
        fetchPlanets()
    },[]);

    const [planets, setPlanets] = useState([]);

    const fetchPlanets = async() => {
        const data = await fetch('https://assignment-machstatz.herokuapp.com/planet');
        const planet = await data.json();
        console.log(planet);
        setPlanets(planet);
    }

    return (
        <PlanetContext.Provider value={[planets,setPlanets]}>
            {props.children}
        </PlanetContext.Provider>
        )
}