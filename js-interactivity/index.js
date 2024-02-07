console.log("hello, world!")

const theButton = document.querySelector('button');

const addMovie = () => {
    const theForm = document.querySelector('form');
    const inputField = theForm.querySelector('input');
    const movieTitle = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const movie = document.createElement('li');
    const theUl = document.querySelector('ul');

    console.log("addMovie working")

    movie.textContent = inputField.value;
    movie.appendChild(movieTitle);

    deleteBtn.textContent = "X";
    movie.appendChild(deleteBtn);

    theUl.appendChild(movie);

    // alert("addEventListener working");
}

const deleteMovie = movie.addEventListener ('click', (event) => { //how do you get that specific button?
    event.target.parentNode.remove() 
});

theButton.addEventListener('click', (event) => {
    event.preventDefault()
    addMovie();
    console.log("addEventListener working")
    // alert("addEventListener working " + eventHappened);
});
