import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FloatingHearts from "@/components/FloatingHearts";

const spotifyTracks = [
  "https://open.spotify.com/embed/track/3d9DChrdc6BOeFsbrZ3Is0",
  "https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3",
  "https://open.spotify.com/embed/track/1zi7xx7UVEFkmKfv06H8x0",
  "https://open.spotify.com/embed/track/0u2P5u6lvoDfwTYjAADbn4",
];

const musicNotes = ["🎵", "🎶", "🎼", "💗", "🎧", "🩷"];

const SongsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating music notes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="absolute animate-float-note text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          >
            {musicNotes[i % musicNotes.length]}
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-5xl mb-4 block">🎵</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-3">
            Our Soundtrack
          </h1>
          <p className="text-xl text-muted-foreground italic">
            Some love stories are written… ours has a soundtrack 🎵❤️
          </p>
        </motion.div>

        <div className="space-y-6">
          {spotifyTracks.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <iframe
                  src={`${url}?theme=0`}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-xl"
                  title={`Song ${i + 1}`}
                />
                <p className="text-sm text-muted-foreground italic text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  This isn't just a song… it's how my heart sounds when I think of you. 💗
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground italic mt-10 text-lg"
        >
          Every song reminds me of you 🎶
        </motion.p>

        <div className="text-center mt-10">
          <Button
            onClick={() => navigate("/memories")}
            size="lg"
            className="text-lg px-10 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
          >
            Next 📸
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SongsPage;
