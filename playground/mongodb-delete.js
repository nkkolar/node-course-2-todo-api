//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err)
    }
    console.log('succesful connection to db');

// deleteMany
    db.collection('Users').deleteMany({name: 'Nikhil'}).then((results)=>{
        console.log(results)
    })
//deleteOne
    // db.collection('Todos').deleteOne({name: 'Nikhil'}).then((results)=>{
    //     console.log(results)
    // })
//findAndDeleteOne
    // db.collection('Users').findOneAndDelete({_id: ObjectID('5aa17b672a9f35dc3ae2c392')}).then((results)=>{
    //     console.log(results)
    // })

    // db.close();
});



