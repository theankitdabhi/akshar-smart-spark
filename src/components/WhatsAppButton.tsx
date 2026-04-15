import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919824037776"; // Format without + for WhatsApp API
  const message = encodeURIComponent("Hi, I'm interested in your Automation and Security services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce-subtle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute -top-2 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold animate-pulse">
        1
      </span>
    </a>
  );
};

export default WhatsAppButton;
