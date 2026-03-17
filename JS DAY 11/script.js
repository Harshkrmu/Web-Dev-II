// function print(num){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(num);
//            res();
//         },1000)
//     })
// }

// print(1)
// .then(()=>print(2))
// .then(()=>print(3))
// .then(()=>print(4))
// .then(()=>print(5))

// const pro = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise resolved");
//     },1000)
// })

// function getData(){
//     pro.then((res)=>console.log(res))
//     console.log("After Promise");
// }

// async:-

// Important:-
// async function always return a promise

// Why async and await exist?
// 1. To avoid promise chaining
// 2. To execute the asynchronous code properly wihtout confusion
// 3. To handle promise in a better way

// async function demo(){
//     return "Async Intro"
// }
// console.log(demo())

// await:-

// ALways use in front of promise

// It will pause the async funtion until the promise return a result

// It will print after promise then promise resolve, which is logically not understandable 

// async function getData(){
//     const val = await pro;
//     console.log(val)
//     // logic of async funtion code
//     console.log("After Promise");
// }

// // It will print "Promise resolved" first then "After Promise"

// getData()

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))

// API fetching using async and wait

async function fetchData(city) {
    try {
        const API_key = "06166e8ef2ceee402e46fb6cabda0c60";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err) {
        console.error(err);
    }
}
fetchData("london")