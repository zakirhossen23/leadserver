const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();
const port = 3000;

// Enter the Page Access Token from the previous step
const FACEBOOK_PAGE_ACCESS_TOKEN = 'EABOX9BltqDQBAAZBZCMtUvDUyunJAgP4HT3EvoWGP8cBZBKl8Ur03BaYJTegmqLMuMqSqFrujCZCyz2W8AZBZAhijZCCBGfSSFDc3DsoXwlLzzUgvOTx73g4JNkd6kouE4P35daMh5wY9xnBFy07bCyLvGJazdITjbpkwkKkqXvmEHrquvuLbakfKmZBkoKSREgZD';

// Accept JSON POST body
app.use(bodyParser.json());

// GET /webhook
app.get('/webhook', (req, res) => {
    // Facebook sends a GET request
    // To verify that the webhook is set up
    // properly, by sending a special challenge that
    // we need to echo back if the "verify_token" is as specified
    if (req.query['hub.verify_token'] === 'EABOX9BltqDQBAAZBZCMtUvDUyunJAgP4HT3EvoWGP8cBZBKl8Ur03BaYJTegmqLMuMqSqFrujCZCyz2W8AZBZAhijZCCBGfSSFDc3DsoXwlLzzUgvOTx73g4JNkd6kouE4P35daMh5wY9xnBFy07bCyLvGJazdITjbpkwkKkqXvmEHrquvuLbakfKmZBkoKSREgZD') {
        res.send(req.query['hub.challenge']);
        return;
    }
})

// POST /webhook
app.post('/webhook', async (req, res) => {
  
    console.log('Instagram Request:');
    console.log(JSON.stringify(_.pick(req, ['headers', 'body', 'params', 'query'])));

    // Success
    res.send({ success: true });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
