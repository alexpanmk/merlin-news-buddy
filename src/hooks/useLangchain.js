//Custom hook for AI logic
import { useState, useEffect } from 'react';
import { OpenAI } from 'langchain/llms/openai';
import { ChatOpenAI } from "langchain/chat_models/openai";

//API key store
import useStore from '../useStore';

//For OpenAI function calls
import { HumanMessage } from 'langchain/schema';

const naturalLanguageSearchSchema = {
  name: "nl-search",
  description: "Search for news articles using natural language",
  parameters: {
    type: "object",
    properties: {
      q: {
        type: "string",
        description: "Keywords or phrases to search for in the article title and body.",
      },
      sources: {
        type: "string",
        description: "A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from.",
      },
      category: {
        type: "string",
        description: "The category to search in",
      },
      domains: {
        type: "string",
        description: "A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.",
      },
      language: {
        type: "string",
        description: "The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ar,de,en,es,fr,he,it,nl,no,pt,ru,sv,ud,zh.",
      },
      from: {
        type: "string",
        description: " date and optional time for the oldest article allowed. This should be in ISO 8601 format",
      },
      to: {
        type: "string",
        description: "A date and optional time for the newest article allowed. This should be in ISO 8601 format",
      },

    },
  }
}


const useLangchain=()=> {
 
  const [llms, setLlms] = useState();
  const [functionCallLlm, setFunctionCallLlm] = useState();

  const openAIApiKey = useStore((state) => state.openAIApiKey);

  useEffect(() => {

    //init OpenAI instance for normal completion
    const llms = new OpenAI({
      openAIApiKey: openAIApiKey,
    })
    setLlms(llms);

    //init OpenAI instance for natural language search
    const llms2 = new ChatOpenAI({
      modelName: "gpt-4",
      openAIApiKey: openAIApiKey,
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
    
    //Extract search arguments from function call
    const searchArguments = JSON.parse(llmResult.additional_kwargs.function_call.arguments);

    return searchArguments;

  }

  

  


  return { llmPredict, naturalLanguageSearch };
}
export default useLangchain;

