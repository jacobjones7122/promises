let promise = new Promise(function (fulfill, reject){
    fulfill('BOOM SAUCE');
    reject(new Error('FAILURE!!!'));
})


promise.catch(function(error){
    console.log(error.message);
});

let promise1 = Promise.resolve(console.log('BOOM SAUCE'));
let promise2 = Promise.reject(new Error("FAILURE!!!"));
