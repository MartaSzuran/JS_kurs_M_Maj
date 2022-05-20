const addBtn = document.querySelector('.add')
const removeBtn = document.querySelector('.remove')
const toggleBtn = document.querySelector('.toggle')
const text = document.querySelector('p')

const addClass = () => {
  text.classList.add('test')
}

const removeClass = () => {
  text.classList.remove('test')
}

const toggleClass = () => {
  text.classList.toggle('test')
}


removeBtn.addEventListener('click', remove)
addBtn.addEventListener('click', addClass)
toggleBtn.addEventListener('click', toggle)