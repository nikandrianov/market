import React from 'react';
import style from './categories.module.scss';

const Categories = ({ items }) => {
    const [state, setState] = React.useState(null);

    const onSelectItem = (index) => {
        setState(index);
    };

    return (
        <div className={style.category}>
            <ul>
                <li
                    className={state === null ? style.active : ''}
                    onClick={() => onSelectItem(null)}>
                    All
                </li>
                {items &&
                    items.map((item, index) => (
                        <li
                            key={`${item}_${index}`}
                            className={state === index ? style.active : ''}
                            onClick={() => onSelectItem(index)}>
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Categories;
