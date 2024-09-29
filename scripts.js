const addBtn = document.getElementById('addBtn')
const inputAdd = document.getElementById('addTask')
const section = document.querySelector('section')
const label = document.querySelector('label')



let entries = [
    {
        title: 'Alface',
        for: 1,
        id: 1
    },
    {
        title: 'Tomate',
        for: 2,
        id: 2,

    }
]




update()
onAddTaskList()


function createTask() {


    const task = document.createElement('div')



    task.setAttribute('class', 'wrapper')
    task.innerHTML = `

        <label class="label-checkbox" for="list">
            <input type="checkbox" id="list">
            <span>Manteiga</span>
        </label>

        <button id="trash-icon"><img src="./src/trash-icon.svg" alt=""></button> `

    return task
}


function addTaskToList(value) {

    entries = [
        {
            title: value,
            for: entries.length + 1,
            id: entries.length + 1,

        }, ...entries]

    update()
}


function onAddTaskList() {
    addBtn.onclick = () => {
        const { value } = inputAdd
        
        addTaskToList(value)

        inputAdd.value = ''
    }


}



function update() {
    removeTask()


    entries.forEach(entry => {
        let task = createTask()

        task.querySelector('span').textContent = entry.title
        task.querySelector('label').htmlFor = `list${entry.for}`
        task.querySelector('input').id = `list${entry.id}`

        task.querySelector('#trash-icon').onclick = () => {
            const isOK = confirm('Tem certeza que deseja deletar essa tarefa?')
            if(isOK) {
                deleteTask(entry)
            
                footer = document.querySelector('footer')
                btnClose = document.querySelector('.close-alert')


                footer.classList.remove('hide')

                btnClose.onclick = () => {
                    footer.classList.add('hide')
                }

                setTimeout(() => {
                    footer.classList.add('hide')
                }, 3000)
            }
        }
        
        section.appendChild(task)
    })

}

function removeTask() {
    let section = document.querySelector('section')

    section.querySelectorAll('div')
        .forEach((div) => {
            div.remove()
        })
}

function deleteTask(task) {
    const filteredTask = entries.filter(entry => entry.id !== task.id);
    entries = filteredTask
    update()
}





