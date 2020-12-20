import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './home.module.scss';
import { setCategory } from '../../redux/actions/filters';
import { fetchClothes } from '../../redux/actions/clothes';

import Card from '../../components/Card';
import Categories from '../../components/Categories';

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ clothes }) => clothes.items);
    const category = useSelector(({ filters }) => filters.category);

    React.useEffect(() => {
        dispatch(fetchClothes(category));
    }, [category]);

    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    };

    return (
        <main>
            <div className="container">
                <div className={style.title}>
                    <span>products</span>
                </div>
                <Categories
                    activeCategory={category}
                    items={['Man', 'Woman']}
                    onClickCategory={onSelectCategory}
                />
                <div className={style.content}>
                    <div className={style.body}>
                        {items && items.map((obj) => <Card key={obj.id} {...obj} />)}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
