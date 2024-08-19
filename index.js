const name = "Aki"
const language = "Ember.js"
function introduction(name) {
    return `Hi, my name is ${name}.`;
}


function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

const user = "Gracie";
const site = "Javascript";
function introductionWithLanguageOptional(user, site = "Javascript") {
    return `Hi, my name is ${user} and I am learning to program in ${site}.`;
}

const program = "Python"
const person = "Gracie"
let greeting = introductionWithLanguageOptional ("Gracie", "Python" );
function introductionWithLanguageOptional(person, Python) {
    return `Hi, my name is ${person} and I am learning to program in ${program}.`;
}