//arguments object - no longer bound - cannot access arguments
const add = (a,b) => {
    return a + b;
};
//console.log(add(55, 1));

// "this" keyword is no longer bound
const user = {
  name: 'Samuel',
  cities: ['Escondido', 'Litchfield Park', 'La Quinta'],
  printPlacesLived() {
     return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

//Challenege

const multiplier = {
    numbers: [2,4,6,8,10],
    multiplyBY: 3,
    multiply(){
        return this.numbers.map((num) => this.multiplyBY * num);
    }
};

console.log(multiplier.multiply());

const divider = {
    numbers: [100, 2000, 30000, 400000, 5000000],
    divider: 50,
    divide() {
        return this.numbers.map((num) => "Your answer is " +  num / this.divider);
    }
};

console.log(divider.divide());