import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Bot } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your Industry 4.0 assistant. I can help you with pilot projects, ROI calculations, and vendor matching. How can I help?",
      sender: "bot"
    }
  ]);
  const [input, setInput] = useState("");

  const quickResponses = [
    "How does the pay-only-if-successful model work?",
    "What's the average ROI for pilot projects?",
    "How to post a new challenge?",
    "Find vendors for predictive maintenance"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user"
    };

    setMessages([...messages, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(input),
        sender: "bot"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInput("");
  };

  const getBotResponse = (userInput: string) => {
    const responses = {
      default: "I understand you're asking about pilot projects. Our platform ensures you only pay when the solution delivers measurable results. Would you like to know more about posting a challenge or finding vendors?",
      roi: "Our pilot projects typically show ROI within 3-6 months. The average return is 180-300% based on successful implementations. Would you like to see specific case studies?",
      challenge: "To post a challenge: 1) Go to Factory Dashboard 2) Click 'Post New Challenge' 3) Describe your problem 4) Set budget & timeline. Vendors will bid with pay-for-success proposals!",
      vendor: "For predictive maintenance, I recommend IoT Solutions Pvt Ltd (92% success rate) or Smart Manufacturing Co (85% success rate). Both offer pay-on-results models."
    };

    if (userInput.toLowerCase().includes("roi") || userInput.toLowerCase().includes("return")) {
      return responses.roi;
    } else if (userInput.toLowerCase().includes("challenge") || userInput.toLowerCase().includes("post")) {
      return responses.challenge;
    } else if (userInput.toLowerCase().includes("vendor") || userInput.toLowerCase().includes("predictive")) {
      return responses.vendor;
    } else {
      return responses.default;
    }
  };

  const handleQuickResponse = (response: string) => {
    setInput(response);
    handleSend();
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50"
        variant="industrial"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-96 shadow-xl z-50 bg-card">
      <CardHeader className="flex flex-row items-center justify-between py-3">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-primary" />
          <CardTitle className="text-sm">Industry 4.0 Assistant</CardTitle>
        </div>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-0 flex flex-col h-80">
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          
          {messages.length === 1 && (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Quick questions:</p>
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left text-xs h-auto py-2 px-3"
                  onClick={() => handleQuickResponse(response)}
                >
                  {response}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pilots, ROI, vendors..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="text-sm"
            />
            <Button size="sm" onClick={handleSend} variant="industrial">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;