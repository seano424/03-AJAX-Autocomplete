// TODO: Autocomplete the input with AJAX calls.

const input = document.getElementById("search");
const resultsList = document.getElementById("results");

const results = (event) => {
  const stem = input.value;
  const url = `https://wagon-dictionary.herokuapp.com/autocomplete/${stem}`;
  // Get Request
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.words);
      const words = data.words;
      if (words !== undefined) {
        // console.log(words);
        words.forEach((result) => {
          const word = `<a href="#" class="list-group-item list-group-item-action list-group-item-light">
          ${result}
          </a>`;
          resultsList.insertAdjacentHTML("afterbegin", word);
        });
      }
    });
};

input.addEventListener("keyup", results);
