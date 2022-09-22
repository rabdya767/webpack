import generateJoke from "./generateJoke";
import './styles/main.scss'
import logo from './assets/webpack.jpg'

let logoImg = document.getElementById('logo');
logoImg.src = logo;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();

console.log("RABDYA SANTHOSH");
console.log(generateJoke());