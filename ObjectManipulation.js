function ArrayOfObjects(students){

    return students.reduce((acc, students)=>{
        if(!acc[students.grade]){

            acc[students.grade] = []
        }
        acc[students.grade].push(students)
        return acc
    } ,{})
}


const array = ArrayOfObjects([
    {
        name : "gaurav",
        age: 12,
        grade : "9"
    },
    {
        name : "gaurav",
        age: 12,
    },
    {
        name : "hero",
        age: 22,
        grade : "9"
    },{
        name : "zero",
        age: 122,
        grade : "10"
    },
    {
        name : "kero",
        age: 112,
        grade : "9"
    },
    {
        name : "saurav",
        age: 12,
        grade : "10"
    }
])

console.log(array)