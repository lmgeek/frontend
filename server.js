const express = require('express');
const path = require('path');
const app = express();


app.use(espress.static(__dirname+'/dist/galleryFront'));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/galleryFront/index.html'));
})


app.listen(process.env.PORT || 3000);