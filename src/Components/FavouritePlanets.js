import React,{useState, createContext} from 'react';

export const FavouriteContext = createContext();

export const FavouriteProvider = props =>{
    const [favourite, setFavourite] = useState([]);
    
    return (
        <FavouriteContext.Provider value ={[favourite,setFavourite]}>
            {props.children}
        </FavouriteContext.Provider>
        )
}