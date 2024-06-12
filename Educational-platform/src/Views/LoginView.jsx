import {useState} from "react";
import people from "../Data/items";
import styles from './loginView.module.css'
import Navbar from "../Components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import background_image from "../Images/background.svg";
import { TextField } from "@mui/material";

const LoginView = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const isValid = () => {
        let result = true;

        setLoginError("");

        if (login.length === 0) {
            setLoginError("Логин не может быть пустым.");
            result = false;
        }

        setPasswordError("");

        if (password.length === 0) {
            setPasswordError("Пароль не может быть пустым.");
            result = false;
        }
        return result;
    };
    const ClickBtn = () => {
for(let i = 0;i < people.length; i++){
    if(login === people[i].login && password === people[i].pass){
        console.log(people[i].login);
        localStorage.setItem('account',JSON.stringify({login:login,name:people[i].name,speciality:people[i].speciality, surname:people[i].surname,lastname:people[i].lastname,group:people[i].group,email:people[i].email,birthday:people[i].birthday, role: people[i].role}));
        localStorage.setItem('accountImage',JSON.stringify(people[i].img));
       if(people[i].role!=="admin"){ navigate("/account")} 
       else if(people[i].role==="admin"){navigate("/")}
        break;
    }

}
    };
    return (
        <div className="App">
            <Navbar></Navbar>
            <div className={styles.center}>
            <div className={styles.container}>
                        <h3>АВТОРИЗАЦИЯ</h3>
                       <div className={styles.textField}>
                            <TextField name="title"
                                        type="text" value={login}
                                        label="Логин" variant="outlined" onChange={e => setLogin(e.target.value)}/>
                            {loginError && <div className="error"> {loginError}</div>}
                        </div>
                        <div className={styles.textField}>
                            <TextField name="title"
                                        type="password" value={password}
                                        label="Пароль" variant="outlined" onChange={e => setPassword(e.target.value)}/>

                            {passwordError && <div className="error">{passwordError}</div>}
                        </div >
                        <button onClick={ClickBtn}>Войти</button>
                    </div>
            </div>
        
        </div>
    );
};

export default LoginView;