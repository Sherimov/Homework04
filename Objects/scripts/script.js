// document.querySelector('body')
//     .innerHTML = `<p>Hello</p>`;

// console.log(typeof(console));
// console.log(typeof(console.log));

// let student = {
//     name: 'Vasil',
//     academy: "SEDC",
//     sayHello: function () {
//         console.log(`Hello from ${this.name}, i study at ${this.academy}`)
//     }
// }

// student.sayHello();

// let studentOne = {
//     name: 'Ana',
//     academy: "SEDC",
//     sayHello: function () {
//         console.log(`Hello from ${this.name}, i study at ${this.academy}`)
//     }
// }

// function Student(name) {
//     this.name = name;
//     this.sayHello = () => {
//         console.log(`Hello from ${this.name}, i study at ${this.academy}`)
//     }
//     this.setAcademy = (academy) => {
//         this.academy = academy;
//     }
// }

// let darko = new Student('darko',);
// darko.sayHello();
// darko.setAcademy("SEAVUS");
// darko.sayHello();

// let stefan = new Student("stefan");
// let sayHello = stefan.sayHello;
// sayHello();

// let testObject = {
//     thisValue: this,
//     printThisValue : () => console.log("This from function " + this)
// }

// testObject.printThisValue();

// let student = {
//     id: 0,
//     name: "Petar",
//     address: {
//         city: "Skopje",
//         street: "KJP",
//         number: 15
//     },
//     scores: {
//         advancedJS: 9,
//         html: 8,
//         introductionToPrograming: 10,
//     }
// }
//     without desctructuring
// function showInfo(student) {
//     let info = `Student ${student.name} has these scores: `;
//     info += `advancedJS: ${student.scores.advancedJS}, html: ${student.scores.html} and  introductionToPrograming: ${student.scores.introductionToPrograming}`;
//     console.log(info)
// }

//      with desctructuring

// function showInfo({name, scores:{advancedJS, html, introductionToPrograming}}) {
//     let info = `Student ${name} has these scores: `;
//     info += `advancedJS: ${advancedJS}, html: ${html} and  introductionToPrograming: ${introductionToPrograming}`;
//     console.log(info)
// }

// showInfo(student);


// let {name, scores:{advancedJS, html, introductionToPrograming}} = student;
// console.log(name);
// console.log(html);

function Academy (academyName, subjects, start, end) {
    this.academyName = academyName;
    this.students = [];
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;
    this.printStudents = () => {return this.students} ;
    this.printSubjects = () => {return this.subjects};
}

function Subject(title, isElective, academy) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective === Boolean;
    this.academy = academy;
    this.students = students;
    this.overrideClasses = (number) => {
        if(number < 3) {
            return "Number must be bigger than 3"
        }
        else {
            numberOfClasses = number;   
        }
    }
}

function Student (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age === "number";
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = (academy, student) => {
        this.academy = academy;
        student = this.firstName + " " +this.lastName;
        academy.students.push(student)
    }
    this.startSubjects = (subject) => {
        if(this.academy !== null) {
            if (this.currentSubject !== null) {
                this.completedSubjects.push(this.currentSubject);
            }
            for(let i = 0; i < this.academy.subjects.length; i ++) {
                if(subject !== this.academy.subjects[i]) {
                    this.currentSubject = subject;
                    break
                }
                else {
                    console.log("The subject was not found")
                }
            }
        }
        else {
            console.log(error)
        }
    }
}

let sedc = new Academy (
    "Sedc",
    ["Html", "Css", "Javascript", "C#", "Sql"],
    new Date (2019, 10, 10),
    new Date (2020, 10, 10)
)

const {academyName, students, subjects} = sedc;
const [html, css, javascript, cSharp, sql] = subjects;

let subjectHtml = new Subject(html, false, academyName)
let subjectCss = new Subject(css, false, academyName)
let subjectJavascript = new Subject(javascript, true, academyName)
let subjectCsharp = new Subject(cSharp, true, academyName)
let subjectSql = new Subject(sql, true, academyName)

const newStudent = new Student ("Vasil","Sherimov", 26)
const newStudentOne = new Student ("hahahah","Sasdasdmov", 26)
const {firstName, lastName} = name;


newStudent.startAcademy(sedc, name);
newStudent.startSubjects(subjectHtml)
newStudent.startSubjects(subjectSql)
