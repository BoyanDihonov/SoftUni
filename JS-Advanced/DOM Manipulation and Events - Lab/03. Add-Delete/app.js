function addItem() {
    let input = document.getElementById('newItemText')

    if (input.value.length == 0){
        return;
    }

    let liElement = document.createElement('li')
    liElement.textContent = input.value;

    let deleteButton = document.createElement('a')
    deleteButton.textContent = '[Delete]'
    deleteButton.href = '#'
    deleteButton.addEventListener('click' , onDelete)
    liElement.appendChild(deleteButton)
    let list = document.getElementById('items')
    list.appendChild(liElement)
    input.value = ' '
    function onDelete(event){

        let deleteButton = event.target;
        let liElement = deleteButton.parentElement;
        liElement.remove()
        
    }
}