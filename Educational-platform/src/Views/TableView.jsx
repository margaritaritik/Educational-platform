import React, {useEffect, useState} from 'react';
import Navbar from "../Components/Navbar/navbar";
import styles from "./TableView.module.css"
import ServerController from '../Controller/controller';
 
const TableView = () => {
    let [lessons, setLessons] = useState([]);
    const serverController = new ServerController();

    lessons = serverController.getLessons();

    // componentDidMount() {
    //     fetch('http://example.com/api/tableData')
    //         .then(response => response.json())
    //         .then(data => this.setState({ tableData: data }));
    // }

    return (
        <div className={styles.app}>
            <Navbar></Navbar>
            <div className={styles.table}> 
            <table>
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
                    <tr key={lesson.id} className={styles.table}>
                        <td>{lesson.id}</td>
                        <td>{lesson.name}</td>
                        <td>{lesson.code}</td>
                        <td>{lesson.hours_theory}</td>
                        <td>{lesson.hours_practice}</td>
                        <td>{lesson.hours_consult}</td>
                        <td>{lesson.first_semester}</td>
                        <td>{lesson.second_semeser}</td>
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
            </div>
        </div>
    );
}

export default TableView;
