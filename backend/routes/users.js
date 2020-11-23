
const fs = require('fs');
const express = require('express');
const { Router } = require('express');
const router = express.Router()
    // variables


const dataPath = '../model/users.json';

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

//login
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

//display user
router.get('/:id', (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
        let parsedData = JSON.parse(data)
        const userId = req.params["id"];
        res.send(parsedData[userId]);
    });
});
// Delete 
router.delete('/:id', (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
        // add the new user
        let parsedData = JSON.parse(data)
        const userId = req.params["id"];
        delete parsedData[userId];
        fs.writeFile(dataPath, JSON.stringify(parsedData), () => {
            res.status(200).send(`users id:${userId} removed`);
        });
    },
    true);

    //Måske lave et if statement. Hvis der står "null" i array'et så bliver det automatisk fjernet. Eller det vil måske ikke virke(hvad med kommaet??)
    //Det skal ikke laves her, men inde i login funktionen, hvor den kigger efter username. Hvis der står "null,", så spring over?.
    // Det har intet med det den her funktion at gøre. Lav et for-loop i loginfunktionen, der tager højde for "null,", og så skal den .pop(). 
});


//logout
router.post('/logout', (req, res) => {

    //her skal bruger-input tages fra req-body
    //her skal hentes database array
    fs.readFile(dataPath, "utf8", (err, data) => {
                res.status(200).json("Logged out succesfully");
                return
            },
    true);
}); 


module.exports = router;


   
   

 /*
router.get('/users', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        let parsedData = JSON.parse(data)
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});


// DELETE
router.delete('/:id', (req, res) => {

    readFile(data => {

        // add the new user
        const userId = req.params["id"];
        delete data[userId];

        writeFile(JSON.stringify(data, 2), () => {
            res.status(200).send(`users id:${userId} removed`);
        });
    },
        true);
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

*/