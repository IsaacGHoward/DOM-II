// Your code goes here

//First 2 event listeners
const h2s = document.querySelectorAll("h2");
h2s.forEach((h2) => {
    h2.addEventListener("mouseover", (e) => {
        h2.style.backgroundColor = "Yellow";
    })
    h2.addEventListener("mouseout", (e) => {
        h2.style.backgroundColor = "White";
    })
})
