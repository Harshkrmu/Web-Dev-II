let pro = new Promise((resolve,reject)=>{
    let proposal = "False"
    if (proposal === "True"){
        resolve()
    }
    else{
        reject()
    }
})
pro.then(()=>console.log("Proposal Accepted"))
pro.catch(()=>console.log("Proposal Rejected"))