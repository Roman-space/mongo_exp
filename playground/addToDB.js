const mc = require('mongodb').MongoClient;

mc.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) return console.log('noe');

    db.collection('Todos').insertOne({
        text: "enjoy",
        completed: "Why not?"
    }, (err, res) => {
        if (err) return console.log('its 2 hours');
        console.log(JSON.stringify(res.ops, null, 2));
    });
    db.close();
});
