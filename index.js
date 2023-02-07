const number = document.querySelector("#number");
const text = document.querySelector("#text");
const url = "https://api.adviceslip.com/advice";

async function changeAdvice() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    text.innerHTML = `${result.slip.advice}`;
    number.innerHTML = `${result.slip.id}`;
  } catch (error) {
    console.log(error);
  }
}
