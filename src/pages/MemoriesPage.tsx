import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";

const placeholderPhotos = [
  { id: 1, caption: "The beginning of us 💖" },
  { id: 2, caption: "Your smile, my weakness 😊" },
  { id: 3, caption: "Adventures together 🌟" },
  { id: 4, caption: "Our happiest moments 💕" },
  { id: 5, caption: "Forever my favorite 🩷" },
  { id: 6, caption: "Love looks like this ❤️" },
];

const MemoriesPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-5xl mb-4 block">📸</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-3">
            Our Memories
          </h1>
          <p className="text-xl text-muted-foreground italic">
            Not just pictures… pieces of my happiest moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="cursor-pointer"
            >
              <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden p-3 pb-6">
                {/* Polaroid-style placeholder */}
                <div className="aspect-square bg-muted rounded flex items-center justify-center">
                  <span className="text-5xl">📷</span>
                </div>
                <p className="text-center text-foreground font-medium mt-3 text-sm">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 space-y-4"
        >
          <p className="font-display text-2xl text-foreground italic">
            Every memory has you. Every future will too.
          </p>
          <p className="text-muted-foreground text-lg">
            Made with love, for my Janani 💖
          </p>
          <p className="text-muted-foreground italic">
            — Gokul ❤️
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MemoriesPage;
