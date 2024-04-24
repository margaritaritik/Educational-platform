import React from 'react';
import Navbar from "../Components/Navbar/navbar";
import Footer from "../Components/Footer/footer";
import styles from "./StaffView.module.css";

const StaffView = () => {    
        return (
        <div>
            <Navbar></Navbar>
            <main class={styles.main}>
                <h2>Электронные ресурсы</h2>
                <div class={styles.container}>
                    <div class={styles.item}>
                        <img></img>
                        <h3>Journal</h3>
                    </div>
                    <div class={styles.item}>
                        <img></img>
                        <h3></h3>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default StaffView;