```javascript
console.log("JS CONNECTED ✔");

let questions = JSON.parse(localStorage.getItem("questions") || "[]");

// render saved posts on load
window.onload = function () {
  const list = document.getElementById("questionsList");

  questions.forEach(text => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = "<h3>" + text + "</h3>";
    list.appendChild(div);
  });
};

function addQuestion() {
  const input = document.getElementById("questionInput");
  const list = document.getElementById("questionsList");

  console.log("BUTTON CLICKED ✔");

  if (!input || !list) return;
  if (input.value.trim() === "") return;

  const text = input.value;

  // save in memory
  questions.push(text);

  // save in browser
  localStorage.setItem("questions", JSON.stringify(questions));

  // show on screen
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = "<h3>" + text + "</h3>";

  list.appendChild(div);

  input.value = "";
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
```