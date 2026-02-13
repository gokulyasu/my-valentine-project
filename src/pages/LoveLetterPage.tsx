import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FloatingHearts from "@/components/FloatingHearts";

const letterSectionss = [
  { type: "en", text: "My Janani," },
  { type: "en", text: "I don't know the exact moment I fell in love with you.\nMaybe it was your smile.\nMaybe it was the way you talk.\nMaybe it was the comfort I feel when I'm with you." },
  { type: "en", text: "But somewhere between our conversations and laughter…\nyou became my favorite person." },
  { type: "ta", text: "\"Unnai sandhicha piragu dhaan en vazhkaiyoda artham purinjadhu.\"" },
  { type: "en", text: "You are not just someone I love.\nYou are my peace.\nMy happiness.\nMy safe place." },
  { type: "en", text: "When life feels heavy, thinking about you makes it lighter.\nWhen I feel tired, your voice gives me strength.\nWhen I feel lost, you remind me who I am." },
  { type: "ta", text: "\"Un sirippu enakku santhosham. Un kural enakku amaidhi. Un presence enakku strength.\"" },
  { type: "en", text: "You walked into my life quietly…\nbut now I cannot imagine a single day without you." },
  { type: "en", text: "I love the way you care.\nI love the way you understand me without explanations.\nI love the way you exist in my world." },
  { type: "ta", text: "\"Nee enakku kadhal mattum illa… nee enakku nimmadhi.\"" },
  { type: "en", text: "I don't promise perfection.\nI don't promise a life without problems.\nBut I promise this —" },
  { type: "en", text: "No matter what happens,\nno matter how life changes,\nI will stand by you.\nI will choose you.\nEvery single time." },
  { type: "ta", text: "\"Ethanai naal aanaalum, ethanai prachanai vandhaalum, naan unnai vida maaten.\"" },
  { type: "en", text: "You are not just my Valentine.\nYou are my today,\nmy tomorrow,\nand every dream I see for the future." },
  { type: "en", text: "If loving you is a journey,\nI never want it to end." },
  { type: "sign", text: "Forever yours,\nGokul ❤️" },
];


const letterSections =[
  { type: "ta", text: "Adiyae," },
  { 
    type: "ta", 
    text: "Happy Valentine’s Day di Butti ❤️" 
  },

  { 
    type: "ta", 
    text: "Unna first time paathadhula irundhu, en life konjam konjam ah maari pochu. Ordinary ah irundha days ellam, ippo konjam special ah feel aagudhu…" 
  },
{type:'en',
  text:'reason nee dhaan.'
},
  { 
    type: "ta", 
    text: "Un kitta nalla pesina aprm enakku oru calm feeling varudhu. Evlo tension irundhaalum, un voice ketta podhum, konjam light ah feel panren." 
  },

  { 
    type: "ta", 
    text: "Un sirippu… adhu enakku romba pidikkum." 
  },
{type:'en',
  text:"Seri ah sollanum na, un sirippu dhaan en weak point."
},
  { 
    type: "ta", 
    text: "Nee en lover nu sollradhu simple word dhaan. Aana nee adha vida adhigam — nee en en daily happiness." 
  },

  {type:'en',text:'Ne en best friend, en support system ah irukanumnu nenaikuren'},
  { 
    type: "ta", 
    text: "Naan perfect illa. Konjam stubborn ah iruppen, konjam overthink pannuven. Aana oru vishayam clear — unna pathi en feelings romba genuine." 
  },

  { 
    type: "ta", 
    text: "Naan un kooda serious ah future pathi yosikaren." 
  },

  { 
    type: "ta", 
    text: "Intha Valentine’s Day la naan solla varadhu simple dhaan: Un kooda irukka enakku romba pidikkum. Unna love panradhu enakku proud." 
  },
{type:"en",text:"Unna lose panna enakku bayam"},
  { 
    type: "ta", 
    text: "Life la evlo ups and downs vandhaalum, sandhoshathukum kashtathukum naan un side la dhaan iruppen." 
  },

  { 
    type: "ta", 
    text: "Thanks di… en life ku vandhadhukku. Nee irukradhala dhaan en world complete ah feel aagudhu." 
  },

  { type: "en", text: "Love you always ❤️" },

  { type: "sign", text: "Forever yours,\nGokul ❤️" }
]


const LoveLetterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingHearts />
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 sm:py-20">
        {/* Envelope icon */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: [0, 180, 180, 0] }}
          transition={{ duration: 2, delay: 0.3 }}
          className="text-center mb-6"
        >
          <span className="text-6xl">💌</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xl text-muted-foreground italic mb-12"
        >
          This isn't just a letter… it's my heart speaking.
        </motion.p>

        <div className="bg-card/60 backdrop-blur-sm border border-border rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          {letterSections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              {section.type === "en" ? (
                <p className="font-display italic text-primary text-lg sm:text-xl text-center py-2">
                  {section.text}
                </p>
              ) : section.type === "sign" ? (
                <p className="font-display text-xl sm:text-2xl text-foreground text-right pt-4 whitespace-pre-line">
                  {section.text}
                </p>
              ) : (
                <p className="text-foreground text-lg sm:text-xl leading-relaxed whitespace-pre-line">
                  {section.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-lg text-muted-foreground italic mt-12"
        >
          "If my life is a movie… you are the plot twist I prayed for."
        </motion.p>

        <div className="text-center mt-10">
          <Button
            onClick={() => navigate("/songs")}
            size="lg"
            className="text-lg px-10 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
          >
            Next 🎵
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoveLetterPage;
