//Un état vous demande d'ecrire un petit programme qui vérifit que les citoyens ont le droit de voter.
//Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
//Si l'âge est inférieur à 18 lui afficher avec le prenom et nom correspondant:

//Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
//Si l'âge est supérieur ou égal à 18 lui afficher:

//prenom nom, vous êtes majeur, vous pouvez voter

import readlineSync from 'readline-sync'

const majotiry = () => {
    if (!isNaN(firstName)) {
        console.log('Please enter a valid first name')
        process.exit(1)
    } else if (!isNaN(lastName)) {
        console.log('Please enter a valid last name')
        process.exit(1)
    } else if (isNaN(age) || age < 0 || age > 100) {
        console.log('Please enter a valid age')
        process.exit(1)
    } else if (age < 18) {
        console.log(
            `Sorry, ${firstName} ${lastName}, you are a minor, you cannot vote`
        )
        process.exit(1)
    } else
        console.log(`${firstName} ${lastName}, you are an adult, you can vote`)
    process.exit(1)
}

let firstName = readlineSync.question('Firtsname: ')
let lastName = readlineSync.question('LastName: ')
let age = readlineSync.question('age: ')

majotiry()
