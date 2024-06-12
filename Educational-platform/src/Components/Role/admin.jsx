import React, {useState,useEffect} from 'react';
import styles from '../../Views/journalView.module.css';
import ServerController from '../../Controller/controller';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import groupAdmin from "../../Data/group.json";
import * as jsPDF from 'jspdf';
// import 'jspdf-autotable';

const AdminJurnal = () => {
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
   

    const exportPDF = () => {
       
      }



    
    const [dataArray, setDataArray] = useState([]);

      useEffect(() => {
        
        // Преобразование JSON в массив
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
        // Здесь вы можете выполнить действия с выбранными строками, например, изменить их значения
        const selectedItems = dataArray.filter(item => item.selected);
        console.log("Выбранные элементы:", selectedItems);
      };

return(
<div className={styles.content}>
                <div className={styles.btn_dnevnik}>
                    <button className={checkDnevnik===0 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(0)}}> Журнал</button>
                    <button className={checkDnevnik===1 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(1)}}> Дисциплина</button>
                    <button className={checkDnevnik===2 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(2)}}> Учебный план</button>
                </div>
                {checkDnevnik===0 &&
                    <div>
                    <div className={styles.selectedFields}>
                <FormControl fullWidth className={styles.formCtr}>
                    <InputLabel id="demo-simple-select-label">Группа</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={group}
                        label="Группа"
                        onChange={handleChangeGroup}>
                        <MenuItem value={903}>903</MenuItem>
                        <MenuItem value={907}>907</MenuItem>
                        <MenuItem value={101}>101</MenuItem>
                    </Select>
                

                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Дисциплина</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={discipline}
                        label="Дисциплина"
                        onChange={handleChangeDiscipline}>
                        <MenuItem value="История России">История России</MenuItem>
                        <MenuItem value={2}>Ин.яз.</MenuItem>
                        <MenuItem value={3}>БЖ</MenuItem>
                        <MenuItem value={4}>Физ.культура</MenuItem>
                        <MenuItem value={5}>Осн.бережливого пр.</MenuItem>
                        <MenuItem value={6}>Осн. фин. грамотности</MenuItem>
                        <MenuItem value={7}>Соц.- псих. адаптация</MenuItem>
                        <MenuItem value={8}>Рус. яз и культура речи</MenuItem>
                        <MenuItem value={9}>Анатомия и физиология человека</MenuItem>
                        <MenuItem value={10}>Осн. лат. языка с мед. терм.</MenuItem>
                        <MenuItem value={11}>Осн. патологии</MenuItem>
                        <MenuItem value={12}>Фармакология</MenuItem>
                        <MenuItem value={13}>Генетика с осн. мед генетики</MenuItem>
                        <MenuItem value={14}>Осн. микробио. и иммун.</MenuItem>
                        <MenuItem value={15}>Зд. человек и его окр.(дети)</MenuItem>
                        <MenuItem value={16}>Зд. человек и его окр.(супр. пара)</MenuItem>
                        <MenuItem value={17}>Зд. человек и его окр.(геронтология)</MenuItem>
                        <MenuItem value={18}>Инф. техн. в проф. деят.</MenuItem>
                        <MenuItem value={19}>Гигиена и экология человека</MenuItem>
                        <MenuItem value={20}>Психология</MenuItem>
                        <MenuItem value={21}>Санитарное содерж. палат</MenuItem>
                    </Select>
                    
                </FormControl>
<button className={styles.saveChangesBtn}>Сформировать</button>
                    </div>

                    <table className={styles.iksweb}>
                        <thead>
                        <tr>
                            <th rowSpan="2">Студент</th>
                            <th colSpan="31">Декабрь</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                        </tr>
                        </thead>
                    <tbody>
                   
        {dataArray.map(item => (<tr key={item.id}>
                    <td>{item.name}</td>
                    <td contentEditable="true">{item.oc1}</td>
                    <td contentEditable="true">{item.oc2}</td>
                    <td contentEditable="true">{item.oc3}</td>
                    <td contentEditable="true">{item.oc4}</td>
                    <td contentEditable="true">{item.oc5}</td>
                    <td contentEditable="true">{item.oc6}</td>
                    <td contentEditable="true">{item.oc7}</td>
                    <td contentEditable="true">{item.oc8}</td>
                    <td contentEditable="true">{item.oc9}</td>
                    <td contentEditable="true">{item.oc10}</td>
                    <td contentEditable="true">{item.oc11}</td>
                    <td contentEditable="true">{item.oc12}</td>
                    <td contentEditable="true">{item.oc13}</td>
                    <td contentEditable="true">{item.oc14}</td>
                    <td contentEditable="true">{item.oc15}</td>
                    <td contentEditable="true">{item.oc16}</td>
                    <td contentEditable="true">{item.oc17}</td>
                    <td contentEditable="true">{item.oc18}</td>
                    <td contentEditable="true">{item.oc19}</td>
                    <td contentEditable="true">{item.oc20}</td>
                    <td contentEditable="true">{item.oc21}</td>
                    <td contentEditable="true">{item.oc22}</td>
                    <td contentEditable="true">{item.oc23}</td>
                    <td contentEditable="true">{item.oc24}</td>
                    <td contentEditable="true">{item.oc25}</td>
                    <td contentEditable="true">{item.oc26}</td>
                    <td contentEditable="true">{item.oc27}</td>
                    <td contentEditable="true">{item.oc28}</td>
                    <td contentEditable="true">{item.oc29}</td>
                    <td contentEditable="true">{item.oc30}</td>
                    <td contentEditable="true">{item.oc31}</td>
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
                      
                        <div className={styles.changes}><button className={styles.saveChangesBtn}>Изменить</button>
                    <button className={styles.saveChangesBtn}>Добавить</button>
                    <button className={styles.saveChangesBtn}>Удалить</button></div>
                    </div>
                }

                {checkDnevnik===1 &&
               <div> <div className={styles.selectedFields}>
                <FormControl fullWidth className={styles.formCtr}>
                    <InputLabel id="demo-simple-select-label">Группа</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={group}
                        label="Группа"
                        onChange={handleChangeGroup}>
                        <MenuItem value={10}>244</MenuItem>
                        <MenuItem value={20}>248</MenuItem>
                        <MenuItem value={30}>249</MenuItem>
                    </Select>
                
                </FormControl><FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">Студент</InputLabel>
               <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                   value={discipline}
                   label="Студент"
                   onChange={handleChangeDiscipline}>
                    <MenuItem value={1}>Воронцова М.Е.</MenuItem>
                    <MenuItem value={2}>Емельянова Е.А.</MenuItem>
                    <MenuItem value={3}>Куликов В.Л.</MenuItem>
                    <MenuItem value={4}>Куприянов Ф.К.</MenuItem>
                    <MenuItem value={5}>Лебедева М.М.</MenuItem>
                    <MenuItem value={6}>Покровский Т.Н.</MenuItem>
                   <MenuItem value={7}>Попов Е.З.</MenuItem>
                   <MenuItem value={8}>Сальников А.В.</MenuItem>
                   <MenuItem value={9}>Столяров Д.О.</MenuItem>
                   <MenuItem value={10}>Троицкая З.П.</MenuItem>
                   <MenuItem value={11}>Федоров А.Д.</MenuItem>
                   <MenuItem value={12}>Филатов А.И.</MenuItem>
                   <MenuItem value={13}>Черная Д.Д.</MenuItem>

               </Select>
               
           </FormControl></div> <table className={styles.iksweb}>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Предметы</th>
                        <th>Оценки</th>
                        <th>Пропуски</th>
                        <th>Средний балл</th>
                        <th>Итог</th>
                    </tr>
                    </thead><tbody>
                <tr>
                    <td>1</td>
                    <td>История России</td>
                    <td>4532н453н23н254</td>
                    <td>4</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Иностранный язык в профессиональной деятельности</td>
                    <td>н534253н244н352</td>
                    <td>3</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Безопасность жизнедеятельности</td>
                    <td>3543253н24534н2</td>
                    <td>2</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Физическая культура</td>
                    <td>225434255345234</td>
                    <td>0</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Основы бережливого производства</td>
                    <td>53н24534н2н3452</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Основы финансовой грамотности</td>
                    <td>3н542345н24352н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Социально-психологическая адаптация</td>
                    <td>53н42435н25н342</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Русский язык и культура речи</td>
                    <td>354н2534н235н24</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Анатомия и физиология человека</td>
                    <td>4532н3452н5423н</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Основы латинского языка с медицинской терминологией</td>
                    <td>н25343452нн3452</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Основы патологии</td>
                    <td>45н235н324н4352</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Фармакология</td>
                    <td>н4532н43525н324</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Генетика с основами медицинской генетики</td>
                    <td>4н352432н5н4352</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Основы микробиологии и иммунологии</td>
                    <td>4532н4н3524н532</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Здоровый человек и его окружение(дети)</td>
                    <td>35н24н5432н4325</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Здоровый человек и его окружение(супр.пара)</td>
                    <td>2534н3524нн3452</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Здоровый человек и его окружение(геронтология)</td>
                    <td>25н3453н42н3542</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Информационные технологии в профессиональной деятельности</td>
                    <td>35н4243н52н5432</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>Гигиена и экология человека</td>
                    <td>н52343н54253н24</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>Психология</td>
                    <td>2543н324н53н245</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>Санитарное содержание палат, спец.кабинетов</td>
                    <td>н453253н24н3452</td>
                    <td>1</td>
                    <td>4,3</td>
                    <td>4</td>
                </tr>
                </tbody>
                </table><div className={styles.changes}><button className={styles.saveChangesBtn}>Изменить</button>
                    <button className={styles.saveChangesBtn}>Добавить</button>
                    <button className={styles.saveChangesBtn}>Удалить</button></div>
                    </div> }
                {checkDnevnik===2 &&
                <div>
                    <table id="my-table" className={styles.iksweb}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название предмета</th>
                        <th>Код предмета</th>
                        <th>Часов по теории</th>
                        <th>Часов по практике</th>
                        <th>Часов консультаций</th>
                        <th>Часов экзамена</th>
                        <th>1 семест</th>
                        <th>2 семестр </th>
                        <th>3 семестр</th>
                        <th>4 семестр</th>
                        <th>5 семестр</th>
                        <th>6 семестр</th>
                        <th>Часов всего</th>
                        <th>Колличество подгрупп</th>
                    </tr>
                </thead>
                <tbody>
                    {lessons.map(lesson => (
                    <tr key={lesson.id} >
                        <td>{lesson.id}</td>
                        <td>{lesson.name}</td>
                        <td>{lesson.code}</td>
                        <td>{lesson.hours_theory}</td>
                        <td>{lesson.hours_practice}</td>
                        <td>{lesson.hours_consult}</td>
                        <td>{lesson.hours_exam}</td>
                        <td>{lesson.first_semester}</td>
                        <td>{lesson.second_semester}</td>
                        <td>{lesson.third_semester}</td>
                        <td>{lesson.forth_semester}</td>
                        <td>{lesson.fifth_semester}</td>
                        <td>{lesson.sixth_semester}</td>
                        <td>{lesson.hours_total}</td>
                        <td>{lesson.count_subgroups}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
                <div className={styles.changes}><button className={styles.saveChangesBtn}>Изменить</button>
                    <button className={styles.saveChangesBtn}>Добавить</button>
                    <button className={styles.saveChangesBtn}>Удалить</button></div>
                    <button className={styles.saveChangesBtn} onClick={exportPDF}>Скачать</button>
                     </div>}
            </div>

);
}

export default AdminJurnal;