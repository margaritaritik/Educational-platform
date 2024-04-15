import React, {useEffect, useState} from 'react';
import style from './navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from './logo.svg';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [testLogin, setTestLogin]=useState(0)
    const [account, setAccount]=useState("")
    const savedItem = localStorage.getItem("account");



    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.logo_image}>
                        <a href='/'><img src={Logo} className={style.logo} alt="логотип"/></a>
                    </div>
                    <ul className={nav ? [style.menu, style.active].join(' ') : [style.menu]}>
                        {testLogin===0 && <li><a href='/login'>Вход</a></li>}
                        {testLogin===0 && <li><a href='/register'>Регистрация</a></li>}
                        {testLogin===1 && <li><a href='/'>Назад</a></li>}
                        {testLogin===2 && <li><a href='/account'>Аккаунт</a></li>}
                    </ul>
                    <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;