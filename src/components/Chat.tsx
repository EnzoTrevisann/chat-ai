'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps{}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })
  return(
    <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Soul Coderz ChatBot</CardTitle>
          <CardDescription>Utilize o ChatBot da Soul Coderz para tirar suas dúvidas de CX!{/* Using Vercel SDK to create a chat bot.*/}</CardDescription> 
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4">
          { messages.map(messages => {
            return(
            <div key={messages.id} className="flex gap-3 text-slate-600 text-sm mb-4">
              { messages.role === 'user' && (
                <Avatar>
                  <AvatarFallback>ET</AvatarFallback>
                  <AvatarImage src="https://github.com/EnzoTrevisann.png"/>
                </Avatar>
              )}

              { messages.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>SCBot</AvatarFallback>
                  <AvatarImage src="https://github.com/rocketseat.png"/>
                </Avatar>
              )}
              <p className="leading-relaxed"> 
                <span className="block font-bold text-slate-700">
                  {messages.role === 'user' ? 'Usuário' : 'ChatBot'}:
                  </span>
                {messages.content}
                </p>
            </div>)
          })}
          </ScrollArea>
          </CardContent>
          <CardFooter>
            <form  className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="Como posso te ajudar?" value={input} onChange={handleInputChange}/>
            <Button type="submit">Enviar</Button>
            </form>
          </CardFooter>
      </Card>
  )
}