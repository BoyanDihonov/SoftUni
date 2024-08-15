function solve() {
    const [name,hall,price] = document.querySelectorAll('#container input')
    const movies = document.querySelector('#movie ul')
    const archive = document.querySelector('#archive ul')
    const clearBtn = document.querySelector('#archive button')

    document.querySelector('#container button').addEventListener('click', addMovie)

    function addMovie(e){
        e.preventDefault()

        if (!name.value || !hall.value || !isValidPrice(price.value)){
            return;
        }

        const movieElement = document.createMovieElement(name.value,hall.value,price.value);
        movies.appendChild(movieElement)

        clearInputs();

        function createMovieElement(movieName, movieHall, moviePrice){

            const li = documnet

        }
        function clearInputs(){
            name.value= '';
            hall.value= '';
            price.value= '';
        }

    }
}