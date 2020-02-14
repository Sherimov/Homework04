function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this. getFullName = () => {
        let fullName = this.firstName + " " + this.lastName
        return fullName;
    }
}

let person = new Person ("Vasil", "Sherimov", 26);

person.getFullName();

function Student (firstName, lastName, age, academyName) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academyName;
    this.study = () => console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
}

let studentOne = new Student ('Mirko', "Mirkovski", 25, "SEDC");
let studentTwo = new Student ("Trajko", "Trajokvski", 29, "SEDC");

Person.prototype.showAcademy = function () {return `The student ${this.getFullName()} is studying in ${this.academyName}`;}
console.log(studentTwo.showAcademy());

function DesignStudent (firstName, lastName, age, isStudentOfTheMonth) {
    Object.setPrototypeOf (this, new Student(firstName, lastName, age, "Design Academy"));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = () => console.log(`The student ${this.firstName} is doing an adobe exam!`);
}

let designStudent = new DesignStudent("Miki","mikiii", 24, true)
designStudent.attendAdobeExam();

function CodeStudent(firstName, lastName, age, hasIndividualProject, hasGroupProject) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Code Academy"));
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = function (type) {
        if(type === "individual" || type === "group"){
            
            type === "individual" ? this.hasIndividualProject = true : this.hasGroupProject = true;

            console.log(`student ${this.firstName} is in ${type} project`);
        }
        // if(string === "individual") {
        //     this.hasIndividualProject = true;
        //     this.hasGroupProject = false;
        // }
        // else if(string === "group") {
        //     this.hasGroupProject = true;
        //     this.hasIndividualProject = false;
        // }
    }
}

let codeStudent = new CodeStudent("ime", "prezime", 25, false,false);
codeStudent.doProject('group');
console.log(codeStudent)

function NetworkStudent (firstName, lastName, age, academyPart) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Network Academy"));
    this.academyPart = academyPart;
    this.attendCiscoExam = () => console.log(`the student ${this.firstName} is doing a cisco exam!`)
}

let networkStudent = new NetworkStudent("name", "surname", 22, 3)
networkStudent.attendCiscoExam();

function Teacher (firstName, lastName, age, subjectTeaching) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.subjectTeaching = subjectTeaching;
    this.teacherOfSubject = function () {
        console.log(`The teacher ${this.getFullName()} is teaching ${this.subjectTeaching}`);
    }
}

let javaScriptTeacher = new Teacher ("Risto", "Ristovski", 28, "Javascript");

javaScriptTeacher.teacherOfSubject();

Person.prototype.createId = function () {
    this.id = Math.floor((Math.random() * 100000) + 1 )
    return this.id;
}

codeStudent.createId();
designStudent.createId();
networkStudent.createId();
javaScriptTeacher.academyName = "sedc";
javaScriptTeacher.createId();
console.log(javaScriptTeacher)
studentTwo.createId();
studentOne.createId();
console.log(studentOne);
console.log(studentTwo);