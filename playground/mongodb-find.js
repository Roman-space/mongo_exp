const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Smth wrong');
    }
    console.log('connected to MDB');
    
    // return cursor.
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');  
        console.log(JSON.stringify(docs, undefined, 2)); 
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
// because 58ea9fb715dd034d578e095a - not a String it is Object id
    db.collection('Todos').find({_id:'58ea9fb715dd034d578e095a'}).toArray().then((docs) => {
        console.log('Todos');  
        console.log(JSON.stringify(docs, undefined, 2)); 
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    //db.close();

    db.collection('Todos').find({
        _id: new ObjectID('58ea9fb715dd034d578e095a')
    }).toArray().then((docs) => {
        console.log('Todos');  
        console.log(JSON.stringify(docs, undefined, 2)); 
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

// get count of documents using promise
    db.collection('Todos').find().count().then((count) => {
        console.log('Count of documents', count);  
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('User').find({ name: 'R' }).count().then((count) => {
        console.log('Amount users with name R', count);
    }, (err) => {
        console.log('Some error');
    });
});
