import React from 'react';
import style from './categories.module.scss';

const Categories = ({ items, onClickCategory, activeCategory }) => {
    return (
        <div className={style.category}>
            <ul>
                <li
                    className={activeCategory === null ? style.active : ''}
                    onClick={() => onClickCategory(null)}>
                    All
                </li>
                {items &&
                    items.map((item, index) => (
                        <li
                            key={`${item}_${index}`}
                            className={activeCategory === index ? style.active : ''}
                            onClick={() => onClickCategory(index)}>
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Categories;
