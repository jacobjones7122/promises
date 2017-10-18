var promise = new Promise(function (fulfill, reject){

    let success = true;

    if (success = true){
        fulfill('FULFILLED!');
    } else{
        reject('Error');
    }
});


promise.then(function(fromFulfill){
    setTimeout(function() {console.log(fromFulfill); }, 300);
})