// Lista de objetos para armazenar os alunos
let students = [

];

const studentList = document.querySelector(".students-list");

function renderStudents() {
    localStorage.setItem("studentsAfternoon", JSON.stringify(students));

    studentList.innerHTML = '';
    if(students.length === 0){
        studentList.innerHTML = `
           <div class="empty-state">
              Nenhum estudante cadastrado...
           </div>`;
    } else {
        students.forEach((element, index, array) => {
            const newStudent = document.createElement("div");
            newStudent.classList.add("student-card");
            newStudent.innerHTML = `
             <span class="student-name">${element.name}</span>
             <span class="student-grade">${element.grade}</span>
             <button class="btn-delete" idStudent="${index}" title="Excluir aluno">
                 🗑️ Excluir
             </button>`;
            studentList.appendChild(newStudent);
        });
    }
}

console.log("Entrada do sistema: ",localStorage.getItem("studentsAfternoon"));

if(localStorage.getItem("studentsAfternoon")){
    const stringStudents = localStorage.getItem("studentsAfternoon");
    students = JSON.parse(stringStudents);
    //renderStudents();
}

renderStudents();

const inputName = document.querySelector("#studentName");
const inputGrade = document.querySelector("#studentGrade");
const insertButton = document.querySelector(".btn");
const messageError = document.querySelector(".error-message");

insertButton.addEventListener("click", (event) => {

    if(inputName.value === "" || inputGrade.value === "") {
        messageError.textContent = "Informe nome e nota";
    } else {
        let newStudent = {
            name: inputName.value,
            grade: inputGrade.value,
        };
        students.push(newStudent);
        // atualizar o localStorage
        //console.log(JSON.stringify(students));
        renderStudents();
        inputName.value = "";
        inputGrade.value = "";
    }
});

studentList.addEventListener("click", (event) => {
    console.log(students);
    if (event.target.tagName === "BUTTON") {
        console.log("oi, vou excluir aluno: " + event.target.getAttribute("idStudent"));
        students.splice(event.target.getAttribute("idStudent"),1);
        //console.log(students);
        renderStudents();
    }
});

const buttonAverage = document.querySelector("#buttonAverage");
const averageRender = document.querySelector("#average");

buttonAverage.addEventListener("click", () => {
    console.log(students.length);
    let sumGrade = 0;
    if(students.length == 0) {
        messageError.textContent = "Lista Vazia";
    } else {
        for (let i = 0; i < students.length; i++) {
            sumGrade += Number(students[i].grade);
        }
        averageRender.textContent = sumGrade / students.length;
    }
});

