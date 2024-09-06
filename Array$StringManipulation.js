function ASM(str1, str2){

    const str1Array = str1.split('')
        const str2Array = str2.split('')
        const newArray = [];
    
    if(str1.length !=str2.length){
        console.log("NO SIMILARITY")
    }
    else{
        str1Array.forEach(element => {
            const index = str2Array.indexOf(element)
            if(index !==-1){
                newArray.push(element)
                console.log(newArray)
                str2Array.splice(index ,1)
                console.log(str2Array)
            }
        });
        // console.log("similar")
    }
}
const result = ASM("applee" , "papele");
// console.log(result)