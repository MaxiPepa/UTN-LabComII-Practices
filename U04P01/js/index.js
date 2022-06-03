class Person {
    constructor(name, age, birthday, province) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
        this.province = province;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getBirthday() {
        return this.birthday;
    }

    getProvince() {
        return this.province;
    }
}

personList = []

function obtainData() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var birthday = document.getElementById("birthday").value;
    var province = document.getElementById("province").value;

    validateData(name, age, birthday, province)
}

function validateData(name, age, birthday, province) {
    let resultadoValidacion = true;
    let errores = []

    if (name === "") {
        resultadoValidacion = false;
        errores.push("Debe ingresar el nombre")
    }
    if (name.length < 8) {
        resultadoValidacion = false;
        errores.push("Nombre debe ser mayor a 8 letras")
    }
    if (name.length > 50) {
        resultadoValidacion = false;
        errores.push("Nombre debe ser menor a 50 letras")
    }
    if (age === "") {
        resultadoValidacion = false;
        errores.push("Debe ingresar la edad")
    }
    if (age < 18) {
        resultadoValidacion = false;
        errores.push("Debe ingresar la edad mayor a 18")
    }
    if (age > 100) {
        resultadoValidacion = false;
        errores.push("Debe ingresar la edad menor a 100")
    }
    if (birthday === "") {
        resultadoValidacion = false;
        errores.push("Debe ingresar la fecha")
    }
    if (province === "") {
        resultadoValidacion = false;
        errores.push("Debe ingresar la provincia")
    }

    if (resultadoValidacion) {
        var newPerson = new Person(name, age, birthday, province);
        personList.push(newPerson);
    
        document.getElementById("form").reset();
    } else {
        alert(errores.join(", "))
    }
}

function showData() {
    let name, age, birthday, province;

    cleanData();
    
    for (let i = 0; i < personList.length; i++) {
        name = personList[i].getName();
        age = personList[i].getAge();
        birthday = personList[i].getBirthday();
        province = personList[i].getProvince();

        let row = ` <tr>
                        <td>${name}</td>
                        <td>${age}</td>
                        <td>${birthday}</td>
                        <td>${province}</td>
                    </tr>
                    `

        document.getElementById("personTable").innerHTML += row;
    }
}

function cleanData() {
    let table = document.getElementById("personTable");

    while(table.children[1]) {
        table.removeChild(table.children[1]);
    }
}

var sendButton = document.getElementById("send");
sendButton.onclick = obtainData;

var showButton = document.getElementById("show");
showButton.onclick = showData(personList);

var cleanButton = document.getElementById("clean");
cleanButton.onclick = cleanData;