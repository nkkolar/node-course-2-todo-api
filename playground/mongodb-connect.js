//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'nikhil', age: 32}
var {name} = user
console.log(name)
console.log(new ObjectID())

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err)
    }
    console.log('succesful connection to db');

    // db.collection('Todos').insertMany([
    //     {
    //         todo: 'Learn to code in Node',
    //         completed: false
    //     }, {
    //         todo: ' create a google sheets template for CHD',
    //         completed: false
    //     }
    // ], (err, result) =>{
    //     if (err) {
    //         console.log(err)
    //     } else{
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // })


    // db.collection('Users').insertOne({
    //     name: 'Nikhil',
    //     age: 32,
    //     location: 'London'
    // }, (err, result)=>{
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2))
    //     }
    // })

    db.close();
});



