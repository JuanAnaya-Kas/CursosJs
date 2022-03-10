//wondow.onload es un evento que se dispara cuando la pagina se carga
window.onload = () => {
    const parrafo = document.getElementById('text')
    //console.log(parrafo.innerText)
    //.innerText es para obtener el texto del elemento y cambiarlo
    parrafo.innerText = 'Texto cambiado'
}