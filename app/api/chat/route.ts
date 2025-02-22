import { Configuration, OpenAIApi } from 'openai'
import { NextResponse } from 'next/server'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  const { messages } = await req.json()
  
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {role: "system", content: "You are an AI assistant specialized in providing information about apartments in Orange County. Use the user's preferences to tailor your responses and provide relevant information about available apartments, amenities, and the local area."},
      ...messages
    ],
  })

  return NextResponse.json(completion.data.choices[0].message)
}
