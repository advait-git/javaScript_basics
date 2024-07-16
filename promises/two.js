// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error =false;
//         if(!error){
//             resolve({username : "advait" , password:"Ak18"})
//         }else{
//             reject('ERROR : Something is wrong !!')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((userName)=>{
//     console.log(userName);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("the promise is either resolved or rejected !!"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if(!error){
            resolve({username:"Advait", password:"1811" })
        }else{
            reject('Error: JS went Wrong !!')
        }
    },1000)
});

async function consumePromiseFive(){
   try {
    const response = await promiseFive;
    console.log(response);
   } catch (error) {
    console.log(error);
   }

}

consumePromiseFive()