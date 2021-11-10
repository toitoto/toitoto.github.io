const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

//console.log(Object.getOwnPropertyNames(juan));
//console.log(Object.entries(juan));
//console.log(Object.keys(juan));
/////////////////////////////////////////////////////
console.log(Object.getOwnPropertyDescriptors(juan));

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
    editA() {
        this.a = "AAAAAA";
    }
};

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);
/////////////////////////////////////////////////////