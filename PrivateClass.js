// here anyone can access class property globally
// but if we want to make it private that it should only be accessible inside classes scope then use "#" before that property

class createUser {

    #age  // jis property ko private krna hota h usko constructor k phle "#" se denote krke call kro
    constructor(a,b,c){
        this.firstname = a;
        this.lastname = b;
        this.#age=c
    }

    #hi ="hellw world"      // here by making "hi" private we cant access this property as "user1.hi" only we can see it by seeing the whole user1 object

     BirthYear() {
        return new Date().getFullYear - this.#age
    }
    getNameOfUser(){
        return this.firstname + ' ' + this.lastname
    }
}

const user1 = new createUser('g','m',23);
console.log(user1)

