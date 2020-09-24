//Le programme précedent ne fonctionnera que dans les pays ou la majorité est à 18 ans.
//Afin que votre programme puisse fonctionner pour tous les pays, réecrivez le programme précedent pour qu'il puisse prendre un argument à son lancement en ligne de commande qui correspondera à l'age de la majorité dans le pays de l'utilisateur du programme.
//Un utilisateur américain lancerait le programme avec la commande:

//% node interMajorityTest.js 21
//Un utilisateur francais lancerait le programme avec la commande:

//% node interMajorityTest.js 18
//Si l'âge est inférieur à l'argument passé en ligne de commande lui afficher avec le prenom et nom correspondant:

//Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
//Si l'âge est supérieur ou égal à l'argument passé en ligne de commande lui afficher:

//prenom nom, vous êtes majeur, vous pouvez voter

import readlineSync from 'readline-sync'

const interMajotiry = () => {
    if (!isNaN(firstName)) {
        console.log('Please enter a valid first name')
        process.exit(1)
    } else if (!isNaN(lastName)) {
        console.log('Please enter a valid last name')
        process.exit(1)
    } else if (isNaN(age) || age < 0 || age > 100) {
        console.log('Please enter a valid age')
        process.exit(1)
    } else if (age < majotiryAge) {
        console.log(
            `Désolé, ${firstName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter`
        )
        process.exit(1)
    } else
        console.log(
            `${firstName} ${lastName}, vous êtes majeur, vous pouvez voter`
        )
    process.exit(1)
}
let majotiryAge = Number(process.argv[2])
let firstName = readlineSync.question('Firtsname: ')
let lastName = readlineSync.question('LastName: ')
let age = readlineSync.question('age: ')

interMajotiry()
