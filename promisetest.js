function addNumberPromise(a,b){
    return new Promise(function(resolve,reject){
        
        if(typeof a !== 'number' || typeof b !== 'number')
            reject("Uno de los dos no es número");

        resolve(a+b);
    });
};

addNumberPromise(1,2).then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log("error", err);
});

addNumberPromise("1","3").then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log("error", err);
});

addNumberPromise(1,"2").then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log("error", err);
});