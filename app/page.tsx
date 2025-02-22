import Header from '@/components/header'
import PreferenceForm from '@/components/preference-form'
import ChatInterface from '@/components/chat-interface'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-[#f4f1eb]">
      <Header />
      <div className="w-full max-w-md space-y-8">
        <PreferenceForm />
        <ChatInterface />
      </div>
    </main>
  )
}
