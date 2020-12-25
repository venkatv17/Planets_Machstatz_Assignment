import React from 'react';
import './Planet.css'

const Planet = ({name,isFavourite,clicked}) => {

    return ( 
        <div className="Planet">
            <h4>{name}</h4>
            <input type="checkbox" onClick={()=>clicked(name,isFavourite)} />
        </div>
     );
}
 
export default Planet;