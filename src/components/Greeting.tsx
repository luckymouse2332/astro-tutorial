import { useState } from "preact/hooks";

export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! 感谢访问我的网站!</h3>
      <button onClick={() => setGreeting(randomMessage())}>新的欢迎词</button>
    </div>
  );
}
