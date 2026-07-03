javascript
let q = JSON.parse(localStorage.getItem("q") || "[]");

render();

function addQuestion() {
  const i = document.getElementById("questionInput");
  if (!i.value.trim()) return;

  q.unshift(i.value);
  localStorage.setItem("q", JSON.stringify(q));

  i.value = "";
  render();
}

function render() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  q.forEach(text => {
    const d = document.createElement("div");
    d.className = "question";
    d.innerHTML = "<h3>" + text + "</h3>";
    list.appendChild(d);
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
}