class User {
    constructor(id, name, email, age, isAdmin) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.isAdmin = isAdmin;
    }

    // toString() {
    //     return User: ${this.name}, Email: ${this.email}, Age: ${this.age};
    // }

    promoteToAdmin() {
        this.isAdmin = true;
    }
}

export default User;
