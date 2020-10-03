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

//wheel event listener
const logo_heading = document.querySelector(".logo-heading");
const newEl = document.createElement("p");
newEl.innerHTML = "Times Scrolled : ";
logo_heading.after(newEl);
let timesScrolled = 0;
document.addEventListener("wheel", (e) => {
    timesScrolled++;
    newEl.innerHTML = `Times Scrolled : ${timesScrolled}`
})

//offline event listener
window.addEventListener("offline", (e) =>{
    alert("You are now offline");
})

//keydown and keyup
document.addEventListener("keydown", (e) => {
    if(e.code === "KeyB"){
        document.body.style.fontWeight = "bold";
    }
})
document.addEventListener("keyup", (e) => {
    if(e.code === "KeyB"){
        document.body.style.fontWeight = "normal";
    }
})


