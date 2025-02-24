const inputText = document.querySelector('input')
const inputBtn = document.querySelector('button')
const taskList = document.getElementsByClassName('task__list')
let taskElement = null
inputBtn.addEventListener('click', (event)=> {
    event.preventDefault()
    if(inputText.value != null) {
        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task')
        taskDiv.outerText = inputText.valueAsDate
        console.log(taskDiv.outerText)        
        const removeLink = document.createElement('a')
        removeLink.classList.add('task__remove')
        removeLink.href = '#'
        removeLink.textContent = '×'
        taskDiv.appendChild(titleDiv)
        taskDiv.appendChild(removeLink)
        taskList.appendChild(taskDiv)
    }
})
const removeLinks = document.querySelectorAll('task__remove')
removeLinks.forEach(removeLink, () => {
    removeLink.addEventListener('click', () => {

    })
})
