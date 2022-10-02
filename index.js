var button = document.querySelector("#btn");

var input = document.querySelector("#text-input");

var output = document.querySelector("#text-output");

var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslation(text) {
  return url + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something went wrong! Please try again.");
}

function getClicked() {
  console.log("clicked");

  fetch(getTranslation(input.value))
    .then((response) => response.json())
    .then((json) => {
      var translated = json.contents.translated;
      output.innerText = translated;
    })
    .catch(errorHandler);
}
button.addEventListener("click", getClicked);
