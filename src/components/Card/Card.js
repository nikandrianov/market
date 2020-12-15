import React from 'react';
import image1 from '../../assets/img/01.png';
import style from './card.module.scss';

const Card = () => {
    return (
        <>
            <div className={style.column}>
                <div className={style.item}>
                    <div className={style.img}>
                        <img src={image1} alt="" />
                    </div>
                    <div className={style.name}>Coalesce: Functioning On Impatience T-Shirt</div>
                    <div className={style.price}>
                        <div className={style.cost}>$150.00</div>
                        <button className={style.addbtn}>Add to Cart</button>
                    </div>
                    <div className={style.text}>
                        <p>
                            When you're dress-hunting, you want to find something that's fun,
                            comfortable, flattering, and uniquely you! So, why not start with a
                            sundress? They always brighten up the environment around you and inspire
                            positivity wherever you go! Looking for some color to brighten up your
                            day? Check out the cotton sundresses.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
