
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your plant disease assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample responses for common farmer questions
  const sampleResponses: Record<string, string[]> = {
    default: [
      "I'll need to consult with our experts about that. Could you provide more details?",
      "That's a good question. Our agricultural specialists would recommend checking the soil conditions first.",
      "Let me find some information on that for you. In general, regular monitoring of plant health is important.",
    ],
    fungicide: [
      "Fungicides are best applied as preventative measures before disease appears. Make sure to follow the label instructions for dosage and safety precautions.",
      "For fungal diseases, copper-based fungicides are often effective. Consider organic options like neem oil for less severe cases.",
    ],
    watering: [
      "Most plant diseases thrive in overly moist conditions. Water at the base of plants in the morning so leaves can dry during the day.",
      "Drip irrigation is recommended to minimize leaf wetness which can lead to fungal diseases.",
    ],
    organic: [
      "Organic treatments include neem oil, horticultural oils, and biological controls like Bacillus subtilis.",
      "Crop rotation, adequate spacing, and proper sanitation are key organic prevention strategies.",
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Check if the question contains specific keywords
    if (lowerQuestion.includes('fungicide') || lowerQuestion.includes('spray')) {
      return sampleResponses.fungicide[Math.floor(Math.random() * sampleResponses.fungicide.length)];
    } else if (lowerQuestion.includes('water') || lowerQuestion.includes('irrigation')) {
      return sampleResponses.watering[Math.floor(Math.random() * sampleResponses.watering.length)];
    } else if (lowerQuestion.includes('organic') || lowerQuestion.includes('natural')) {
      return sampleResponses.organic[Math.floor(Math.random() * sampleResponses.organic.length)];
    } else {
      return sampleResponses.default[Math.floor(Math.random() * sampleResponses.default.length)];
    }
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(input),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <Card className="flex flex-col h-[400px] max-h-[500px]">
      <CardHeader className="bg-forest-50 dark:bg-forest-900/20 border-b border-forest-100 dark:border-forest-800 py-3 px-4">
        <CardTitle className="text-forest-700 dark:text-forest-300 text-lg">
          Farmer Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full p-0">
        <div className="flex-grow overflow-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-3 ${
                message.isUser ? 'flex justify-end' : 'flex justify-start'
              }`}
            >
              <div
                className={`rounded-lg py-2 px-4 max-w-[80%] ${
                  message.isUser
                    ? 'bg-forest-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 p-3 mt-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about plant diseases, treatments..."
              className="flex-grow bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim()}
              variant="default"
              size="icon"
              className="bg-forest-600 hover:bg-forest-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;
