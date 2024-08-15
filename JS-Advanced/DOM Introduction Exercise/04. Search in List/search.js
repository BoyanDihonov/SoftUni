function search() {
   let search = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let result = document.getElementById('result');
   let count = 0;
   towns.forEach((town) => {
      if (town.textContent.includes(search)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         count++;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   });
   result.textContent = `${count} matches found`;
}