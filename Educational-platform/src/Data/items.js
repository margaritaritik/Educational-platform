// import account1 from "http://localhost:3000/src/images/accPhoto.jpg"
const people=[
    {
        id:1,
        login:"1",
        name:"Мария",
        surname: "Разумовская",
        lastname: "Сергеевна",
        group:"007а",
        email:'razymovskayamasha04@mail.ru',
        birthday: "20.09.2004",
        speciality: "Лечебное дело",
        pass:"1",
        role:"student",
    },
    {
        id:5,
        login:"admin",
        name:"Админ",
        surname: "Админович",
        lastname: "Админов",
        email:'admin@mail.ru',
        birthday: "20.02.2000",
        speciality: "Админ",
        pass:"admin",
        role:"admin",
    },
    {
        id:1,
        login:"student",
        pass:"1",
        role:"student",
        img: "../images/accPhoto.jpg"
    },
    {
        id:2,
        login:"teacher",
        pass:"1",
        role:"teacher",
        img: "../images/accPhoto.jpg"
    }
    ]

export default people;