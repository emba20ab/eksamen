
const fs = require('fs');
const express = require('express');
const router = express.Router()
    // variables


const dataPath = '../data/users.json';
//Create
router.post('/', (req, res) => {

    //her skal bruger-input tages fra req-body
    //her skal hentes database array


    fs.readFile(dataPath, "utf8", (err, data) => {
    let parsedData = JSON.parse(data)
    const newUserId = parsedData.length;
    // add the new user
    req.body.id = newUserId 
    parsedData.push(req.body)
    console.log(parsedData)
    //data[newUserId.toString()] = req.body;
    fs.writeFile(dataPath, JSON.stringify(parsedData),(e) => {
        res.status(200).send('new user added');
    });
    })
    
    
});


router.post('/login', (req, res) => {

    //her skal bruger-input tages fra req-body
    //her skal hentes database array
    fs.readFile(dataPath, "utf8", (err, data) => {
        console.log(data)
        const userArray = JSON.parse(data);
        console.log(userArray)
        for (let i=0; i < userArray.length; i++) {
            if (req.body.username2 === userArray[i].username && req.body.password2 === userArray[i].password1) {
                //Gemmer bruger som logger ind i localStorage og som string
                let signedIn = userArray[i];
                
                res.status(200).json(signedIn);
                // Åbner home.html
                //window.open("../HTML/home.html", "_self");
                return
            }
        }
        console.log(req.body)
        res.status(400).send("fejl");   
    },
    true);
});   
 

module.exports = router;
    /*
    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/users', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/users', (req, res) => {

        //her skal bruger-input tages fra req-body
        //her skal hentes database array
        console.log(req.body)
    
        readFile(data => {
        const newUserId = Object.keys(data).length;
    
        // add the new user
        req.body.id = newUserId 
        data.push(req.body)
        //data[newUserId.toString()] = req.body;
        console.log(data)
    
        writeFile(JSON.stringify(data, 2), () => {
            res.status(200).send('new user added');
        });
    },
        true);
    });




    // UPDATE
    app.put('/users/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const userId = req.params["id"];
            data[userId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/users/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const userId = req.params["id"];
            delete data[userId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} removed`);
            });
        },
            true);
    });
*/


    /*
    

        */

    //her bestemmes om brugeren logges ind eller ej




  // LoginValidation
  /*
  const fs = require('fs');
const dataPath = '../data/users.json';

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        console.log(JSON.parse(data));
    });
*/



