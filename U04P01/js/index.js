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

    var newPerson = new Person(name, age, birthday, province);
    personList.push(newPerson);

    showData(newPerson);

    document.getElementById("form").reset();
}

function showData(person) {
    let name = person.getName()
    let age = person.getAge()
    let birthday = person.getBirthday()
    let province = person.getProvince()

    let row = ` <tr>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${birthday}</td>
                    <td>${province}</td>
                </tr>
                `
    document.getElementById("personTable").innerHTML += row
}

var sendButton = document.getElementById("send");

sendButton.onclick = obtainData;