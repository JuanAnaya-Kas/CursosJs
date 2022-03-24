//wondow.onload es un evento que se dispara cuando la pagina se carga
const todos = JSON.parse(localStorage.getItem('todos')) || [];
const render = () => {
    const todoList = document.getElementById('todo-list');
    //El metodo map crea un nuevo array con los resultados de la funcion que se le pasa
    const todosTemplate = todos.map(t =>  '<li>' + t + '</li>');
    //El metodo join une los elementos de un array en un string
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li')
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () =>{
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1)
            actualizaTodo(todos);
            render();
        })
    })
}

const actualizaTodo = (todos) => {
    const todoStings = JSON.stringify(todos);
    localStorage.setItem('todos', todoStings)
}
window.onload = () => {
    render();
    //const parrafo = document.getElementById('text')
    //console.log(parrafo.innerText)
    //.innerText es para obtener el texto del elemento y cambiarlo
   // parrafo.innerText = 'Texto cambiado'
    //.innerHTML puede cambiar el html del elemento
    //parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>'
    // Opteniendo los valores de un formulario
    const form = document.getElementById('todo-form')
    form.onsubmit = (e) => {
        e.preventDefault()
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizaTodo(todos);
        //console.log(todoText);
        render();
    }
}

//El spread operator es para copiar un array o un objeto
