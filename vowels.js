let string = "gaurav the great";

function vowels(x){
    let numberOfvowels =0 ;

    for(let i=0; i<x.length ; i++){
        let char =x[i];
        if( x[i]==='a' ||  x[i]==='e' || x[i]==='i' || x[i]==='o' || x[i]==='u'){
            numberOfvowels =  numberOfvowels + 1;
            console.log(x[i]);
        }
          
    }
    console.log("total number of vowels are" + ' ' +  numberOfvowels)

}
let result = vowels(string);
// console.log(result);