window.addEventListener("load", solve);

function solve() {
  let makeElement = document.getElementById('make')
  let modelElement = document.getElementById('model')
  let yearElement = document.getElementById('year')
  let fuelElement = document.getElementById('fuel')
  let originalCostElement = document.getElementById('original-cost')
  let sellingPriceElement = document.getElementById('selling-price')
  let tBodyElement = document.getElementById('table-body')
  let publishBtn = document.getElementById('publish')

  publishBtn.addEventListener('click', onPublish)

  function onPublish(e) {
    e.preventDefault()
    if (makeElement.value == '' ||
      modelElement.value == '' ||
      yearElement.value == '' ||
      fuelElement.value == '' ||
      originalCostElement.value == '' ||
      sellingPriceElement.value == '' ||
      originalCostElement.value > sellingPriceElement.value) {
      return;
    }

    let make = makeElement.value;
    let model = modelElement.value;
    let year = yearElement.value
    let fuel = fuelElement.value;
    let originalCost = originalCostElement.value;
    let sellingPrice = sellingPriceElement.value;

    let trElement = document.createElement('tr')
    trElement.setAttribute('class', 'row')

    let makeTdElement = document.createElement('td')
    makeTdElement.textContent = make
    let modelTdElement = document.createElement('td')
    modelTdElement.textContent = model
    let yearTdElement = document.createElement('td')
    yearTdElement.textContent = year
    let fuelTdElement = document.createElement('td')
    yearTdElement.textContent = fuel
    let originalCostTdElement = document.createElement('td')
    yearTdElement.textContent = originalCost
    let sellingPriceTdElement = document.createElement('td')
    yearTdElement.textContent = sellingPriceTdElement

    let editBtn = document.createElement('button')
    editBtn.setAttribute('class', 'action-btn edit')
    editBtn.textContent = 'Edit'
    let sellBtn = document.createElement('button')
    sellBtn.setAttribute('class', 'action-btn sell')
    sellBtn.textContent = 'Sell'

    let btnTdElement = document.createElement('td')
    btnTdElement.appendChild(editBtn)
    btnTdElement.appendChild(sellBtn)
    trElement.appendChild(makeTdElement)
    trElement.appendChild(modelTdElement)
    trElement.appendChild(yearTdElement)
    trElement.appendChild(fuelTdElement)
    trElement.appendChild(originalCostTdElement)
    trElement.appendChild(sellingPriceTdElement)
    trElement.appendChild(btnTdElement)

    tBodyElement.appendChild(trElement)

      makeElement.value = ''
      modelElement.value = ''
      yearElement.value = ''
      fuelElement.value = ''
      originalCostElement.value = ''
      sellingPriceElement.value = ''

  }

}
