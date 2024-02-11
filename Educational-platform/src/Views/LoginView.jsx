import {useState} from "react";
import TextField from "@material-ui/core/TextField";
import people from "../Data/items";
import styles from './loginView.module.css'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer/footer";


const LoginView = () => {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const isValid = () => {
        let result = true;


        // очищаем ошибки
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
// for(let i=0;i<people.length;i++){
//
//     if(login==people[i].login && password==people[i].pass){
//         console.log(people[i].login);
//         break;
//     }
//
// }
        alert("NO");
        people.push({id:2,login:login, pass:password });

    };
    return (
        <div>
            <div className="App">
                <div className={styles.wrapper}>
                    <Navbar></Navbar>

                    <div className={styles.container}>
                        <h3>АВТОРИЗАЦИЯ</h3>
                        <div className={styles.textField}>
                            <TextField name="title"  color="warning"
                                       type="text" value={login}
                                       label="логин" variant="standard" onChange={e => setLogin(e.target.value)}/>
                            {loginError && <div className="error"> {loginError}</div>}
                        </div>
                        <div className={styles.textField}>
                            <TextField name="title"  color="success"
                                       type="password" value={password}
                                       label="пароль" variant="standard" onChange={e => setPassword(e.target.value)}/>

                            {passwordError && <div className="error">{passwordError}</div>}
                        </div>
                        <button onClick={ClickBtn}>войти</button>
                    </div>
                   
                </div>

            </div>
        </div>
    );
};

export default LoginView;