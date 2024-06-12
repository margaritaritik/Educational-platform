import React,{useState,useEffect} from 'react';
import groupAdmin from "../Data/students.json";
import styles from './journalView.module.css';
import MainMenu from "../Components/Navbar/Nav/MainMenu";
import NavState from "../Components/Navbar/Nav/navState";
import { useNavigate } from "react-router-dom";
const MoreNewsView = () => {
    const navigate = useNavigate();
    const [dataArray, setDataArray] = useState([]);
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const savedRole = getStorageData("account",'no').role;
      useEffect(() => {
    
            const arrayFromJson = JSON.parse(JSON.stringify(groupAdmin));
            setDataArray(arrayFromJson);
    
        console.log(arrayFromJson);
         }, []);
         const handleCheckboxChange = (id) => {
            setDataArray(dataArray.map(item =>
              item.id === id ? { ...item, selected: !item.selected } : item
            ));
          };
          const handleButtonClick = () => {
            // if(savedRole!=="admin"){
            //     navigate("/account");
            // }
            // else{
        // Здесь вы можете выполнить действия с выбранными строками, например, изменить их значения
        const selectedItems = dataArray.filter(item => item.selected);
        console.log("Выбранные элементы:", selectedItems);
        localStorage.setItem('changeUser',JSON.stringify({name:selectedItems[0].name,dr:selectedItems[0].dr,group:selectedItems[0].group, speciality:selectedItems[0].speciality,email:selectedItems[0].email}));
        // 
        // localStorage.setItem('changeUser',JSON.stringify(selectedItems));
       
        navigate("/change"); 
    // }
    
          };
    return (<>
     <div className={styles.wrapper}>

<NavState>
    <MainMenu />
</NavState>
    <table className={styles.iksweb}>
                        <thead>
                            <th>№</th>
                            <th>ФИО</th>
                        <th >Дата рождения</th>
                        <th >Группа</th>
                        <th >Специальность</th>
                        <th >Электронная почта</th>
                     <th>✓</th>
                        </thead>
                    <tbody>
                   
        {dataArray.map(item => (<tr key={item.id}>
            <td contentEditable="true">{item.id}</td>
                    <td>{item.name}</td>

                    
                    <td contentEditable="true">{item.dr}</td>
                    <td contentEditable="true">{item.group}</td>
                    <td contentEditable="true">{item.speciality}</td>
                    <td contentEditable="true">{item.email}</td>

                    <td>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              
</tr>
   ))}                     
               
                    </tbody>
                    </table>
                    <div className={styles.changes}><button className={styles.saveChangesBtn} onClick={handleButtonClick}>Изменить</button>
                    {savedRole==="admin" && <><button className={styles.saveChangesBtn} onClick={handleButtonClick}>Добавить</button>
                    <button className={styles.saveChangesBtn} >Удалить</button></> }
               
                    </div>
    </div></>);
}
export default MoreNewsView;
