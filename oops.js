const getBirthYear = function(){
    return new Date().getFullYear() - this.age;
}


function users(Firstname ,lastname,age){
    const user = {
        Firstname,
        lastname,
        age,
        getBirthYear
    }
    return user

}
 const user1 = users('grau' , 'mangg' , 23);
 const user2 = users('sadv' ,'dsac' , 13)





// const user = {
//     name:'gaurav',
//     age:23
// }

// console.log(getBirthYear(user));
