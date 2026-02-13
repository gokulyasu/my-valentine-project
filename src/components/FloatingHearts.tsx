import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  emoji: string;
}

const emojis = ["💖", "💕", "💗", "💓", "🩷", "✨", "💘", "❤️"];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 6}s`,
      duration: `${4 + Math.random() * 4}s`,
      size: `${1 + Math.random() * 1.5}rem`,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-float-heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
            bottom: "-10%",
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
