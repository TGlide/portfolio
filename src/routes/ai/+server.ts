import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

import { OPENAI_API_KEY } from '$env/static/private';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY || '',
});

// cors options for the route
export const OPTIONS = () => {
  const res = new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
  return res;
}

export const POST = async ({ request }) => {
  // Extract the `prompt` from the body of the request
  const { messages } = await request.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages.map((message: any) => ({
      content: message.content,
      role: message.role,
    })),
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  const res = new StreamingTextResponse(stream);
  // CORS
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Headers', '*');
  res.headers.set('Access-Control-Allow-Methods', '*');
  res.headers.set('Access-Control-Allow-Credentials', 'true');
  return res
};
