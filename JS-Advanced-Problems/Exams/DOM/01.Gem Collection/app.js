window.addEventListener("load", solve);

function solve() {
    let gemName = document.getElementById('gem-name');
    let color = document.getElementById('color')
    let carats = document.getElementById('carats')
    let price = document.getElementById('price')
    let type = document.getElementById('type')
    let addBtn = document.getElementById('add-btn')
    let editBtn = document.createElement('button')
    let cancelBtn = document.createElement('button')
    let saveBtn = document.createElement('button')
    addBtn.addEventListener('click', onAdd)



    function onAdd(e) {
        e.preventDefault();
        if (gemName.value == '' ||
            color.value == '' ||
            carats.value == '' ||
            price.value == '' ||
            type.value == '')
            return;


        let liElement = document.createElement('li')
        liElement.setAttribute('class', 'gem-info')

        let article = document.createElement('article')

        let previewName = document.createElement('h4')
        previewName.textContent = gemName.value
        let previewColor = document.createElement('p')
        previewColor.textContent = `Color: ${color.value}`
        let previewCarats = document.createElement('p')
        previewCarats.textContent = `Carats: ${carats.value}`
        let previewPrice = document.createElement('p')
        previewPrice.textContent = `Price: ${price.value}`
        let previewType = document.createElement('p')
        previewType.textContent = `Type: ${type.value}`

        saveBtn.setAttribute('class', 'save-btn')
        saveBtn.textContent = `Save to Collection`

        editBtn.setAttribute('class', 'edit-btn')
        editBtn.textContent = `Edit Information`

        cancelBtn.setAttribute('class', 'cancel-btn')
        cancelBtn.textContent = `Cancel`
        let ulPreview = document.getElementById('preview-list')
        ulPreview.appendChild(liElement)
        liElement.appendChild(article)
        article.appendChild(previewName)
        article.appendChild(previewColor)
        article.appendChild(previewCarats)
        article.appendChild(previewPrice)
        article.appendChild(previewType)
        liElement.appendChild(saveBtn)
        liElement.appendChild(editBtn)
        liElement.appendChild(cancelBtn)

        let editedGemName = gemName.value
        let editedColor = color.value
        let editedCarats = carats.value
        let editedPrice = price.value
        let editedType = type.value
        gemName.value = '';
        color.value = ''
        carats.value = ''
        price.value = ''
        type.value = ''

        addBtn.disabled = true
        editBtn.addEventListener('click', onEdit)

        function onEdit() {
            gemName.value = editedGemName
            color.value = editedColor
            carats.value = editedCarats
            price.value = editedPrice
            type.value = editedType
            liElement.remove()
            addBtn.disabled = false
        }
        saveBtn.addEventListener('click', onSave)

        function onSave() {
            let liCollection = document.createElement('li')
            let liCollectionPara = document.createElement('p')
            liCollectionPara.setAttribute('class', 'collection-item')
            let ulCollection = document.getElementById('collection')
            liCollectionPara.textContent = `${editedGemName} - Color: ${editedColor}/ Carats: ${editedCarats}/ Price: ${editedPrice}$/ Type: ${editedType}`

            liCollection.appendChild(liCollectionPara)
            ulCollection.appendChild(liCollection)

            addBtn.disabled = false
            liElement.remove()
        }
        cancelBtn.addEventListener('click', onCancel)

        function onCancel() {
            liElement.remove()
            addBtn.disabled = false
        }
    }
}
