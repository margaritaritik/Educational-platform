import React from 'react';
import styles from "./moreNewsView.module.css"
import Navbar from "../Components/Navbar/Navbar";
import new1 from "../images/news_images/img.png";
import Footer from "../Components/footer/footer";
import NavState from "../Components/Navbar/NAV/navState";
import MainMenu from "../Components/Navbar/NAV/MainMenu";
const MoreNewsView = () => {
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
                            <h2>
                                Новости и статьи
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor dolores dolorum eius quae. Earum, itaque totam. Amet eaque, et fuga id, nulla omnis quas quos repellat unde veniam voluptas!
                            </p>

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

export default MoreNewsView;