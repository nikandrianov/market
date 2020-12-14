import React from 'react';
import style from './home.module.scss';
import Card from '../../components/Card';
import Categories from '../../components/Categories';

const Content = () => {
    return (
        <main>
            <div className="container">
                <div className={style.title}>
                    <span>products</span>
                </div>
                <Categories items={['Green', 'White', 'Red']} />
                <div className={style.content}>
                    <div className={style.body}>
                        <Card />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Content;
