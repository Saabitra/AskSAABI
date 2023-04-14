import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

console.log(process.env.OPENAI_API_KEY)

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

// Set a delay between each request in milliseconds
const REQUEST_DELAY_MS = 1000;

let lastRequestTime = Date.now();

app.get('/', async(req, res) => {
    res.status(200).send({
        message: "Hello from UEM_Help",
    });
});

app.post('/', async(req, res) => {
    try {
        const prompt = req.body.prompt;

        // Calculate the time since the last request was made
        const currentTime = Date.now();
        const timeSinceLastRequest = currentTime - lastRequestTime;
        
        // If the last request was made less than the delay time ago, wait for the remaining time
        if (timeSinceLastRequest < REQUEST_DELAY_MS) {
            await new Promise(resolve => setTimeout(resolve, REQUEST_DELAY_MS - timeSinceLastRequest));
        }

        // Make the API request and update the last request time
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0.5,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0.3,
            presence_penalty: 0,
        });
        lastRequestTime = Date.now();

        res.status(200).send({
            bot: response.data.choices[0].text
        });

    } catch (error) {
        console.error(error)
        res.status(500).send({ error })
    }
});

app.listen(5000, () => console.log("Server running on port http://localhost:5000"));
