console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class person{
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence; 
        this.hobbies = hobbies;

    };
    addHobby(hobby) {
        this.hobbies.push(hobby);
    };
    removeHobby(rmHobby) {
        let foundIdx = this.hobbies.indexOf(rmHobby);
        this.hobbies.splice(foundIdx, 1);
    };
    greeting() {
        console.log("Hello fellow person!");
    };
};

console.log("EXERCISE 2");
class coder extends person {
    constructor(name, pets, residence, hobbies, occupation) {
        super (name, pets, residence, hobbies);
        this.occupation = occupation;
    }
    greeting() {
        console.log("Hello, I'm a coder!")
    }
}

console.log("EXERCISE 3");
coder = new coder("Sarah", 1, "Avondale", ["crafts", "cooking", "games"], "Bartender");
coder.addHobby("reading");
console.log(coder);
coder.removeHobby("cooking");
console.log(coder);

coder.greeting();

console.log("EXERCISE 4");

class calculator {
    result = 0;
    
    add(a, b){
        let res;
        if(b == undefined) {
            res = this.result + a;
        } else {
            res = a + b;
        }
        this.result = res;
        return this.result;
    }
    subtract(a, b){
        let res;
        if(b == undefined) {
            res = this.result - a;
        } else {
            res = a - b;
        }
        this.result = res;
        return this.result;
    }
    multiply(a, b){
        let res;
        if(b == undefined) {
            res = this.result * a;
        } else {
            res = a * b;
        }
        this.result = res;
        return this.result;
    }
    divide(a, b){
        let res;
        if(b == undefined) {
            res = this.result / a;
        } else {
            res = a / b;
        }
        this.result = res;
        return this.result;
    }
    display() {
        console.log(this.result);
    }
}

let calc = new calculator();

calc.add(0, 1);
calc.display();
calc.add(9);
calc.display();
calc.subtract(5, 3);
calc.display();
calc.subtract(9);
calc.display();
calc.multiply(1, 3);
calc.display();
calc.multiply(9);
calc.display();
calc.divide(8, 2);
calc.display();
calc.divide(9);
calc.display();