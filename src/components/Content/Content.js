import React from 'react';
import image1 from '../../assets/img/01.png';
import image2 from '../../assets/img/02.png';
import image3 from '../../assets/img/03.png';
import image5 from '../../assets/img/05.png';
import image6 from '../../assets/img/06.png';
import style from './content.module.scss';

const Content = () => {
    return (
        <main>
            <div className="container">
                <div className={style.title}><span>products</span></div>
                <div className={style.content}>
                    <div className={style.body}>
                        <div className={style.column}>
                            <div className={style.item}>
                                <div className={style.img}><img src={image1} alt="" /></div>
                                <div className={style.name}>Coalesce: Functioning On Impatience T-Shirt</div>
                                <div className={style.price}>
                                    <div className={style.cost}>$150.00</div>
                                    <button className={style.addbtn}>Add to Cart</button>
                                </div>
                                <div className={style.text}><p>When you're dress-hunting, you want to find something that's fun, comfortable, flattering, and uniquely you! So, why not start with a sundress? They always brighten up the environment around you and inspire positivity wherever you go! 
                                    Looking for some color to brighten up your day? Check out the cotton sundresses.</p></div>
                            </div>
                        </div>
                        <div className={style.column}>
                            <div className={style.item}>
                                <div className={style.img}><img src={image2} alt="" /></div>
                                <div className={style.name}>Ink Eater: Krylon Bombear Destroyed Tee</div>
                                <div className={style.price}>
                                    <div className={style.cost}>$22.00</div>
                                    <button className={style.addbtn}>Add to Cart</button>
                                </div>
                                <div className={style.text}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nobis recusandae quis commodi libero praesentium porro debitis. Esse, asperiores sed? Eligendi itaque quidem dolores ut earum quas, corporis aut, similique id perferendis nisi error reiciendis minus animi unde dolore necessitatibus!</p></div>
                            </div>
                        </div>
                        <div className={style.column}>
                            <div className={style.item}>
                                <div className={style.img}><img src={image3} alt="" /></div>
                                <div className={style.name}>The Only Children: Paisley T-Shirt</div>
                                <div className={style.price}>
                                    <div className={style.cost}>$55.00</div>
                                    <button className={style.addbtn}>Add to Cart</button>
                                </div>
                                <div className={style.text}><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, quo?</p></div>
                            </div>
                        </div>
                        <div className={style.column}>
                            <div className={style.item}>
                                <div className={style.img}><img src={image1} alt="" /></div>
                                <div className={style.name}>Coalesce: Functioning On Impatience T-Shirt</div>
                                <div className={style.price}>
                                    <div className={style.cost}>$150.00</div>
                                    <button className={style.addbtn}>Add to Cart</button>
                                </div>
                                <div className={style.text}><p>When you're dress-hunting, you want to find something that's fun, comfortable, flattering, and uniquely you! So, why not start with a sundress? They always brighten up the environment around you and inspire positivity wherever you go! 
                                    Looking for some color to brighten up your day? Check out the cotton sundresses. </p></div>
                            </div>
                        </div>
                        <div className={style.column}>
                            <div className={style.item}>
                                <div className={style.img}><img src={image5} alt="" /></div>
                                <div className={style.name}>Zolof The Rock And Roll Destroyer: LOL Cat T-shirt</div>
                                <div className={style.price}>
                                    <div className={style.cost}>$13.00</div>
                                    <button className={style.addbtn}>Add to Cart</button>
                                </div>
                                <div className={style.text}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ipsam!</p></div>
                            </div>
                        </div>
                        <div className={style.column}>
                            <div className={style.item}>
                                <div className={style.img}><img src={image6} alt="" /></div>
                                <div className={style.name}>The Get Up Kids: Band Camp Pullover Hoodie</div>
                                <div className={style.price}>
                                    <div className={style.cost}>$12.00</div>
                                    <button className={style.addbtn}>Add to Cart</button>
                                </div>
                                <div className={style.text}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et corrupti voluptatibus illo eligendi, laborum obcaecati reiciendis soluta porro nobis facere?</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content;