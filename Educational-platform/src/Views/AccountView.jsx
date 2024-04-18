import React from 'react';
import accountPhoto from "../Images/accPhoto.jpg";
import styles from "./accountView.module.css"
import {TextField} from "@mui/material";
import NavState from "../Components/Navbar/Nav/navState";
import MainMenu from "../Components/Navbar/Nav/MainMenu";
const AccountView = () => {
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const savedItem =getStorageData("account",'no').name;
    const savedImage = localStorage.getItem("accountImage");
    return (
        <div className={styles.wrapper}>
            <NavState>
                <MainMenu />
            </NavState>
        <div className={styles.container}>
            <div className={styles.container_account}>
                <img src={accountPhoto}/>
                <p> {savedItem} </p>
                <div className={styles.gradient_progressbar}>
                    <label htmlFor="progress-bar">Вы заполнили профиль на 62%</label>
                    <progress value={62} max={100}> 62%</progress>
                </div>
            </div>
            <div className={styles.container_info}>
                <div className={styles.info_input1}>
                    <TextField name="title" type="text" label="Имя" variant="outlined" />
                    <TextField name="title" type="text" label="Фамилия" variant="outlined" />
                    <TextField name="title" type="text" label="Отчество" variant="outlined" />
                    <TextField name="title" type="text" variant="outlined" />
                </div>
                <div className={styles.info_input2}>
                    <TextField name="title"
                               type="text"
                               label="логин" variant="outlined" />
                    <TextField name="title"
                               type="text"
                               label="логин" variant="outlined" />
                    <TextField name="title"
                               type="text"
                               label="логин" variant="outlined" />
                    <TextField name="title"
                               type="text"
                               label="логин" variant="outlined" />
                    <TextField name="title"
                               type="text"
                               label="логин" variant="outlined" />
                    <div className={styles.container_save_btn}>
                        <button className={styles.save_info_btn}>
                            Сохранить
                        </button>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default AccountView;
