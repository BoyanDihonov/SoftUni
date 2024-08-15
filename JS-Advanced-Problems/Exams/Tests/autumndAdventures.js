function solve() {
    const lastCheckSec = document.getElementById('second-field');
    const upcomingSec = document.getElementById('first-field');
 
    const finishedSec = document.getElementById('third-field');
 
 
    const addEventBtn = document.getElementById('add-btn');
 
    const timeInputRef = document.getElementById('time')
    const dateInputRef = document.getElementById('date')
    const placeInputRef = document.getElementById('place')
    const eventNameInputRef = document.getElementById('event-name')
    const emailInputRef = document.getElementById('email')
 
    addEventBtn.addEventListener('click', onDefault)
 
    function onDefault(e) {
        e.preventDefault()
        let time = timeInputRef.value
        let date = dateInputRef.value
        let place = placeInputRef.value
        let event = eventNameInputRef.value
        let email = emailInputRef.value
 
        if (time.value == '' || date.value == "" || place.value == "" || event.value == "" || email.value == "") {
            return;
        }
 
        let lastCheckUlRef = lastCheckSec.querySelector('ul')
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'event-content');
 
        let article = document.createElement('article');
 
        let dateTimePar = document.createElement('p')
        dateTimePar.textContent = `Begins: ${date} at: ${time}`
 
        let placePar = document.createElement('p')
        placePar.textContent = `In: ${place} `
 
        let eventPar = document.createElement('p')
        eventPar.textContent = `Event: ${event} `
 
        let emailPar = document.createElement('p')
        emailPar.textContent = `Contact: ${email}`
 
        article.appendChild(dateTimePar)
        article.appendChild(placePar)
        article.appendChild(eventPar)
        article.appendChild(emailPar)
        liElement.appendChild(article)
 
 
        let editBtn = document.createElement('button')
        editBtn.setAttribute('class', "edit-btn")
        editBtn.textContent = "Edit"
        editBtn.addEventListener('click', onEdit)
        liElement.appendChild(editBtn);
 
        let continueBtn = document.createElement('button')
        continueBtn.setAttribute('class', "continue-btn")
        continueBtn.textContent = "Continue"
        continueBtn.addEventListener('click', onContinue);
        liElement.appendChild(continueBtn);
 
        lastCheckUlRef.appendChild(liElement)
 
        addEventBtn.disabled = true;
 
        timeInputRef.value = ""
        dateInputRef.value = ""
        placeInputRef.value = ""
        eventNameInputRef.value = ""
        emailInputRef.value = ""
 
        function onEdit(e) {
            addEventBtn.disabled = false;
 
            timeInputRef.value = time
            dateInputRef.value = date
            placeInputRef.value = place
            eventNameInputRef.value = event
            emailInputRef.value = email
 
            liElement.remove()
 
        }
 
        function onContinue() {
 
            liElement.remove()
            let upcomingSecUl = upcomingSec.querySelector('ul');
            let newLiElement = document.createElement('li')
            newLiElement.setAttribute('class', 'event-content');
            newLiElement.appendChild(article);
 
            let moveToFinishBtn = document.createElement('button');
            moveToFinishBtn.setAttribute('class', 'finished-btn')
            moveToFinishBtn.textContent = "Move to Finished"
            moveToFinishBtn.addEventListener('click', onFinish)
            newLiElement.appendChild(moveToFinishBtn);
            upcomingSecUl.appendChild(newLiElement);
            addEventBtn.disabled = false;
 
            function onFinish(e) {
 
                let finishSecUl = finishedSec.querySelector('ul');
                newLiElement.removeChild(moveToFinishBtn);
                finishSecUl.appendChild(newLiElement);
 
                let clearBtn = document.getElementById('clear')
                clearBtn.addEventListener('click', onClear)
 
                function onClear(e) {
                    newLiElement.remove();
                   
                }
            }
 
        }
 
    }
 
}