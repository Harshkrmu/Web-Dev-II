// // Create Element
// const para = document.createElement("p");
// para.textContent = "This is a dynamically added para";
// console.log(para);

// // Append Element
// document.getElementById("content").appendChild(para);

// // Remove Element
// document.querySelector("#content p").remove()

// // Create Image
// const image = document.createElement("img")
// image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJuMarLB0M0okLc1CBjyU0KX59FeKWewStg&s")
// image.setAttribute("alt","Gun")

// const gallery = document.getElementById("gallery")
// gallery.appendChild(image)

// // Digital Clock

// setInterval(() => {
//     let date = new Date();

//     let hour = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     if (hour>12){
//     let hour12 = hour-12
//     }
//     hour12 = hour
//     const clock = document.getElementById("digi-clock")
//     clock.textContent = hour12+":"+min+":"+sec
// },1000)