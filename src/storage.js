export function getTeas() {
  return JSON.parse(localStorage.getItem("teas")) || [];
}

export function saveTeas(teas) {
  localStorage.setItem("teas", JSON.stringify(teas));
}
