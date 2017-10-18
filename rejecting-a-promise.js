var promise = new Promise(function (fulfill, reject){
    
        let success = 12;
    
        if (success === true){
            fulfill('FULFILLED!');
        } else{
            reject(Error('REJECTED!'));
        }
    });
   

    promise.then(null, function onReject(error){
        setTimeout(function() {console.log(error.message); }, 300);
    })
    

    // promise.then(function onReject (error){
    //     setTimeout(function() {console.log(error); }, 300);
    // }).catch(function onFulfill (fulfill){
    //     setTimeout(function() {console.log(fulfill); }, 300);
    // })