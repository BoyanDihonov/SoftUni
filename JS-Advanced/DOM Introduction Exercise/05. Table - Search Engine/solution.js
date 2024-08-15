function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById('searchField').value;
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      rows.forEach((row) => {
         if (row.textContent.includes(search)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
      document.getElementById('searchField').value = '';
   }
}  