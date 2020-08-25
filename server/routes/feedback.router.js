const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body);
    let feedback = req.body;
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES($1, $2, $3, $4);`;

    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error POST', error)
        res.sendStatus(500);
    });
})

router.get('/', (req, res) => {
    pool.query('SELECT * from "feedback" ORDER BY "id" DESC;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in get feedback', error)
        res.sendStatus(500);
    });
})

router.delete('/:id', (req, res) => {    
    console.log(req.params.id)
    let idToDelete = req.params.id
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`
    
    pool.query(queryText, [idToDelete])
    .then(result => {
        res.sendStatus(200)
    }).catch(error => {
        console.log('error in delete', error);     
    })
});

module.exports = router;