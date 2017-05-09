How to start mongo?
go to mongo/bin

$ ./mongod --dbpath path/to/dbfolder

then connect with
$ ./mongo

#_id = not an auto incremented integer.#

mongo desined to scale out very easily
    add more db servers to handle extra load.

##inside of id##
default way.
    0-4 - timestamp - moment in time when id was created.
    4-7 - machine id 
    7-9 - process id
    last id 3 - just a random value.
and I can do this

```javascript 
// table === Collection
db.collection('NameOfTable').insertOne({
    _id: 1,
    name: "boom"
}, (err, res) => {
    if (err) return console.log(err);
    ...
    /**
     * how to get timestamp from id
    */
    console.log(res.ops[0]._id.getTimestamp());
    /**
     * getTimestamp() - func without arguments
     * res.ops = get all object that we add to db.
    */
});
```
if continue to talk about _id

while using require('mongodb');

```javascript
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);
```


Lets fetch data from mongo
mongodb-find.js

get the cursor of db.
db.collection('Todo').find();
