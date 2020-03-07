import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

let jokeByIdBtn = document.getElementById("joke_by_id_btn")
let getElementByIdElement = document.getElementById("joke_by_id_text")

console.log(jokeByIdBtn)
console.log(getElementByIdElement)

jokeByIdBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let newJokeByIdText = jokes.getJokeById(getElementByIdElement.value)
    console.log(newJokeByIdText)
    if (newJokeByIdText !== undefined){
        document.getElementById("joke_by_id_text").innerHTML = newJokeByIdText
    } else {
        document.getElementById("joke_by_id_text").innerHTML = "No Joke Found"
    }
})
