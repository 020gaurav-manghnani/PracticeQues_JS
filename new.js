
function getuserBirthYear (fname , lname , age){

    this.fname =fname;
    this.lname = lname; 
    this.age = age
}

//now this GetuserBirthYear function or object has one more property inside it "prototype"
//used to add more values to the object inside the function
// to add that getBirthYear fucntion from outide we can use prototype of GetuserBirthYear function

getuserBirthYear.prototype.birthyear = function(){
    return new Date().getFullYear() - this.age;
}

const user1 = new getuserBirthYear('grauv' , 'manghna' , 223);
console.log(user1)

// now because we are storing getuserBirthYear fucntions value inside user1 varibale, user1 can also access its properties but with
// __proto__ keyword

//that means "getuserBirthYear.prototype===user1.__proto__" is true


