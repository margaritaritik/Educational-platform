import React from 'react';
import styles from "./mainView.module.css"
import Navbar from "../Components/Navbar/navbar";
import Footer from "../Components/Footer/footer";
import new1 from "../Images/news_images/img.png";
import {useNavigate} from "react-router-dom";
import MainMenu from "../Components/Navbar/Nav/MainMenu";
import NavState from "../Components/Navbar/Nav/navState";

const MainView = () => {
    const navigate = useNavigate();
    const moreNewsBtnClick=()=>{
        navigate("/news")
    }
    const cachedData = localStorage.getItem('account');
    return (
        <div>
            <div className={styles.wrapper}>
                {cachedData ?<NavState>
                    <MainMenu />
                </NavState>:  <Navbar></Navbar>}


                <div className={styles.content}>
                    <div className={styles.container_news}>
                        <div className={styles.news_head}>
                            <button onClick={moreNewsBtnClick}>Больше новостей</button>
                        </div>

                        <div className={styles.news} >
                            <div className={styles.item_news}>
                                <img src={new1}/>
                                <p> 12 марта 2024</p>
                                <p> Описание описание описание </p>
                                <button>Подробнее</button>
                            </div>
                            <div className={styles.item_news}>
                                <img src={new1}/>
                                <p> 12 марта 2024</p>
                                <p> Описание описание описание </p>
                                <button>Подробнее</button>
                            </div>
                            <div className={styles.item_news}>
                                <img src={new1}/>
                                <p> 12 марта 2024</p>
                                <p> Описание описание описание </p>
                                <button>Подробнее</button>
                            </div>
                            <div className={styles.item_news}>
                                <img src={new1}/>
                                <p> 12 марта 2024</p>
                                <p> Описание описание описание </p>
                                <button>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainView;