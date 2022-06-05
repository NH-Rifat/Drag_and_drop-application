const cols = document.querySelectorAll(".col");
const cells = document.querySelectorAll(".cell");

let dragegdCell = null;

cells.forEach((cell) => {
  cell.addEventListener("dragstart", (e) => {
    dragegdCell = cell;
  });
});

cols.forEach((col) => {
  col.addEventListener("dragover", (e) => e.preventDefault());

  col.addEventListener("drop", (e) => {
    const itemClasses = Array.from(col.children).map(
      (child) => child.className.split(" ")[1]
    );

    if (!itemClasses.includes(dragegdCell.className.split(" ")[1])) {
      col.append(dragegdCell);
    }
    dragegdCell = null;
  });
});

