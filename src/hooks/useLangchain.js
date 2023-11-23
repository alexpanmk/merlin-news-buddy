//Custom hook for AI logic
import { useState, useEffect } from 'react';
import { OpenAI } from 'langchain/llms/openai';
import { ChatOpenAI } from 'langchain/llms/chatopenai';

import { HumanMessage } from 'langchain/schema';

function useLangchain() {


  useEffect(() => {
    const llms = new OpenAI({
      openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
    })
  }, []);
  
  const llmResult= ( message )=> {
    const messages = [new HumanMessage({ content: message })];

    const llmResult =  llms.predictMessages(messages);
    console.log(llmResult);

  }



  return llmResult;
}
export default useLangchain;

