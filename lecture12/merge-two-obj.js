let student = {
    name: "John",
    age: 20
};

let details = {
    marks: 85,
    city: "New York"
};

let mergedObject = {
    ...student,
    ...details
};

console.log(mergedObject);