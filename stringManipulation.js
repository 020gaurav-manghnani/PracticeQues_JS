function capitalString(input){

   return input.split(' ').map(word=>{
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
   }).join(' ')

  
}

const result= capitalString("gaurav is great")
console.log(result)
