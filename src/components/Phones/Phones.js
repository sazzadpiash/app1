import React from 'react';
import Phone from '../Phone/Phone';
import '../../App.css'

const Phones = () => {
    // First way to add some demo data
    const myData = [
        { id: '1', name: 'iPhone 12 pro', price: 14500, img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg' },
        { id: '2', name: 'iPhone 11 pro', price: 12500, img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg' },
        { id: '3', name: 'iPhone 10 pro', price: 7500, img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg' },
        { id: '4', name: 'iPhone 13 pro', price: 50000, img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg' },
        { id: '5', name: 'iPhone 14 pro', price: 60000, img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg' },
        { id: '6', name: 'iPhone 15 pro', price: 80000, img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg' },
        { id: '8', name: 'iPhone 18 pro', price: 70000, img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg' },
        { id: '7', name: 'iPhone 16 pro', price: 125000, img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg' }
    ]
    return (
        <div>
            <h1>All Phones</h1>
            <div className='phones'>
                {
                    myData.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>

        </div>
    );
};

export default Phones;