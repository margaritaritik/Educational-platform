import Lesson from "../Models/lesson"

class ServerController{
  constructor(url) {
    this.url = url;
  }

  getToken(){}

  getLessons(){
    let lesson1 = new Lesson(1, "История России", "СГД.01", 28, 1, 5, 4, 1, 1, 1, 1, 1, 1, 90, 2);
    let lesson2 = new Lesson(2, "Ин. яз.", "СГД.02", 0, 1, 5, 4, 1, 1, 1, 1, 1, 1, 90, 2);
    let lesson3 = new Lesson(3, "БЖ", "СГД.03", 0, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson4 = new Lesson(4, "Физ. культура", "СГД.04", 20, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson5 = new Lesson(5, "Осн. бережливого пр.", "СГД.05", 10, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson6 = new Lesson(6, "Основы фин. грамотности", "СГД.06", 0, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson7 = new Lesson(7, "Соц. - псих. адаптация", "СГД.07", 0, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson8 = new Lesson(8, "Рус. яз. и культура речи", "СГД.08", 16, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson9 = new Lesson(9, "Анатомия и физиология человека", "ОПД.01", 20, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson10 = new Lesson(10, "Осн. лат. языка с мед. терм.", "ОПД.02", 8, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson11 = new Lesson(11, "Осн. патологии", "ОПД.03", 18, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson12 = new Lesson(12, "Фармакология", "ОПД.04", 36, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson13= new Lesson(13, "Генетика с осн. мед генетики", "ОПД.05", 10, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson14 = new Lesson(14, "Осн. микробио. и иммун.", "ОПД.06", 10, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson15 = new Lesson(15, "Зд. человек и его окр.(дети)", "ОПД.07", 10, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson16 = new Lesson(16, "Зд. человек и его окр.(супр. пара)", "ОПД.07", 10, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson17 = new Lesson(17, "Зд. человек и его окр.(геронтология)", "ОПД.07", 10, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson18 = new Lesson(18, "Инф. техн. в проф. деят.", "ОПД.08", 10, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson19 = new Lesson(19, "Гигиена и экология человека", "ОПД.09", 10, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson20 = new Lesson(20, "Психология", "ОПД.010", 10, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);
    let lesson21 = new Lesson(21, "Санитарное содерж. палат", "МДК 01.01", 10, 1, 5, 4, 1, 1,  1, 1, 1, 1, 90, 2);

    let lessons = [lesson1, lesson2, lesson3, lesson4, lesson5 ,lesson6, lesson7, lesson8, lesson9, lesson10, 
      lesson11, lesson12, lesson13, lesson14, lesson15, lesson16, lesson17, lesson18, lesson19, lesson20, lesson21];
    return lessons
  }
  getLessonByID(){}

  getProfessors(){}
  getProfessorByID(){}

  getGroups(){}
  getGroupByID(){}
}

export default ServerController
