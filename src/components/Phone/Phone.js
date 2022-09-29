import React from 'react';
import '../../App.css'

const Phone = (props) => {
    const {id, name, price, img} = props.phone;
    return (
        <div className='phone'>
            <h3>{name}</h3>
            <img src={img} alt="iPhone"></img>
            <h2>Price: {price}</h2>
            <button>Buy Now</button>
        </div>
    );
};

export default Phone;