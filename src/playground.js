const add = (param1, param2) => {
    return param1 + param2;
}

console.log(add(2,3));
console.log(add(1, 'world'));


// unit test one 
const unitTestExampleOne = () => {
    // test description;
    console.log('Test 1: Adding two numbers (2 and 3)');
    // test assertion 
    console.log(add(2,3) === 5 ? 'Passed' : 'Failed')
}

const unitTestExampleTwo = () => {
    // test description
    console.log('Test 2: Adding two non-numeric strings ("hello", "world")');
    // test assertion
    console.log(add("hello", " world") === "hello world" ? 'Passed' : 'Failed');
}

unitTestExampleOne();
unitTestExampleTwo();