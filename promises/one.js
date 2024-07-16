new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task")
        resolve()
    },1000)
}).then(function(){
    console.log("resolve is called");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Chai", email : "advaittiwari2@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})