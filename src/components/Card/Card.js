import React from 'react';
import PropTypes from 'prop-types';
import style from './card.module.scss';

const Card = ({ id, name, img, price, text, onClickAdd }) => {
    const handleOnClickItem = () => {
        onClickAdd({ id, name, img, price });
    };

    return (
        <div className={style.column}>
            <div className={style.item}>
                <div className={style.img}>
                    <img src={img} alt="" />
                </div>
                <div className={style.name}>{name}</div>
                <div className={style.price}>
                    <div className={style.cost}>{price} ₽</div>
                    <button className={style.addbtn} onClick={handleOnClickItem}>
                        Add to Cart
                    </button>
                </div>
                <div className={style.text}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    text: PropTypes.string,
    onClickAdd: PropTypes.func,
};

Card.defaultProps = {
    name: '---',
    price: 0,
    img: 'https://neuronsk.ru/upload/medialibrary/771/771dad7444a2937b6085360951e048b1.png',
    text: '---',
};

export default Card;
