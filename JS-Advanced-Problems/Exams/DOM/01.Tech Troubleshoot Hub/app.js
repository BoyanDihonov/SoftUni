window.addEventListener('load', solution);

function solution() {

  let employeeElement = document.getElementById('employee');
  let categoryElement = document.getElementById('category');
  let urgencyElement = document.getElementById('urgency');
  let teamElement = document.getElementById('team');
  let descriptionElement = document.getElementById('description')
  let addBtn = document.getElementById('add-btn')
  let previewElement = document.querySelector('.preview-list')
  let pendingList = document.querySelector('.pending-list')
  let resolvedElement = document.querySelector('.resolved-list')

  addBtn.addEventListener('click', onAdd)
  function onAdd(e) {
    e.preventDefault();
    if (employeeElement.value == "" ||
      categoryElement.value == "" ||
      urgencyElement.value == "" ||
      teamElement.value == "" ||
      descriptionElement.value == "") {
      return;
    }
    let liElementInfo = document.createElement('li')
    liElementInfo.setAttribute("class", 'preview-list')

    let articleElementInfo = document.createElement('article')

    let employee = document.createElement('p')
    employee.textContent = `From: ${employeeElement.value}`
    let category = document.createElement('p')
    category.textContent = `Category: ${categoryElement.value}`
    let urgency = document.createElement('p')
    urgency.textContent = `Urgency: ${urgencyElement.value}`
    let assigned = document.createElement('p')
    assigned.textContent = `Assigned to: ${teamElement.value}`
    let description = document.createElement('p')
    description.textContent = `Description: ${descriptionElement.value}`

    let editBtn = document.createElement('button')
    editBtn.setAttribute('class', 'edit-btn')
    editBtn.textContent = `Edit`

    let continueBtn = document.createElement('button')
    continueBtn.setAttribute(`class`, `continue-btn`)
    continueBtn.textContent = `Continue`

    addBtn.disabled = true

    articleElementInfo.appendChild(employee)
    articleElementInfo.appendChild(category)
    articleElementInfo.appendChild(urgency)
    articleElementInfo.appendChild(assigned)
    articleElementInfo.appendChild(description)

    liElementInfo.appendChild(articleElementInfo)
    liElementInfo.appendChild(editBtn)
    liElementInfo.appendChild(continueBtn)

    previewElement.appendChild(liElementInfo)

    let editedEmployee = employeeElement.value
    let editedCategory = categoryElement.value
    let editedUrgency = urgencyElement.value
    let editedTeam = teamElement.value
    let editedDescription = descriptionElement.value

    employeeElement.value = " "
    categoryElement.value = " "
    urgencyElement.value = " "
    teamElement.value = " "
    descriptionElement.value = " "

    editBtn.addEventListener('click', onEdit)

    function onEdit() {


      employeeElement.value = editedEmployee
      categoryElement.value = editedCategory
      urgencyElement.value = editedUrgency
      teamElement.value = editedTeam
      descriptionElement.value = editedDescription

      liElementInfo.remove()

      addBtn.disabled = false
    }

    continueBtn.addEventListener('click', onContinue)

    function onContinue() {

      let liElementPending = document.createElement('li')
      liElementPending.setAttribute('class', 'problem-content')

      let articleElementPending = document.createElement('article')
      articleElementPending = articleElementInfo

      let resolvedBtn = document.createElement('button')
      resolvedBtn.setAttribute('class', 'resolve-btn')
      resolvedBtn.textContent = `Resolved`

      liElementPending.appendChild(articleElementPending)
      liElementPending.appendChild(resolvedBtn)
      liElementInfo.remove()

      pendingList.appendChild(liElementPending)
      addBtn.disabled = false

      resolvedBtn.addEventListener('click', onResolve)

      function onResolve() {
        let liElementResolved = document.createElement('li')
        liElementResolved.setAttribute('class', 'problem-content')

        let articleElementResolved = document.createElement('article')
        articleElementResolved = articleElementPending

        let clearBtn = document.createElement('button')
        clearBtn.setAttribute('class', 'clear-btn')
        clearBtn.textContent = `Clear`

        liElementResolved.appendChild(articleElementResolved)
        liElementResolved.appendChild(clearBtn)
        liElementPending.remove()

        resolvedElement.appendChild(liElementResolved)

        clearBtn.addEventListener('click', onClear)

        function onClear() {
          resolvedElement.remove()
        }
      }
    }


  }
}




