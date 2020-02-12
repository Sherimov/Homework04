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
            return "Number must be bigger than 3";
        }
        else {
            this.numberOfClasses = number;   
        }
    }
}

function Student (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = typeof (age) === "number";
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
newStudent.startSubjects(subjectHtml);
newStudent.startSubjects(subjectSql);
subjectCss.overrideClasses(15);

console.log(subjectCss);
console.log(sedc);
console.log(newStudent);