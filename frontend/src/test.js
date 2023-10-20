const formElement =  document.getElementById("todo-form");
const inputElement = document.getElementById("todo-input");
formElement.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = inputElement.value;
    fetch("http://localhost:5500/todos", {
        headers:{
            credentials: true
        },
        method: "POST",
        body: data
    })
    formElement.reset();
})
