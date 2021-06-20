function highlight(table) {
  for (let tr of table.querySelectorAll("tr")) {
    for (let td of tr.children) {
      if (td.getAttribute("data-available") === "true") {
        tr.classList.add("available");
      } else if (td.getAttribute("data-available") === "false") {
        tr.classList.add("unavailable");
      } else if (td.hasAttribute("data-available") === false) {
        tr.hidden = true;
      }

      if (td.textContent === "m") {
        tr.classList.add("male");
      } else if (td.textContent === "f") {
        tr.classList.add("female");
      } else if (+td.textContent < 18) {
        tr.style = "text-decoration: line-through";
      }
    }
  }
}