function fetchData(str){

    let shouldfail = true ;
    const p = new Promise((resolve,reject)=>{
        if(shouldfail){
            setInterval(()=>{
                resolve(str);
            },3000)
        }
        else{
            reject("error in fetching data");
        }
    })
    return p;

}

const result = fetchData("success");
console.log(result)