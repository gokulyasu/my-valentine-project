import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import FloatingHearts from "@/components/FloatingHearts";
import { Button } from "@/components/ui/button";

const noMessages = [
  
  "Solra pecha mattum kekkavae mattala ne? 🥺💔",
  "Unnala mutinja alavuku try panniko, kadasila yes tha solli aaganum 😌",
  "Careful… pressing No might break the universe 💔😂",
  "Mooditu yes ah aluthu 💖",
  "Ne No nu nenaukalaam. But, Athuku vaaipu illa 🥺",
  "Nice try… but fate already chose Yes 😏",
  "No ah? Idhu namma kathaila irukkave koodathu 😌",
  "Nope! Try again 🙈💕",
];

const ProposalPage = () => {
  const navigate = useNavigate();
  const [said, setSaid] = useState(false);
  const [noMsg, setNoMsg] = useState<string | null>(null);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);

  const handleYes = () => {
    setSaid(true);
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ff69b4", "#ff1493", "#ffb6c1", "#dda0dd", "#ffc0cb"],
    });
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.4 },
        colors: ["#ff69b4", "#ff1493", "#ffb6c1", "#dda0dd"],
      });
    }, 500);
  };

  const handleNo = useCallback(() => {
    const msg = noMessages[noCount % noMessages.length];
    setNoMsg(msg);
    setNoCount((c) => c + 1);
    setNoPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 150,
    });
    setTimeout(() => setNoMsg(null), 2500);
  }, [noCount]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background px-4">
      <FloatingHearts />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {!said ? (
            <motion.div
              key="proposal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                💍
              </motion.div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Janani
              </h1>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                If love had a destiny, it led me to you.
              </h1>

              <p className="text-muted-foreground italic text-lg mb-2">
                "Unaku vera vali illa, yes tha solli aaganum"
              </p>

              <p className="text-xl text-foreground mt-6 mb-8">
                So tell me… will you be my Valentine? ❤️
              </p>

              <div className="flex items-center justify-center gap-6 relative">
                <Button
                  onClick={handleYes}
                  size="lg"
                  className="text-lg px-10 py-6 animate-pulse-glow rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                >
                  Yes 💕
                </Button>

                <motion.div
                  animate={{ x: noPos.x, y: noPos.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Button
                    onClick={handleNo}
                    variant="outline"
                    size="lg"
                    className="text-lg px-10 py-6 rounded-full border-primary/30 hover:border-primary/50"
                  >
                    No 😅
                  </Button>
                </motion.div>
              </div>

              <AnimatePresence>
                {noMsg && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mt-8 bg-card border border-border p-4 rounded-2xl shadow-lg max-w-sm mx-auto"
                  >
                    <p className="text-foreground text-lg">{noMsg}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="accepted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="space-y-6"
            >
              <motion.div
                className="text-7xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                💕
              </motion.div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
                And just like that… my favorite girl officially became my Valentine 💕
              </h2>
              <Button
                onClick={() => navigate("/letter")}
                size="lg"
                className="mt-8 text-lg px-10 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold animate-pulse-glow"
              >
                Continue 💌
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProposalPage;
