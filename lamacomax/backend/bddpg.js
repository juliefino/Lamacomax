const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user:'postgres',
    port: 5432,
    password: 'eilujfunki',
    database: 'postgres'
})

client.connect();

// Test 

/* 
client.query('Select * from patient', (err, res) => {
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
});
*/