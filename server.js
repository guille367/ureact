var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000; 

app.use(function(req, res, next){
    if(!req.secure){
        next();
    }
    else{
        console.log(req.secure);
        res.redirect(`http://${req.hostname}:${PORT}${req.url}`);
    }
});

app.use(express.static('public'));
app.listen(PORT,function(){
    console.log('Listening on ' + PORT);
});
