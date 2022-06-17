const searchForm = document.getElementById("search");
const searchInput = document.querySelector("input");

function search(event) {
    event.preventDefault();
    const searchContent = searchInput.value
    location.href = `https://www.google.com/search?q=${ searchContent }&gl=us&hl=en&pws=0`
}

searchForm.addEventListener("submit", search);