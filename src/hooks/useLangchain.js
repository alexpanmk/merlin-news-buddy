//Custom hook for AI logic
import { useState, useEffect } from 'react';
import { OpenAI } from 'langchain/llms/openai';

//For OpenAI function calls
import { PromptTemplate } from 'langchain/prompts';

import { HumanMessage } from 'langchain/schema';

const useLangchain=()=> {
 
  const [llms, setLlms] = useState();

  useEffect(() => {
    const llms = new OpenAI({
      openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
    })
    setLlms(llms);
  }, []);
  
  async function llmPredict(message) {
    const messages = [new HumanMessage({ content: message })];

    const llmResult =  await llms.predictMessages(messages);
    console.log(llmResult);
    return llmResult;

  }


  return llmPredict;
}
export default useLangchain;

