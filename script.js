const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const joke = `<p>${data.setup}</p><p>${data.punchline}</p>`;
      jokeContainer.innerHTML = joke;
    })
    .catch((error) => {
      console.error("Error fetching: ", error);
      jokeContainer.innerHTML = `<p>Fetching error. Please try again.</p>`;
    })
}

getJokeBtn.addEventListener("click", fetchJoke);
