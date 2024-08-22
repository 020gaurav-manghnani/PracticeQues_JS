class createUser {

    constructor(a,b,c){
        this.firstname = a;
        this.lastname = b;
        this.age=c
    }

     BirthYear() {
        return new Date().getFullYear - this.age
    }
    getNameOfUser(){
        return this.firstname + ' ' + this.lastname
    }
}

const user1 = new createUser('g','m',23);
console.log(user1)

// whenever you write anything inside class be it a function or anything that directly stores into its prototype i.e inside its newly crated object
//but if you're writing anything inside classes constructor, that will get print in the console
