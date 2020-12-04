import React from 'react';
import style from './content.module.scss';
import Card from '../Card';
import Categories from '../Categories';

const Content = () => {
    return (
        <main>
            <div className="container">
                <div className={style.title}><span>products</span></div>
                <Categories items={["Green", "White", "Red"]} />
                <div className={style.content}>
                    <div className={style.body}>
                        <Card />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content;