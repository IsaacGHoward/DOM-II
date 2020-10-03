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

//Event listeners for text content
const text_content = document.querySelectorAll(".text-content");
text_content.forEach((text) => {
    text.addEventListener("mouseover", (e) => {
        text.style.backgroundColor = "Blue";
    })
    text.addEventListener("mouseout", (e) => {
        text.style.backgroundColor = "White";
    })
})

//Added listener for dblclick, and I stopped propagation
const images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener("dblclick", (e) => {
        alert("You clicked : " + e.target.alt);
        e.stopPropagation();
    })
})
document.addEventListener("dblclick", (e) => {
    alert("You clicked the document!");
})