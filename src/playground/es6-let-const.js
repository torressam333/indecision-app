var nameVar = 'Samuel';
var nameVar = 'Liz';
//console.log('nameVar', nameVar);

let nameLet = 'Johnny';
nameLet = 'Yo';
//console.log('nameLet', nameLet);

const nameConst = 'Whatever';
//console.log('nameConst', nameConst);

//Block Scope
const fullName = 'Samuel Torres';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);