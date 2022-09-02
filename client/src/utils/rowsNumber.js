export default function rowsNumber() {
  let count = 1;
  document.querySelectorAll(".number__rows").forEach(item => {
    item.textContent = count
    count++
  })
}