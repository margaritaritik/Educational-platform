import React from 'react';
import styles from "./mainView.module.css"
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer/footer";

const MainView = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <Navbar></Navbar>


                <div className={styles.content}>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainView;