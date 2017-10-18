
var promise = first();

promise.then(function(fulfill){
    return second(fulfill);
}).then(function(newFulfill){
   console.log(newFulfill);
});
