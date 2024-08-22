// adding async before a function makes it return a fullfilled promise
// to make it rejected , we add "throw" keyword with some content inside it

async function makeRequest (){
    throw('rejected successfully'); //one way
    throw new Error('rejected successfuly using new error keyword') // second way
}

// any code written below any throw will not execute and function will stop its execution.