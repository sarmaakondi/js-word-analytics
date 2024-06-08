const textareaElement = document.querySelector(".textarea");
const wordsNumberElement = document.querySelector(".stat__number--words");
const charsNumberElement = document.querySelector(".stat__number--characters");
const twitterNumberElement = document.querySelector(".stat__number--twitter");
const facebookNumberElement = document.querySelector(".stat__number--facebook");

const inputHandler = () => {
  const numberOfCharacters = textareaElement.value.length;
  const twitterCharsLeft = 280 - numberOfCharacters;
  const facebookCharsLeft = 2200 - numberOfCharacters;
  let numberOfWords = 0;

  if (numberOfCharacters > 0) {
    numberOfWords = textareaElement.value.trim().split(" ").length;
  }

  if (twitterCharsLeft < 0) {
    twitterNumberElement.classList.add("stat__number--limit");
  } else {
    twitterNumberElement.classList.remove("stat__number--limit");
  }

  if (facebookCharsLeft < 0) {
    facebookNumberElement.classList.add("stat__number--limit");
  } else {
    facebookNumberElement.classList.remove("stat__number--limit");
  }

  wordsNumberElement.textContent = numberOfWords;
  charsNumberElement.textContent = numberOfCharacters;
  twitterNumberElement.textContent = twitterCharsLeft;
  facebookNumberElement.textContent = facebookCharsLeft;
};

const validateInput = () => {
  if (textareaElement.value.includes("<script>")) {
    alert("You cannot use that!");
    textareaElement.value = textareaElement.value.replace("<script>", "");
  }

  inputHandler();
};

textareaElement.addEventListener("input", validateInput);
