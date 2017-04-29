var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000; 

app.use(function(req, res, next){
    if(req["x-forwarded-proto"] === 'http'){
        next();
    }
    else{
        console.log(req.hostname, req.url)
        res.redirect('http://' + req.hostname + req.url);  
    }
});

app.use(express.static('public'));
app.listen(PORT,function(){
    console.log('Listening on' + PORT);
});
