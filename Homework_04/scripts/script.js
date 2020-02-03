fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json")
.then((response) => {
    return response.json();
})
.then((students) => {
    console.log(students.filter(student => student.averageGrade > 3))
});

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json")
.then((response) => {
    return response.json();
})
.then((students) => {
    console.log(students.filter(student => student.gender === "Female" && student.averageGrade === 5).map(student => student.firstName))
});

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json")
.then((response) => {
    return response.json();
})
.then((students) => {
    console.log(students.filter(student => student.city === "Skopje" && student.age >= 18 && student.gender === "Male").map(student =>  ({firstname: student.firstName, lastname: student.lastName})))
});

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json")
.then((response) => {
    return response.json();
})
.then((students) => console.log(students.filter(student => student.gender === "Female" && student.age > 24).map(student => student.averageGrade)));

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json")
.then((response) => {
    return response.json();
})
.then((students) => console.log(students.filter(student => student.firstName.charAt(0) === "B" && student.averageGrade > 2)));