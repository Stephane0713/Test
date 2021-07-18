const name = document.querySelector("#name");
const role = document.querySelector("#role");
const form = document.querySelector("form");
const table = document.querySelector(".table");

class Person {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

class ListTemplate {
    static add(person, list) {
        const tr = document.createElement("tr");
        const name = document.createElement("td");
        name.innerText = person.name;
        const role = document.createElement("td");
        role.innerText = person.role;

        tr.append(name);
        tr.append(role);

        list.append(tr);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const person = new Person(name.value, role.value);
    ListTemplate.add(person, table);
});
