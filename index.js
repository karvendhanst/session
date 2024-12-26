const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-btn")
const todoList = document.querySelector(".todo-list")

todoBtn.addEventListener("click", ()=>{
    const userInput  = todoInput.value;    
    updateList(userInput)
    todoInput.value = ""
})

function updateList(uInput){
    const para = document.createElement("p")
    para.innerHTML = uInput
    todoList.append(para)

    para.addEventListener("click", ()=>{
        para.style.textDecoration = 'line-through'
    }) 
    para.addEventListener("dblclick", ()=>{
        todoList.removeChild(para)
    })   
}
