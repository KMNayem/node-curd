const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// user: dbnayem11
// password: aBIiSi3EDU2jj2BL


const uri = "mongodb+srv://dbnayem11:aBIiSi3EDU2jj2BL@cluster0.zwrzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

    try{
        await client.connect();
        const userCollection =client.db("foodExpress").collection("user");
        const user = {
            name: 'nayem',
            email: 'km@gmail.com'
        };
        const result = await userCollection.insertOne(user);
        console.log(`User inserted with id: ${result.insertedId}`);        
    }
    finally{
        // await client.close();
    }

}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running my node curd server ');
});

app.listen(port, () =>{
    console.log('curd server is running', port);
})