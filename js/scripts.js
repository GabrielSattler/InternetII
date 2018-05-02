console.log();

var users = [
    {name: "Gabriel",
    lastName: "Sattler",
    age: "15",
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

var listUsers = {
    users:[],
    setUsers:function(users){
        listUsers.users = users;
    },
    ListAll:function(){
        for(var i = 0; i < listUsers.users.length; i++){
            console.log(listUsers.assamble(listUsers.users[i]));
        }
    },
    assamble:function(user){
        return "El usuario " + user.name + " " + user.lastName + " vive en " + user.city + " y tiene " + user.age;
    },
    listByAgeLimit:function(age){
        for(var i = 0; i < listUsers.users.length; i++){
            if(listUsers.users[i].age < age){
                console.log(listUsers.assamble(listUsers.users[i]));
            }
        }
    }
}

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

//Assamble
function ListByAge(edad){
    for(var i = 0; i < users.length; i++){
        if(users[i].age <= edad){
            console.log(Usuario(users[i]));
        }
    }
}

console.log(Sumar());

var menor;

function ListaMenorAMayor(users){
    for(var i = 0; i < users.length; i++){
        if(i == 0){
            menor = users[i];
        }
        if(users[i].age < menor.age){
            menor = users[i];
        }
    }
}