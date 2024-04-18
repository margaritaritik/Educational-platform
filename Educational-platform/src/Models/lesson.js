class Lesson{
  constructor(id, name, code, hours_theory, hours_practice,
  hours_exam, hours_consult, first_semester, second_semester,
  third_semester, forth_semester, fifth_semester, sixth_semester,
  hours_total, count_subgroups){
    this.id = id;
    this.name = name;
    this.code = code;
    this.hours_theory = hours_theory;
    this.hours_practice = hours_practice;
    this.hours_consult = hours_consult;
    this.first_semester = first_semester;
    this.second_semester = second_semester;
    this.third_semester = third_semester;
    this.forth_semester = forth_semester;
    this.fifth_semester = fifth_semester;
    this.sixth_semester = sixth_semester;
    this.hours_total = hours_total;
    this.count_subgroups = count_subgroups;
  }
}

export default LessonModel
