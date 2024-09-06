function anagramCheck(a,b){

    if(a.length !== b.length) return false;

    return a.split('').sort().join('')===b.split('').sort().join('');
    
    // arranged both the strings into alphabetical order and checked if they are equal

}

const result = anagramCheck("listen" ,  "silent")
console.log(result)