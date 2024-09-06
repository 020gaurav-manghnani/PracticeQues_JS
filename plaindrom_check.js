const str = "madam"

const arr = str.split('')
let forwarfArr = [];
let backwardArr = [];

for(let i=0 ;i<arr.length;i++){
    let value = arr[i]
    forwarfArr.push(value)
}
for(let i=arr.length-1 ;i>=0;i--){
    let value = arr[i]
    backwardArr.push(value)
}
if(forwarfArr==backwardArr){
    console.log("palindrom")
}
// console.log(forwarfArr,backwardArr)