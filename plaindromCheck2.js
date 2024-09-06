function Palindrome(str){

    const check = str.split('').reverse().join('')
    // console.log(check);
    if(check ===str) console.log("palindrome")
    else
    console.log("not a palindrome")
}

Palindrome("namann");