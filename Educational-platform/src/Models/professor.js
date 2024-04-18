class Professor{
  constructor(id, first_name, last_name, third_name, email){
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.third_name = third_name;
    this.email = email;
  }

  toString(){
    return Professor: ${this.first_name}, ${this.last_name}, ${this.third_name}, Email: ${this.email};
  }
}
