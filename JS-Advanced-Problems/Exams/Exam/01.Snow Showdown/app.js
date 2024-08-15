window.addEventListener("load", solve);

function solve() {
  const nameInput = document.getElementById('snowman-name');
  const heightInput = document.getElementById('snowman-height');
  const locationInput = document.getElementById('location');
  const creatorInput = document.getElementById('creator-name');
  const attributeInput = document.getElementById('special-attribute');
  const addBtn = document.querySelector('.add-btn');
  
  addBtn.addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();
    const name = nameInput.value;
    const height = heightInput.value;
    const location = locationInput.value;
    const creator = creatorInput.value;
    const attribute = attributeInput.value;

    if (
      name === '' ||
      height === '' ||
      location === '' ||
      creator === '' ||
      attribute === ''
    ) {
      return;
    }

    const ulPreview = document.querySelector('.snowman-preview');
    const liPreview = document.createElement('li');
    liPreview.setAttribute('class', 'snowman-info');
    const articlePreview = document.createElement('article');
    const namePreview = document.createElement('p');
    namePreview.textContent = `Name: ${name}`;
    const heightPreview = document.createElement('p');
    heightPreview.textContent = `Height: ${height}`;
    const locationPreview = document.createElement('p');
    locationPreview.textContent = `Location: ${location}`;
    const creatorPreview = document.createElement('p');
    creatorPreview.textContent = `Creator: ${creator}`;
    const attributePreview = document.createElement('p');
    attributePreview.textContent = `Attribute: ${attribute}`;

    const divPreview = document.createElement('div');
    divPreview.setAttribute('class', 'btn-container');
    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = `Edit`;
    const nextBtn = document.createElement('button');
    nextBtn.setAttribute('class', 'next-btn');
    nextBtn.textContent = `Next`;
    nextBtn.addEventListener('click', onNext);
    ulPreview.appendChild(liPreview);
    liPreview.appendChild(articlePreview);
    liPreview.appendChild(divPreview);
    articlePreview.appendChild(namePreview);
    articlePreview.appendChild(heightPreview);
    articlePreview.appendChild(locationPreview);
    articlePreview.appendChild(creatorPreview);
    articlePreview.appendChild(attributePreview);

    divPreview.appendChild(editBtn);
    divPreview.appendChild(nextBtn);

    addBtn.disabled = true;

    nameInput.value = '';
    heightInput.value = '';
    locationInput.value = '';
    creatorInput.value = '';
    attributeInput.value = '';

    editBtn.addEventListener('click', onEdit);

    function onEdit() {
      nameInput.value = name;
      heightInput.value = height;
      locationInput.value = location;
      creatorInput.value = creator;
      attributeInput.value = attribute;

      liPreview.remove();
      addBtn.disabled = false;
    }

    function onNext() {
      liPreview.remove();

      const ulNew = document.querySelector('.snow-list');
      const liNew = document.createElement('li');
      liNew.setAttribute('class', 'snowman-content');
      const articleNew = document.createElement('article');
      const nameNew = document.createElement('p');
      nameNew.textContent = `Name: ${name}`;
      const heightNew = document.createElement('p');
      heightNew.textContent = `Height: ${height}`;
      const locationNew = document.createElement('p');
      locationNew.textContent = `Location: ${location}`;
      const creatorNew = document.createElement('p');
      creatorNew.textContent = `Creator: ${creator}`;
      const attributeNew = document.createElement('p');
      attributeNew.textContent = `Attribute: ${attribute}`;
      const sendBtn = document.createElement('button');
      sendBtn.setAttribute('class', 'send-btn');
      sendBtn.textContent = 'Send';

      ulNew.appendChild(liNew);
      liNew.appendChild(articleNew);
      articleNew.appendChild(nameNew);
      articleNew.appendChild(heightNew);
      articleNew.appendChild(locationNew);
      articleNew.appendChild(creatorNew);
      articleNew.appendChild(attributeNew);
      articleNew.appendChild(sendBtn);

      sendBtn.addEventListener('click', onSend);

      function onSend() {
        const main = document.getElementById('hero');
        main.parentNode.removeChild(main);
      
        const backBtn = document.createElement('button');
        backBtn.setAttribute('class', 'back-btn');
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', onBack)
        document.body.appendChild(backBtn);
      
        const backImg = document.getElementById('back-img');
        backImg.removeAttribute('hidden')

        function onBack(){

          window.location.reload();
        }
      }
    }
  }
}