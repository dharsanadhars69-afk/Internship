let student = {
    name: "John",
    age: 20,
    marks: 85
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}