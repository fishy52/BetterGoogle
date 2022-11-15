function Search() {
    console.log(document.getElementById("search").value);
    window.open("https://www.google.com/search?q=" + document.getElementById("search").value + " David Korzeniowski");
}