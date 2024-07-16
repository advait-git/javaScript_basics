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