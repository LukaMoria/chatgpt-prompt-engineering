const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const { checkStudentSolutionPrompt } = require('./prompts')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const getCompletion = async(prompt, model="gpt-3.5-turbo") => {
  const messages = [{role: "user", content: prompt}]

  const completion = await openai.createChatCompletion({
    model,
    messages,
    temperature: 0
  })

  console.log(completion.data.choices[0].message)

  return completion.data.choices[0].message
}

getCompletion(checkStudentSolutionPrompt)