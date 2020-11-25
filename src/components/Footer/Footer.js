import React from 'react';
import facebook from '../../assets/img/icons/facebook.svg';
import instagram from '../../assets/img/icons/instagram.svg';
import twitter from '../../assets/img/icons/twitter.svg';
import google from '../../assets/img/icons/google.svg';
import style from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.body}>
                    <div className={style.copyright}>
                        © 2020  -  All Rights Reserved
                    </div>
                    <div className={style.social}>
                        <a href="" className={style.facebook}><img src={facebook} alt="" /></a>
                        <a href="" className={style.instagram}><img src={instagram} alt="" /></a>
                        <a href="" className={style.twitter}><img src={twitter} alt="" /></a>
                        <a href="" className={style.google}><img src={google} alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;