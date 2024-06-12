
import React, {useState,useEffect} from 'react';
import styles from '../../Views/journalView.module.css';
import ServerController from '../../Controller/controller';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import groupAdmin from "../../Data/group.json";
const TeacherJurnal = () => {
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
    const exportPDF = () => {
        getFiltered();
      }
      const handleCheckboxChange = (id) => {
        setDataArray(dataArray.map(item =>
          item.id === id ? { ...item, selected: !item.selected } : item
        ));
      };
    const [dataArray, setDataArray] = useState([]);
      useEffect(() => {
    
            const arrayFromJson = JSON.parse(JSON.stringify(groupAdmin));
            setDataArray(arrayFromJson);
    
        console.log(arrayFromJson);
         }, []);
    
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
    useEffect(() => {
    
         
         }, [group]);
    const getFiltered = () => {
        let filteredList1 = [...dataArray];

        if(group.value==="907"){filteredList1= filteredList1.filter(employee => {
           
            return employee.group === "907";});}
            
     
        console.log(filteredList1);
        return filteredList1;
          
    }

    const getFilteredData=()=>{
        
    }


return(
<>

            <div className={styles.content}>
                <div className={styles.btn_dnevnik}>
                    <button className={checkDnevnik===0 ? styles.btn_check: styles.btn_no_check} onClick={()=>{setCheckDnevnik(0)}}> Журнал</button>
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
                <FormControl fullWidth className={styles.formCtr}>
                    <InputLabel id="demo-simple-select-label">Дисциплина</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={discipline}
                        label="Дисциплина"
                        onChange={handleChangeDiscipline}>
                        <MenuItem value={1}>История России</MenuItem>
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
                <FormControl fullWidth className={styles.formCtr}>
                    <InputLabel id="demo-simple-select-label">Месяц</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={month}
                        label="Месяц"
                        onChange={handleChangeMonth}>
                        <MenuItem value="Январь">Январь</MenuItem>
                        <MenuItem value="Февраль">Февраль</MenuItem>
                        <MenuItem value="Март">Март</MenuItem>
                        <MenuItem value="Апрель">Апрель</MenuItem>
                        <MenuItem value="Май">Май</MenuItem>
                        <MenuItem value="Июнь">Июнь</MenuItem>
                        <MenuItem value="Июль">Июль</MenuItem>
                        <MenuItem value="Август">Август</MenuItem>
                        <MenuItem value="Сентябрь">Сентябрь</MenuItem>
                        <MenuItem value="Октябрь">Октябрь</MenuItem>
                        <MenuItem value="Ноябрь">Ноябрь</MenuItem>
                        <MenuItem value="Декабрь">Декабрь</MenuItem>
                    </Select>
                </FormControl>
                <button className={styles.saveChangesBtn}>Сформировать</button>
                    </div>

                    <table className={styles.iksweb}>
                        <thead>
                        <tr>
                            <th rowSpan="2">Студент</th>
                            <th colSpan="32">{month}</th>
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
                            <td>✓</td>
                        </tr>
                        </thead>
                    <tbody>
                   
        {getFiltered().map(item => (<tr key={item.id}>
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
                        <button className={styles.saveChangesBtn}>
                            Сохранить изменения
                        </button>
                    </div>
                }

                {checkDnevnik===1 &&
                <table className={styles.iksweb}>
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
                
                
                </tbody>
                </table> }
                {checkDnevnik===2 &&
                <div>
                    <table className={styles.iksweb}>
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
              
                    <button className={styles.saveChangesBtn} onClick={exportPDF}>Скачать</button>
                     </div>}
                    
            </div>
             
           
</>
);
}

export default TeacherJurnal;