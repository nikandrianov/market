import React from 'react';
import { useSelector } from 'react-redux';
import style from './home.module.scss';

import Card from '../../components/Card';
import Categories from '../../components/Categories';

const Home = () => {
    const { items } = useSelector(({ clothes }) => {
        return {
            items: clothes.items,
        };
    });

    return (
        <main>
            <div className="container">
                <div className={style.title}>
                    <span>products</span>
                </div>
                <Categories items={['Green', 'White', 'Red']} />
                <div className={style.content}>
                    <div className={style.body}>
                        {items.map((obj) => (
                            <Card key={obj.id} {...obj} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
