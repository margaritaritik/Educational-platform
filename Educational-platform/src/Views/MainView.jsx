import React from 'react';
import styles from "./mainView.module.css"
import Navbar from "../Components/Navbar/navbar";
import Footer from "../Components/Footer/footer";
import new1 from "../Images/news_images/img.png";
import newrab from "../Images/news_images/встреча с рабами.jpg";
import newdik from "../Images/news_images/диктант победы.jpg";
import newlek from "../Images/news_images/лекция.jpg";
import newkonf from "../Images/news_images/научная конф.jpg";
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
                                <img src={newdik}/>
                                <p className={styles.date}> 2 мая 2024</p>
                                <p> Приглашаем студентов к участию в акции "Диктант Победы" посвящённой 9 мая</p>
                                <button>Подробнее</button>
                            </div>
                            <div className={styles.item_news}>
                                <img src={newrab}/>
                                <p className={styles.date}> 26 мая 2024</p>
                                <p>  Встречи студентов старших курсов с работодателями из лучших медицинских учреждений  </p>
                                <button>Подробнее</button>
                            </div>
                            <div className={styles.item_news}>
                                <img src={newlek}/>
                                <p className={styles.date}> 10 апреля 2024</p>
                                <p> Открытая лекция на тему "Персонализированная фармакотерапия социально значимых заболеваний" </p>
                                <button>Подробнее</button>
                            </div>
                            <div className={styles.item_news}>
                                <img src={newkonf}/>
                                <p className={styles.date}> 12 марта 2024</p>
                                <p> Международная научная студенческая конференция МНСК-24 Барабинск для студентов колледжа </p>
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