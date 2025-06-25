const name = require("./names.js")
const hobby = require("./hobbies.js")

function people() {

    const fullName = name("Cristian", "Buonocore");
    const hobbies = hobby("cucinare", "giocare", "suonare");

    return {
        fullName: fullName,
        hobbies: hobbies
    }
}

const persona = people();
console.log("Nome completo:", persona.fullName.firstName + " " + persona.fullName.lastName);
console.log("Hobby:", persona.hobbies);

module.exports = people;