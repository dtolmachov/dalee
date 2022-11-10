import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from "openai"

dotenv.config()

const prompt = process.env.DALLE_PROMPT
const configuration = new Configuration({
  apiKey: process.env.DALLE_API_KEY
})

const openai = new OpenAIApi(configuration)

const response = await openai.createImage({
  prompt,
  n: 1,
  size: "1024x1024",
  response_format: "url"
})

response.data.data.forEach(img => console.log(img.url))
