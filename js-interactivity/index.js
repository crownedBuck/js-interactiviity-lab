
// console.log("hello, world!")

// const theButton = document.querySelector('button');
const message = document.querySelector("#message");

const addMovie = (event) => {

    event.preventDefault()
    // const theForm = document.querySelector('form');
    const inputField = document.querySelector('input');

    const movie = document.createElement('li');
    const theUl = document.querySelector('ul');

    console.log("addMovie working")

    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie); // put the click on the span
    movie.appendChild(movieTitle); // put the span inside the li

    // initiallizing delete button and alowing it to be deleted
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteMovie); // created here where if you click it does something
    movie.appendChild(deleteBtn);

    // movie.addEventListener("click", crossOffMovie); // created here where if you click it does something


    theUl.appendChild(movie);

    // alert("addEventListener working");
}

function deleteMovie(event) {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`;
    message.classList.add('block')
    console.log(`${event.target.parentNode.textContent} was clicked`)
    event.target.parentNode.remove();
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    message.classList.add('block')

    if (event.target.classList.contains("checked") === true) {
        message.textContent = `${event.target.textContent} was watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`;
    }
    console.log("crossOffMovie was clicked");
    revealMessage();
}

// theButton.addEventListener('click', (event) => {
//     event.preventDefault()
//     addMovie();
//     console.log("addEventListener working")
//     // alert("addEventListener working " + eventHappened);
// });


const revealMessage = () => {
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

document.querySelector("form").addEventListener("submit", addMovie);
