import React from 'react';
import accountPhoto from "../Images/ava.jpg";
import styles from "./accountView.module.css"
import {TextField} from "@mui/material";
import NavState from "../Components/Navbar/Nav/navState";
import MainMenu from "../Components/Navbar/Nav/MainMenu";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import BreadCrumbs from '../Components/BreadCrumbs/breadCrumbs';
import { useNavigate } from "react-router-dom";



const AccountView = () => {
    const navigate = useNavigate();
    const breadCrumbs=[{name:'Главная',href:'/'},{name:'Аккаунт',href:'/account'}];
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
   
    const savedItem =getStorageData("account",'no');
    const changeAccount =getStorageData("changeUser",'no');
    const savedImage = localStorage.getItem("accountImage");
    return (
        <div className={styles.wrapper}>
            <NavState>
                <MainMenu />
            </NavState>
            
        <BreadCrumbs BreadCrumbsNames={breadCrumbs}></BreadCrumbs>
       <div className={styles.container}>
        
            <div className={styles.container_account}>
                <img src={accountPhoto}/>
            <p> {savedItem.name} </p> 
                <div className={styles.gradient_progressbar}>
                    <label htmlFor="progress-bar">Вы заполнили профиль на 62%</label>
                    <progress value={62} max={100}> 62%</progress>
                </div>
            </div>
          <div className={styles.container_info}>
                <div className={styles.info_input1}>
                <TextField className={styles.input1} defaultValue={savedItem.surname} name="title" type="text" label="Фамилия" variant="outlined" />
                    <TextField className={styles.input1} defaultValue={savedItem.name} name="title" type="text" label="Имя" variant="outlined" />
                    <TextField className={styles.input1} defaultValue={savedItem.lastname} name="title" type="text" label="Отчество" variant="outlined" />
                    <TextField className={styles.input1} defaultValue={savedItem.birthday} name="title" type="text" label="Дата рождения" variant="outlined" />
                    <TextField defaultValue={savedItem.email} name="title"
                               type="text"
                               label="Почта" variant="outlined" />
                </div>
                <div className={styles.info_input2}>
                    <TextField defaultValue={savedItem.group} name="title"
                               type="text"
                               label="Группа" variant="outlined" />
                    <TextField defaultValue={savedItem.speciality} name="title"
                               type="text"
                               label="Специальность" variant="outlined" />
                    <TextField defaultValue="Что-то" name="title"
                               type="text"
                               label="Что-то" variant="outlined" />
                    <TextField defaultValue="Что-то"  name="title"
                               type="text"
                               label="Что-то" variant="outlined" />

                    <div className={styles.container_save_btn}>
                        <button onClick={()=>{navigate("/professors")}} vclassName={styles.save_info_btn}>
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
