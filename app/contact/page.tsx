import { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { MeetingScheduler } from "@/components/contact/MeetingScheduler";
import { LiveChat } from "@/components/LiveChat";

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <ContactHero />
      <ContactForm />
      <ContactDetails />
      <MeetingScheduler />
      <LiveChat />
    </div>
  );
}