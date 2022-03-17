// var http = require("http")
// var port = 3000

// var requestHandler = function(request, response){
//     console.log(request.url);
//     response.end('Hello from node server');
// }

// var server = http.createServer(requestHandler);
// server.listen(port);

// console.log("node server stared on port 3000")


// const express = require('express');
// const app = express();
// const port = 3000;
// const bodyParser = require('body-parser');
// const urlEncodedParser = bodyParser.urlencoded({extended: false});

// app.set('views', 'views');
// app.set('view engine', 'hbs');
// app.use(express.static('public'));

// app.get('/contacts', function(request, response){
//     response.render('contact_us')
// })

// app.post('/process-contacts', urlEncodedParser, function(request, response){
//     response.end('Thank you ' + request.body.first_name + " " + request.body.last_name);
// });


// app.listen(port);
// console.log('server is listening on port 3000')

const express = require('express');
const app = express();
const port =process.env.PORT || 3002;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/contacts', function(request, response){
    response.render('contact_us')
})

app.post('/process-contacts', urlEncodedParser, function(request, response){
    var weight = request.body.weight;
    var height = request.body.height;
    var bmi = weight / (height * height);
    if(bmi>30){
        console.log("you are obese!")
    }
    // response.end('Thank you for submitting, your bmi is: ' + bmi);
    response.render('response', {bmiValue : bmi})
});

//  app.post('/process-conacts', urlEncodedParser, function(request, response){
//      response.render('response')
//  })


app.listen(port);
console.log(`server listening on port ${port}`)

