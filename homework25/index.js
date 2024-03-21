const express = require('express');
const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;
const ERROR_CODE_400 = 400;
const ERROR_CODE_500 = 500;

const readFileAsPromise = util.promisify(fs.readFile);
const writeFileAsPromise = util.promisify(fs.writeFile);
const filePath = './data/notes.json'

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(error);

app.get('/notes', async (req, res) => {
    const notes = await readFileAsPromise(filePath, 'utf-8');
    res.send(notes);
});

app.post('/notes', async (req, res) => {
    try {
        const { title, text } = req.body;
        const id = uuidv4();
        const dateCreated = new Date();
        const isShared = false;
        const newNote = {
            id,
            dateCreated,
            title,
            text,
            isShared
        };
        const data = await readFileAsPromise(filePath, 'utf8');
        const notes = JSON.parse(data);
        notes.push(newNote);
        await writeFileAsPromise(filePath, JSON.stringify(notes), 'utf8');
        res.status(201);
        res.send('Success')
    } catch (err) {
        console.error(err);
        res.status(500)
        res.send('Internal Server Error');
    }
});

app.delete('/notes/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await readFileAsPromise(filePath, 'utf8');
        const notes = JSON.parse(data);
        const updatedNotes = notes.filter(note => note.id !== id);
        await writeFileAsPromise(filePath, JSON.stringify(updatedNotes), 'utf8');
        res.status(204)
        res.send('Success')
    } catch (err) {
        console.error(err);
        res.status(500)
        res.send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

function error(err, req, res, next) {
    console.log(err);
    if (err.message === ERROR_CODE_400) {
        res.status(ERROR_CODE_400);
        res.send('Bad Request');
    }

    res.status(ERROR_CODE_500);
    res.send('Internal Server Error');
}
