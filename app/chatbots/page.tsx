import { ChatbotOverview } from "@/components/chatbots/ChatbotOverview";
import { LiveDemo } from "@/components/chatbots/LiveDemo";
import { Architecture } from "@/components/chatbots/Architecture";
import { Technologies } from "@/components/chatbots/Technologies";
import { ClientFeedback } from "@/components/chatbots/ClientFeedback";

export default function ChatbotsPage() {
  return (
    <main className="flex-1">
      <ChatbotOverview />
      <LiveDemo />
      <Architecture />
      <Technologies />
      <ClientFeedback />
    </main>
  );
}
