import React, {useState} from 'react';
import styles from './journalView.module.css'
import MainMenu from "../Components/Navbar/Nav/MainMenu";
import NavState from "../Components/Navbar/Nav/navState";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import ServerController from '../Controller/controller';
import TeacherJurnal from '../Components/Role/teacher';
import AdminJurnal from '../Components/Role/admin';
const JournalView = () => {
    let [lessons, setLessons] = useState([]);
    const serverController = new ServerController();

    lessons = serverController.getLessons();
    const [checkDnevnik, setCheckDnevnik] = useState(0);
    const [discipline, setDiscipline] = React.useState('');
    const [group, setGroup] = React.useState('');
    const [month, setMonth] = React.useState('');
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const savedRole = getStorageData("account",'no').role;

    const handleChangeGroup = (e) => {
        setGroup(e.target.value);
    };
    const handleChangeDiscipline = (e) =>
    {
        setDiscipline(e.target.value)
    }
    const handleChangeMonth = (e) => {
        setMonth(e.target.value);
    };
    return (
        <div className={styles.wrapper}>

            <NavState>
                <MainMenu />
            </NavState>
            {savedRole==="teacher" && <TeacherJurnal></TeacherJurnal>}

        {savedRole==="admin" && <AdminJurnal></AdminJurnal>
             }

       
        </div>

    );
};

export default JournalView;