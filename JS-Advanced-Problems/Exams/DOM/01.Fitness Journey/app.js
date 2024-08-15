window.addEventListener('load', solve);

function solve() {

    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const contactNumberElement = document.getElementById('contact-number');
    const classTypeElement = document.getElementById('class-type');
    const classTimeElement = document.getElementById('class-time');
    const nextBtn = document.getElementById('next-btn');
    const confirmUlElement = document.querySelector('.confirm-class'); // Changed getElementsByClassName to querySelector

    let cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('class', 'cancel-btn');
    cancelBtn.textContent = 'Cancel';

    nextBtn.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        if (nameElement.value == '' ||
            emailElement.value == '' ||
            contactNumberElement.value == '' ||
            classTypeElement.value == '' ||
            classTimeElement.value == '') {
            return;
        }

        let ulListPreview = document.querySelector('.class-info');
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'info-item');
        let article = document.createElement("article");
        article.setAttribute('class', 'personal-info');
        let namePreview = document.createElement('p');
        namePreview.textContent = nameElement.value;
        let emailPreview = document.createElement('p');
        emailPreview.textContent = emailElement.value;
        let contactNumberPreview = document.createElement('p');
        contactNumberPreview.textContent = contactNumberElement.value;
        let classTypePreview = document.createElement('p');
        classTypePreview.textContent = classTypeElement.value;
        let classTimePreview = document.createElement('p');
        classTimePreview.textContent = classTimeElement.value;
        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';
        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';
        article.appendChild(namePreview);
        article.appendChild(emailPreview);
        article.appendChild(contactNumberPreview);
        article.appendChild(classTypePreview);
        article.appendChild(classTimePreview);
        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);
        ulListPreview.appendChild(liElement);

        let editedName = nameElement.value;
        let editedEmail = emailElement.value;
        let editedContNum = contactNumberElement.value;
        let editedClassType = classTypeElement.value;
        let editedClassTime = classTimeElement.value;

        nameElement.value = '';
        emailElement.value = '';
        contactNumberElement.value = '';
        classTypeElement.value = '';
        classTimeElement.value = '';
        nextBtn.disabled = true;

        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            nameElement.value = editedName;
            emailElement.value = editedEmail;
            contactNumberElement.value = editedContNum;
            classTypeElement.value = editedClassType;
            classTimeElement.value = editedClassTime;
            nextBtn.disabled = false;
            liElement.remove();
        }

        continueBtn.addEventListener('click', onContinue);

        function onContinue() {
            let liElementContinue = document.createElement('li');
            liElementContinue.setAttribute('class', 'continue-info');

            let articleContinue = article.cloneNode(true); 

            let continueBtn = document.createElement('button');
            continueBtn.setAttribute('class', 'continue-btn');
            continueBtn.textContent = 'Continue';

            liElementContinue.appendChild(articleContinue);
            liElementContinue.appendChild(cancelBtn);
            liElementContinue.appendChild(continueBtn);

            confirmUlElement.appendChild(liElementContinue);
            liElement.remove();
        }
    }

    cancelBtn.addEventListener('click', onCancel); 
    function onCancel() {
        this.parentElement.remove(); 
        nextBtn.disabled = false;
    }
}