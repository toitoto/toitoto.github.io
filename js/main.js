class Comment {
    constructor({ content, studentName, studentRole = "estudiante", }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}






const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: ["Curso Definitivo de HTML y CSS", "Curso Práctico de HTML y CSS", ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

function Studentz(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //   this.cursosAprobados.push(nuevoCursito);
    // }
};

Studentz.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
};

const juanita = new Studentz(
    "Juanita Alejandra",
    15, [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes",
    ],
);


// Prototipos con la sintaxis de clases
class Student2 {
    constructor({ name, cursosAprobados = [], age, email, }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

const miguelitoz = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
});

class LearningPath {
    constructor({ name, area, code, courses = [], }) {
        this.name = name;
        this.area = area;
        this.code = code;
        this.courses = courses;
    }
};

class Course {
    constructor({ name, classes = [], isFree = false, lang = "spanish", }) {
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name() { return this._name; }

    set name(nuevoNombrecito) {
        if (nuevoNombrecito === "Curso Malito de Programación Básica") {
            console.error("Web... no");
        } else {
            this._name = nuevoNombrecito;
        }
    }
};

const cursoProgBasica = new Course({ name: "Curso Gratis de Programación Básica", isFree: true, });
const cursoDefinitivoHTML = new Course({ name: "Curso Definitivo de HTML y CSS", });
const cursoPracticoHTML = new Course({ name: "Curso Practico de HTML y CSS", lang: "english", });

const escuelaWeb = new LearningPath({ name: "escuelaWeb", area: "Informatica", code: "curses01", courses: [cursoDefinitivoHTML, cursoPracticoHTML, cursoProgBasica, ], });
const escuelaData = new LearningPath({ name: "escuelaData", area: "Informatica", code: "curses02", courses: [cursoProgBasica, "Curso de la BD", "Curso de triggers", "Curso de procedimientos", ], });
const escuelaVgs = new LearningPath({ name: "escuelaVgs", area: "Games", code: "curses03", courses: [cursoProgBasica, "Curso de la logica", "Curso de gamers", ], });


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = { twitter, instagram, facebook, };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    publicarCometario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
};

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
};

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
        }
    }
};

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
};

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [escuelaWeb, escuelaVgs, ],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "miguelito_feliz",
    learningPaths: [escuelaWeb, escuelaData, ],
});

const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
});