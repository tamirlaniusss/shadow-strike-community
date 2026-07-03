javascript
console.log("JS CONNECTED ✔");

function addQuestion() {
  const input = document.getElementById("questionInput");
  const list = document.getElementById("questionsList");

  console.log("BUTTON CLICKED ✔");

  if (!input || !list) {
    console.log("Missing elements");
    return;
  }

  if (input.value.trim() === "") return;

  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = "<h3>" + input.value + "</h3>";

  list.appendChild(div);

  input.value = "";
}

function toggleTheme() {
  document.body.classList.toggle("light");
}