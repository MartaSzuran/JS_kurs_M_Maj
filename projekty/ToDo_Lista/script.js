// zmienne globalne, do których nic nie przypiszemy, 
// ale będziemy ich używać w inncyh funkcjach

let todoInput // miejsce, gdzie użytkowanik wpisuje treść zadania
let errorInfo // info o braku zadań / konieczności wpisania tekstu
let addBtn // przycisk ADD -- dodaje nowe elementy do listy
let ulList // lista zadań, tagi UL
let newTodo // nowo dodane li

let popup //popup
let popupInfo // tekst w popupie, jak się doda pusty teskt
let todoToEdit // edytowany Todo
let popupInput // input w popupie
let popupAddBtn // przycisk "zatwierdź" w popupie
let popupCloseBtn // przycisk "anuluj" w popupie

// można też zapisać w jednej linijce np. let, todoInput, errorInfo

const main = () => {
  prepateDOMElements()
  prepateDOMEvents() 
}

const prepateDOMElements = () => {
  // pobieranie wszystkich elementów
  todoInput = document.querySelector('.todo-input')
  errorInfo = document.querySelector('.error-info')
  addBtn = document.querySelector('.btn-add')
  ulList = document.querySelector('.todolist ul')

  popup  = document.querySelector('.popup')
  popupInfo  = document.querySelector('.popup-info')
  popupAddBtn  = document.querySelector('.accept')
  popupCloseBtn = document.querySelector('.cancel')
  popupInput  = document.querySelector('.popup-input')

}

const prepateDOMEvents = () => {
  // nadajemy nasłuchiwanie 
  addBtn.addEventListener('click', addNewTodo)
  ulList.addEventListener('click', checkClick)
  popupCloseBtn.addEventListener('click', closePopup)
  popupAddBtn.addEventListener('click', changeTodoText)
  todoInput.addEventListener('keyup', enterKeyCheck)
}

/* 

1. tworzy nowy element (li)
2. dodawać nowy eement do ul listy
3. funkcja odpalana na click w przycisku ADD
4. funkcja nie doda do listy pustego todo

*/

const addNewTodo = () => {
  if (todoInput.value !== '') {
    newTodo = document.createElement('li')
    newTodo.textContent = todoInput.value
    createToolsArea()

    ulList.append(newTodo)

    todoInput.value = ''
    errorInfo.textContent = ''
  } else {
    errorInfo.textContent = 'Wpisz treść zadania!'
  }
}

const createToolsArea = () => {
  const toolsPanel = document.createElement('div') 
  toolsPanel.classList.add('tools') 
  newTodo.append(toolsPanel)

  const btnComplete = document.createElement('button')
  btnComplete.classList.add('complete')
  btnComplete.innerHTML = '<i class="fas fa-check"></i>'
  
  const btnEdit = document.createElement('button')
  btnEdit.classList.add('edit')
  btnEdit.textContent = 'EDIT'
  
  const btnDelete = document.createElement('button')
  btnDelete.classList.add('delete')
  btnDelete.innerHTML = '<i class="fas fa-times"></i>'

  toolsPanel.append(btnComplete, btnEdit, btnDelete)
}

const checkClick = e => {
  if (e.target.matches('.complete')) {
    // zmieniam klasy aby zadanie bylo skreslone o znaczek wyszarzal
    e.target.closest('li').classList.toggle('completed')
    e.target.classList.toggle('completed')
  } else if (e.target.matches('.edit')) {     // func edit with passing that event
    editTodo(e)
  } else if (e.target.matches('.delete')){
    deleteTodo(e)
  }
}

const editTodo = e => {
  todoToEdit = e.target.closest('li')   // with this event we can search parent li

  popupInput.value = todoToEdit.firstChild.textContent  // take text from that todo element

  popup.style.display = "flex"
}

const closePopup = () => {
  popup.style.display = "none"
}

const changeTodoText = () => {
  if (popupInput.value !== '') {
    todoToEdit.firstChild.textContent = popupInput.value
    popup.style.display = "none"
    popupInfo.textContent = ''
  } else {
    popupInfo.textContent = "Musisz podac jakis tekst!"
  }
}

const deleteTodo = e => {
  e.target.closest('li').remove()

  const allTodos = document.querySelectorAll('li')
  if (allTodos.length === 0) {
    errorInfo.textContent = 'Brak zadan na lisie'
  }
}

const enterKeyCheck = e => {
  if (e.key === 'Enter') {
    addNewTodo()
  }
}

document.addEventListener('DOMContentLoaded', main)