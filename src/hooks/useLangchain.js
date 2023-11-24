//Custom hook for AI logic
import { useState, useEffect } from 'react';
import { OpenAI } from 'langchain/llms/openai';
import { ChatOpenAI } from "langchain/chat_models/openai";

//For OpenAI function calls
import { PromptTemplate } from 'langchain/prompts';

import { HumanMessage } from 'langchain/schema';

const naturalLanguageSearchSchema = {
  name: "nl-search",
  description: "Search for news articles using natural language",
  parameters: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "The search query",
      },
      country: {
        type: "string",
        description: "The country to search in",
      },
      category: {
        type: "string",
        description: "The category to search in",
      },
    },
  }
}


const useLangchain=()=> {
 
  const [llms, setLlms] = useState();
  const [functionCallLlm, setFunctionCallLlm] = useState();

  useEffect(() => {

    //init OpenAI instance for normal completion
    const llms = new OpenAI({
      openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
    })
    setLlms(llms);

    //init OpenAI instance for natural language search
    const llms2 = new ChatOpenAI({
      modelName: "gpt-4",
      openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
    }).bind({
      functions: [naturalLanguageSearchSchema],
      function_call: { name: "nl-search" },
    });

    setFunctionCallLlm(llms2);
    
  }, []);
  
  //function for normal openAI completion (News Lab)
  async function llmPredict(message) {
    const messages = [new HumanMessage({ content: message })];
    const llmResult =  await llms.predictMessages(messages);
    console.log(llmResult);
    return llmResult;
  }

  //function for natural language search (Dashboard)
  async function naturalLanguageSearch(query) {
    const llmResult = await functionCallLlm.invoke([new HumanMessage(query)]);
    console.log(llmResult);
    return llmResult;
  }


  return { llmPredict, naturalLanguageSearch };
}
export default useLangchain;

