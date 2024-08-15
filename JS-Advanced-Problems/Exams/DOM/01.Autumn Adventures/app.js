window.addEventListener('load', solve);
function solve() {
    let addButtonElement = document.getElementById('add-btn');
    let timeElement = document.getElementById('time');
    let dateElement = document.getElementById('date');
    let placeElement = document.getElementById('place');
    let eventElement = document.getElementById('event-name');
    let emailElement = document.getElementById('email');
    let checkListElement = document.getElementById('check-list')
    let upcomingListElement = document.getElementById('upcoming-list');
    let finishedListElement = document.getElementById('finished-list');
    let cancelBtn = document.getElementById('clear')


    addButtonElement.addEventListener('click', onNext)

    function onNext(e) {
        e.preventDefault();
        if (timeElement.value == '' ||
            dateElement.value == '' ||
            placeElement.value == '' ||
            eventElement.value == '' ||
            emailElement.value == '') {
            return;
        }

        let liElementInfo = document.createElement("li")
        liElementInfo.setAttribute('class', 'event-content')

        let articleElementInfo = document.createElement("article");
        let time = document.createElement("p")
        time.textContent = `Begins: ${dateElement.value} at: ${timeElement.value}`

        let place = document.createElement('p')
        place.textContent = `In: ${placeElement.value}`

        let event = document.createElement('p')
        event.textContent = `Event: ${eventElement.value}`

        let email = document.createElement('p')
        email.textContent = `Contact: ${emailElement}`

        let editBtn = document.createElement('button')
        editBtn.setAttribute('class', 'edit-btn')
        editBtn.textContent = 'Edit'

        let continueBtn = document.createElement('button')
        continueBtn.setAttribute('class', 'continue-btn')
        continueBtn.textContent = 'Continue'

        articleElementInfo.appendChild(time)
        articleElementInfo.appendChild(place)
        articleElementInfo.appendChild(event)
        articleElementInfo.appendChild(email)

        liElementInfo.appendChild(articleElementInfo)
        liElementInfo.appendChild(editBtn)
        liElementInfo.appendChild(continueBtn)

        checkListElement.appendChild(liElementInfo)
        let editedTimeElement = timeElement.value;
        let editedDateElement = dateElement.value;
        let editedPlaceElement = placeElement.value;
        let editedEventElement = eventElement.value;
        let editedEmailElement = emailElement.value;

        timeElement.value = '';
        dateElement.value = '';
        placeElement.value = '';
        eventElement.value = '';
        emailElement.value = '';

        addButtonElement.disabled = true

        editBtn.addEventListener('click', onEdit)

        function onEdit() {

            timeElement.value = editedTimeElement;
            dateElement.value = editedDateElement;
            placeElement.value = editedPlaceElement;
            eventElement.value = editedEventElement;
            emailElement.value = editedEmailElement;

            liElementInfo.remove();
            addButtonElement.disabled = false
        }

        continueBtn.addEventListener('click', onContinue)

        function onContinue() {

            let liElementConfirm = document.createElement('li')
            liElementConfirm.setAttribute('class', 'event-content')

            let articleElementContinue = document.createElement('article')
            articleElementContinue = articleElementInfo

            let confirmBtn = document.createElement('button')
            confirmBtn.setAttribute('class', 'finished-btn')
            confirmBtn.textContent = 'Move to Finished'

            liElementConfirm.appendChild(articleElementContinue)
            liElementConfirm.appendChild(continueBtn)
            liElementInfo.remove()

            upcomingListElement.appendChild(liElementConfirm)
            addButtonElement.disabled = false

            confirmBtn.addEventListener('click', onConfirm)

            function onConfirm() {
                let liElementResolved = document.createElement('li');
                liElementResolved.setAttribute('class', 'event-content');

                let articleElementResolved = document.createElement("article");
                articleElementResolved = articleElementContinue;


                const cancelBtn = document.getElementById('clear')
                cancelBtn.addEventListener('click', onCancel);

                liElementResolved.appendChild(articleElementResolved);
                liElementConfirm.remove();

                finishedListElement.appendChild(liElementResolved);

                function onCancel() {
                    liElementResolved.remove();
                    addButtonElement.disabled = false;
                }
            }
        }

    }
}