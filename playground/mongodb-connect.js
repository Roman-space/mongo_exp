/*
// npm i mongodb #native client fo md
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    //connection accepted from 127.0.0.1:52394
   if (err) {
       return console.log('Unable to connect to MongoDB server');
   }
    console.log('Connected to MongoDB server');
    
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();//end connection 127.0.0.1:52394
});
*/

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

//example of ES6 desctructuring  - make new object from obj p
var user = {name: 'R', age: 25};
var {name} = user; //var c(name) = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Connect error');
    }
    console.log('Connected to MDB');
    
   /* db.collection('User').insertOne({
        name: 'R',
        age: 25,
        location: 'top'
    }, (err, result) => {
        if (err) {
            return  console.log('Insert *error'); 
        }
        //console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });
    */
    db.close();
});



