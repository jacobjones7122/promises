var promise = new Promise(function (fulfill, reject){
    fulfill('MANHATTAN');
}).then(function attachTitle(value){
    return ('DR. ' + value);
}).then(function onFulfilled(value){
    console.log(value);
});
