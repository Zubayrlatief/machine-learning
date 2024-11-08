// Your code below:
import OpenAI from "openai"
const client = new OpenAI();

const response = await 
client.chat.completions.create({
  model: "gpt-4-turbo-preview",
  messages: [{
    role: "user",
    content: "what is the tallest building  in the world?" 
  }],
});

console.log(response.choices[0].message.content);


----

import OpenAI from "openai";

const client = new OpenAI();

const response = await client.chat.completions.create({
  model:"gpt-3.5-turbo",
  messages:[
    // Your code below
    {
    role: "system",
    content: "translate words into spanish"
    },
    {
    role: "user",
    content: "zubayr"
}
  ]
});

console.log(response.choices[0].message.content);

//Zubayr can be translated into Spanish as "Zubair."

-----


// modifying constraints


import OpenAI from "openai";

const client = new OpenAI();

const response = await client.chat.completions.create({
  model:"gpt-3.5-turbo",
  messages:[
    // Your code below:
    {
      role: "system",
      content: " find patterns in data and to solve the next value in the sequence"
    },
    {
      role: "user",
      content: "A=1, D=4, J=10; What is T?"
    }
    
  ]
});

console.log(response.choices[0].message.content); 

//To find the value of T, we can look for a pattern in the given sequence. 
//The pattern appears to be that the values correspond to the positions of each letter in the alphabet. 
//For example, A is the 1st letter of the alphabet, D is the 4th letter, and J is the 10th letter. 
//Therefore, T would correspond to the 20th letter of the alphabet. 
//So, T=20.

-----

import OpenAI from "openai";

const client = new OpenAI();

// Your code below:
let fewShotMessages = [
  {
    role: "user",
    content: "Product showed up on time and undamaged"
  },
  {
    role: "assistant",
    content: "positive"
  },
  {
    role: "user",
    content: "Package arrived late and damaged"
  },
    {
    role: "assistant",
    content: "Negative"
    },
    {
     role: "user",
     content: "postive or negative"
    }
];

const response = await
client.chat.completions.create(
  {
    model: "gpt-3.5-turbo",
    messages: fewShotMessages
  }
);
console.log(response.choices[0].message.content)


----

import OpenAI from "openai";

const client = new OpenAI();

function processReply(response) {
  const message = response.choices[0].message;
  console.log(message.content);
  console.log();

  return {
    role: message.role, 
    content: message.content
  };
}

let savedMessages = [{
    role: "user", 
    content: "Output a list of social media marketing strategies." 
}];
savedMessages.push({
  role: "user",
  content: "Tell me more about item 2"
});


let response = await client.chat.completions.create({
  model:"gpt-3.5-turbo",
  messages:savedMessages
});
processReply(Response)

// Your code below:
let arrayVariable = [];
savedMessages.push(processReply(response));