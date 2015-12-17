var mysql      = require('mysql');


// First you need to create a connection to the db



var connection = mysql.createConnection({
  host     : 'ec2-52-34-177-145.us-west-2.compute.amazonaws.com',
  user     : 'Hemanth',
  password : 'Shirdi_1990',
  database : 'cmpe281final'
});

connection.connect(function(err) {
  console.log(err);
  
  console.log("hello world!");
});


// queries:

var query = connection.query('select count_gumballs, model_number, serial_number  from gumball',  function(err, result) {
   console.log(err);
});
console.log(query.sql); 
