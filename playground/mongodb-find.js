//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err)
    }
    console.log('succesful connection to db');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5aa17a37433923dc1444b7dd')})
    //     .toArray().then((docs) =>{
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err)=>{
    //     console.log('Unable to connect to the database')
    // })

    db.collection('Todos').find({completed: false}).count().then((docs) =>{
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err)=>{
        console.log('Unable to connect to the database')
    })

    db.collection('Users').find({name: 'Nikhil'}).count().then((docs) =>{
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err)=>{
        console.log('Unable to connect to the database')
    })

    // db.close();
});



