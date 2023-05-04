const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

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

// Tactic 1. Use delimiters to avoid prompt injections and show model that it's separate section.
const text = `
You should express what you want a model to do by
providing instructions that are as clear and
specific as you can possibly make them.
This will guide the model towards the desired output,
and reduce the chances of receiving irrelevant
or incorrect responses. Don't confuse writing a
clear prompt with writing a short prompt.
In many cases, longer prompts provide more clarity
and context for the model, which can lead to
more detailed and relevant outputs.`

const prompt = `
Summarize the text delimited by triple backticks \ 
into a single sentence.
\`\`\`${text}\`\`\`
`

// getCompletion(prompt)

//Tactic 2. Ask for structured output

const prompt2 = `
Generate a list of three made-up book titles along 
with their authors and genres. 
Provide them in JSON format with the following keys: book_id, title, author, genre.`

// getCompletion(prompt2)


//Tactic 3. Check conditions are satisfied.

const text1 = `
Making a cup of tea is easy! First, you need to get some
water boiling. While that's happening,
grab a cup and put a tea bag in it. Once the water is
hot enough, just pour it over the tea bag.
Let it sit for a bit so the tea can steep. After a
few minutes, take out the tea bag. If you
like, you can add some sugar or milk to taste.
And that's it! You've got yourself a delicious
cup of tea to enjoy.`

const prompt3 = `
You will be provided with text delimited by triple quotes. 
If it contains a sequence of instructions,
re-write those instructions in the following format:

Step 1 - ...
Step 2 - …
…
Step N - …

If the text does not contain a sequence of instructions,
then simply write \"No steps provided.\"

\"\"\"${text1}\"\"\"
`

// getCompletion(prompt3)

// Tactic 4. Few-shot prompting.

prompt4 = `
Your task is to answer in a consistent style.

<child>: Teach me about patience.

<grandparent>: The river that carves the deepest \ 
valley flows from a modest spring; the \ 
grandest symphony originates from a single note; \ 
the most intricate tapestry begins with a solitary thread.

<child>: Teach me about resilience.
`
// getCompletion(prompt4)

// Tactic 2.1 Specify the steps required to complete a task

text2_1 = `
In a charming village, siblings Jack and Jill set out on
a quest to fetch water from a hilltop
well. As they climbed, singing joyfully, misfortune
struck—Jack tripped on a stone and tumbled
down the hill, with Jill following suit.
Though slightly battered, the pair returned home to
comforting embraces. Despite the mishap,
their adventurous spirits remained undimmed, and they
continued exploring with delight.
`

prompt2_1 = `
Perform the following actions: 
1 - Summarize the following text delimited by <> with 1 sentence.
2 - Translate the summary into French.
3 - List each name in the French summary.
4 - Output a json object that contains the following
keys: french_summary, num_names.

Use the following format:
Text: <text to summarize>
Summary: <summary>
Translation: <summary translation>
Names: <list of names in Italian summary>
Output JSON: <json with summary and num_names>

Text: <${text2_1}>
`

// getCompletion(prompt2_1)

// Tactic 2.2 Not rush the model. Let time to create own solution (check calculations)

prompt2_2 = `
Your task is to determine if the student's solution 
is correct or not.
To solve the problem do the following:
- First, work out your own solution to the problem. 
- Then compare your solution to the student's solution
and evaluate if the student's solution is correct or not. 
Don't decide if the student's solution is correct until 
you have done the problem yourself.

Use the following format:
Question:
<question here>

Student's solution:
<student's solution here>

Actual solution:
<steps to work out the solution and your solution here>

Is the student\'s solution the same as actual solution
just calculated:

<yes or no>

Student grade:

<correct or incorrect>

Question:
<
I'm building a solar power installation and I need help \
working out the financials. 
- Land costs $100 / square foot
- I can buy solar panels for $250 / square foot
- I negotiated a contract for maintenance that will cost \
me a flat $100k per year, and an additional $10 / square \
foot
What is the total cost for the first year of operations \
as a function of the number of square feet.
>
Student's solution:
<
Let x be the size of the installation in square feet.
Costs:
1. Land cost: 100x
2. Solar panel cost: 250x
3. Maintenance cost: 100,000 + 100x
Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000
>
Actual solution:

Use <> as delimiter
`

getCompletion(prompt2_2)