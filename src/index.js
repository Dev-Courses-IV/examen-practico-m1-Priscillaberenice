const printButton = document.getElementById('printButton')
const studentsList = document.getElementById('studentsList')

const students = [
    { name: "Laura", age: 22, email: "laura@email.com" },
    { name: "Anna", age: 21, email: "anna@email.com" },
    { name: "Lluis", age: 28, email: "lluis@email.com" },
    { name: "Dani", age: 21, email: "dani@email.com" },
    { name: "Leo", age: 33, email: "leo@email.com" },
    { name: "Clara", age: 24, email: "clara@email.com" },
    { name: "Marc", age: 24, email: "marc@email.com" },
    { name: "Adriana", age: 28, email: "adriana@email.com" },
    { name: "Diego", age: 32, email: "diego@email.com" },
    { name: "Mar", age: 30, email: "mar@email.com" },
    { name: "Helena", age: 22, email: "helena@email.com" },
    { name: "Javi", age: 33, email: "javi@email.com" },
    { name: "Lorena", age: 34, email: "lorena@email.com" },
    { name: "Constanza", age: 28, email: "constanza@email.com" },
  ];
  
printButton.addEventListener("click", showStudents);

 function showStudents(){
  students.map(e => {
    const student = document.createElement("li");
    student.innerHTML = `Name: ${e.name}, Age: ${e.age}`;
    studentsList.appendChild(student);
  });
 }



title.classList.add('text-center', 'text-rose-300', 'mt-10');
printButton.classList.add('text-rose-950', 'mt-10');