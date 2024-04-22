import Lesson from "../Models/lesson"

class ServerController{
  constructor(url) {
    this.url = url;
  }

  getToken(){}

  getLessons(){
    let lesson1 = new Lesson(1, "Русский язык", "ПМ04", 10, 1, 5, 4, 1, 1, 1, 1, 1, 1, 1, 90, 2);
    let lesson2 = new Lesson(2, "Русский язык", "ПМ04", 10, 1, 5, 4, 1, 1, 1, 1, 1, 1, 1, 90, 2);
    let lesson3 = new Lesson(3, "Русский язык", "ПМ04", 10, 1, 5, 4, 1, 1, 1, 1, 1, 1, 1, 90, 2);
    let lessons = [lesson1, lesson2, lesson3];
    return lessons
  }
  getLessonByID(){}

  getProfessors(){}
  getProfessorByID(){}

  getGroups(){}
  getGroupByID(){}
}

export default ServerController
