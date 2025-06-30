import { useState } from 'react';
import { FlowerOfLife } from '../components/ui/FlowerOfLife';
import { ThreeDotMenu } from '../components/ui/ThreeDotMenu';
import { InputBox } from '../components/ui/InputBox';

export default function SpeakToMom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      setMessages([...messages, { user: true, text: input }]);
      setInput('');
      // Future: send to OpenAI
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-rose-50 text-gray-800 px-4 pt-4 pb-20">
      <div className="relative w-full flex items-center justify-between">
        <ThreeDotMenu />
        <div className="flex-1 flex justify-center">
          <FlowerOfLife className="w-12 h-12 animate-pulse" />
        </div>
        <div className="w-6" />
      </div>

      <div className="flex-1 mt-6 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[85%] rounded-xl px-4 py-3 text-sm shadow-md whitespace-pre-line ${
              msg.user ? 'ml-auto bg-rose-100' : 'mr-auto bg-white'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <InputBox
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={handleSubmit}
          placeholder="Speak to MOM..."
        />
      </div>
    </div>
  );
}

// Speak to MOM UI placeholder