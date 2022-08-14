import React from 'react';
import Cars from './Cars'

const CarList = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>Car List</h1>
                <Cars brand="Ford" model="Maverick" year="2015" />
                <Cars brand="Polestar" model="6" year="2022" />
                <Cars brand="Ford" model="Focus" year="2019" />
            </div>
        </div>
    );
}

export default CarList;
