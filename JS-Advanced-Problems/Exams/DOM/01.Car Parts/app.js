window.addEventListener('load', solve);
function solve() {
    const carModelElement = document.getElementById('car-model');
    const carYearElement = document.getElementById('car-year');
    const partNameElement = document.getElementById('part-name');
    const partNumberElement = document.getElementById('part-number');
    const conditionElement = document.getElementById('condition');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNext);
    const ulPartInfo = document.getElementsByClassName('info-list')[0];
    const completeImg = document.getElementById('complete-img');
    const completeText = document.getElementById('complete-text');

    function onNext(e) {
        e.preventDefault();
        if (carModelElement.value === '' ||
            carYearElement.value === '' ||
            partNameElement.value === '' ||
            partNumberElement.value === '' ||
            conditionElement.value === '' ||
            carYearElement.value < 1980 ||
            conditionElement.value > 2023) {
            return;
        }
        completeImg.style.visibility = 'hidden';
        completeText.textContent = '';

        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'part-content');

        let article = document.createElement('article');

        let carModel = document.createElement('p');
        carModel.textContent = `Car Model: ${carModelElement.value}`;
        let carYear = document.createElement('p');
        carYear.textContent = `Car Year: ${carYearElement.value}`;
        let partName = document.createElement('p');
        partName.textContent = `Part Name: ${partNameElement.value}`;
        let partNumber = document.createElement('p');
        partNumber.textContent = `Part Number: ${partNumberElement.value}`;
        let condition = document.createElement('p');
        condition.textContent = `Condition: ${conditionElement.value}`;

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = `Edit`;

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        article.appendChild(carModel);
        article.appendChild(carYear);
        article.appendChild(partName);
        article.appendChild(partNumber);
        article.appendChild(condition);

        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        ulPartInfo.appendChild(liElement);

        nextBtn.disabled = true;

        editBtn.addEventListener('click',onEdit){
            let editedCarModel = carModel.value
            let editedCarYear = carYear.value
            let editedPartName = partName.value
            let editedPartNumber = partNumber.value
            let editedCondition = continueBtn.value

            liElement.remove()
            
        }
    }

}


