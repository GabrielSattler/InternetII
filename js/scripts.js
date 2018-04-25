console.log();

var users = [
    {name: "Gabriel",
    lastName: "Sattler",
    age: "19",
    city: "Rosario",
    children:["owo","slots","69"]},

    {name: "Tomas",
    lastName: "Dachesky",
    age: "19",
    city: "Rosario",
    children:["owo","hunt"]},

    {name: "Alexis",
    lastName: "Bordon",
    age: "53",
    city: "Rosario",
    children:["winner winner","chicken dinner"]},

    {name: "El Inombrable",
    lastName: "Keilty",
    age: "??",
    city: "El Vacio",
    children:["Satanas", "Dios"]},

    {name: "Pablo",
    lastName: "G",
    age: "1",
    city: "Pochinki",
    children:["DP"]},
];

for(var i = 0; i < users.length; i++){
    console.log(users[i].name + " " + users[i].lastName + " tiene " + users[i].children + " hijos.");
};

function Sumar(n1, n2){
    return n1 + n2;
}

function GetUser(usuario){
    for(var i = 0; i < users.length; i++){
        if(users[i].name == usuario){
            return users[i].lastName + " " + users[i].name + " vive en " + users[i].city;
        }
    }
}

function Usuario(user){
    return user.lastName + " " + user.name + " vive en " + user.city;
}

function ListByAge(edad){
    for(var i = 0; i < users.length; i++){
        if(users[i].age <= edad){
            console.log(Usuario(users[i]));
        }
    }
}

console.log(Sumar());