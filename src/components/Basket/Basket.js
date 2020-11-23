import React from 'react';
import basket from '../../assets/img/icons/basket.png';
import './basket.scss';

const Basket = () => {
    return (
        <>
            <button className="btn basket">
                <img src={basket} alt="basket"/>
            </button>
        </>
    )
}

export default Basket;