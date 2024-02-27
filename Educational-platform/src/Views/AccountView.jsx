import React from 'react';
import accountPhoto from "../images/accPhoto.jpg";
import Navbar from "../Components/Navbar/Navbar";
import styles from "./accountView.module.css"
const AccountView = () => {
    const savedItem = localStorage.getItem("account");
    const savedImage = localStorage.getItem("accountImage");
    return (
        <div className={styles.wrapper}>
            <Navbar>

            </Navbar>
        <div className={styles.container}>
            <div className={styles.container_account}>
                <img src={accountPhoto}/>
                <p>
                    {savedItem} dfbgeagegbebgdgdefvgafdvgsgdfgdfdfgdgd
                </p>
                <div className={styles.gradient_progressbar}>
                    <label htmlFor="progress-bar">Вы заполнили профиль на 62%</label>
                    <progress value={62} max={100}> 62%</progress>
                </div>
            </div>

            <div className={styles.container_info}>
                <div className={styles.info_input1}>
                    <input name="title"
                    />
                    <input name="title"
                    />
                    <input name="title"
                    />
                    <input name="title"
                    />
                    <input name="title"
                    />
                    <input name="title"
                    />
                </div>
                <div className={styles.info_input2}>
                    <input name="title"
                    />
                    <input name="title"
                    />
                    <input name="title"
                    />
                    <input name="title"
                    />
                    <input name="title"
                    />
                    <input name="title"
                    />
                </div>
                <div className={styles.container_save_btn}>
                    <button className={styles.save_info_btn}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AccountView;