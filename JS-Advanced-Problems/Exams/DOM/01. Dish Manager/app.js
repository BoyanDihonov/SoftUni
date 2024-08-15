window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('genderSelect');
  const descriptionInput = document.getElementById('task');
  const submitBtn = document.getElementById('form-btn');
  const progressCount = document.getElementById('progress-count');
  const clearBtn = document.getElementById('clear-btn');
  submitBtn.addEventListener('click', onSubmit);
  clearBtn.addEventListener('click', onClear);

  let progressCounter = 0;

  function onSubmit(e) {

    e.preventDefault()
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const gender = genderInput.value;
    const description = descriptionInput.value;

    if (
      firstName === '' ||
      lastName === '' ||
      age === '' ||
      gender === '' ||
      description === ''
    ) {
      return;
    }

    progressCounter += 1;
    progressCount.textContent = progressCounter;

    let ulInProgressRef = document.getElementById('in-progress');
    let liProgressElement = document.createElement('li');
    liProgressElement.setAttribute('class', 'each-line');
    let article = document.createElement('article');
    let firstAndLastName = document.createElement('h4');
    firstAndLastName.textContent = `${firstName} ${lastName}`;
    let genderAndAgeProgress = document.createElement('p');
    genderAndAgeProgress.textContent = `${gender}, ${age}`;
    let descriptionProgress = document.createElement('p');
    descriptionProgress.textContent = `Dish description: ${description}`;

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let completeBtn = document.createElement('button');
    completeBtn.setAttribute('class', 'complete-btn');
    completeBtn.textContent = 'Mark as complete';

    ulInProgressRef.appendChild(liProgressElement);
    liProgressElement.appendChild(article);
    liProgressElement.appendChild(editBtn);
    liProgressElement.appendChild(completeBtn);

    article.appendChild(firstAndLastName);
    article.appendChild(genderAndAgeProgress);
    article.appendChild(descriptionProgress);


    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    genderInput.value = '';
    descriptionInput.value = '';

    editBtn.addEventListener('click', onEdit);

    function onEdit(e) {

      e.preventDefault()
      progressCounter -= 1;
      progressCount.textContent = progressCounter;

      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      genderInput.value = gender;
      descriptionInput.value = description;

      liProgressElement.remove();

    }

    completeBtn.addEventListener('click', onComplete);

    function onComplete(e) {
      e.preventDefault()
      progressCounter -= 1;
      progressCount.textContent = progressCounter;

      liProgressElement.remove();
      let ulComplete = document.getElementById('finished');
      let liCompleteElement = document.createElement('li');
      liCompleteElement.setAttribute('class', 'each-line');
      let articleElComplete = document.createElement('article');
      let h4Complete = document.createElement('h4');
      h4Complete.textContent = `${firstName} ${lastName}`;
      let genderAndAgeComplete = document.createElement('p');
      genderAndAgeComplete.textContent = `${gender}, ${age}`;
      let descriptionComplete = document.createElement('p');
      descriptionComplete.textContent = description;

      ulComplete.appendChild(liCompleteElement);
      liCompleteElement.appendChild(articleElComplete);
      articleElComplete.appendChild(h4Complete);
      articleElComplete.appendChild(genderAndAgeComplete);
      articleElComplete.appendChild(descriptionComplete);

    }
  }

  function onClear(e) {
    e.preventDefault()
    let ulComplete = document.getElementById('finished');
    ulComplete.innerHTML = '';
    progressCount.textContent = progressCounter;

  }
}