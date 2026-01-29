// -------------Task 1--------------

const profile = document.getElementById("profile");
profile.style.backgroundColor = "aqua"
profile.style.textAlign = "center"
profile.style.padding = "15px"
profile.style.border = "dotted"
 
// --------------------Task 2----------------

const highlight = document.getElementsByClassName("important")
let count = highlight.length;
console.log(count)
for(let i=0;highlight.length;i++){
    highlight[i].style.backgroundColor = "red";
    highlight[i].style.fontSize = "25px";
    highlight[i].style.textAlign = "center";
}

