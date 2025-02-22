import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages,
    system: "You are an AI assistant specialized in providing information about apartments in Orange County. Use the user's preferences to tailor your responses and provide relevant information about available apartments, amenities, and the local area.",
  })
  return result.toDataStreamResponse()
}
