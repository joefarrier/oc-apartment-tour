'use client'

import { useChat } from 'ai/react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [isTyping, setIsTyping] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsTyping(true)
    handleSubmit(e).finally(() => setIsTyping(false))
  }

  return (
    <Card className="w-full">
      <CardContent className="h-[50vh] overflow-y-auto p-4 space-y-4">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-2 rounded-lg ${m.role === 'user' ? 'bg-[#333333] text-white' : 'bg-white text-[#333333] border border-[#333333]'}`}>
              {m.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-2 rounded-lg bg-white text-[#333333] border border-[#333333]">
              AI is typing...
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <form onSubmit={onSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about apartments..."
            className="flex-grow"
          />
          <Button type="submit" disabled={isTyping} className="bg-[#333333] hover:bg-[#555555] text-white">
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
