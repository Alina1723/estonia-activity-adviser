function displayAdvice(response) {
  new Typewriter("#generated-advice", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
  console.log(response.data.answer);
}

function generateActivity(event) {
  event.preventDefault();
  let generatedAdvice = document.querySelector("#generated-advice");
  let userInput = document.querySelector("#user-input");

  let prompt = `Generate a travel activity advice in Estonia based on ${userInput.value} for first time travellers. Suggest two versions: one for cold and one for hot seasons, be short - no more that 10 lines, start from "In summer time"`;
  let context =
    "You are an Estonian citizen and expirienced travel adviser who likes to explore";
  let apiKey = "de2o6a7354a9ebbc12abf998t40de9e9";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let generatedField = document.querySelector("#generated-advice");
  generatedField.classList.remove("hidden");
  generatedField.innerHTML = `<div class="blink">Best travel experience about ${userInput.value} in Estonia is generating...</div>`;

  axios.get(apiUrl).then(displayAdvice);
}

let activityGeneratorForm = document.querySelector("#activity-generator-form");
activityGeneratorForm.addEventListener("submit", generateActivity);
