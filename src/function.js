function generateActivity(event) {
  event.preventDefault();
  let generatedAdvice = document.querySelector("#generated-advice");
  generatedAdvice.innerHTML = "advice!";

  new Typewriter("#generated-advice", {
    strings: "Advice here!",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let activityGeneratorForm = document.querySelector("#activity-generator-form");
activityGeneratorForm.addEventListener("submit", generateActivity);
