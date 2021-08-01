const searchInput = document.getElementById("search-input");
function search() {
  const input = searchInput.value;
  window.location.href =
    "https://www.google.com/search?q=" +
    input +
    "&oq=" +
    input +
    "&aqs=chrome..69i57.858j0j1&sourceid=chrome&ie=UTF-8";
}
searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    search();
  }
});
