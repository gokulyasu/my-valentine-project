import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import img001 from '../assets/001.jpg'
import img002 from '../assets/002.jpg'
import img003 from '../assets/003.jpg'

import img004 from '../assets/004.jpg'

import img005 from '../assets/005.jpg'

import img006 from '../assets/006.jpg'

import img007 from '../assets/007.jpg'

import img008 from '../assets/008.jpg'

import img009 from '../assets/009.jpg'

import img010 from '../assets/010.jpg'

import img011 from '../assets/011.jpg'

import img012 from '../assets/012.jpg'

import img013 from '../assets/013.jpg'






const placeholderPhotos = [

{ id: 1, caption: "The beginning of us 💖", src: img001 },
{ id: 2, caption: "Your smile, my weakness 😊", src: img002 },
{ id: 3, caption: "Every adventure is better with you 🌟", src: img003 },
{ id: 4, caption: "Our happiest little moments 💕", src: img004 },
{ id: 5, caption: "My forever favorite person 🩷", src: img005 },
{ id: 6, caption: "Love looks like this — you ❤️", src: img006 },
{ id: 8, caption: "A memory I’ll keep forever ✨", src: img008 },
{ id: 9, caption: "You make ordinary days beautiful 🌼", src: img009 },
{ id: 10, caption: "Your presence feels like home 🏡❤️", src: img010 },
{ id: 11, caption: "Moments like these are priceless 💫", src: img011 },
{ id: 13, caption: "With you, life feels magical ✨💖", src: img013 },

];


// { id: 7, caption: "Love looks like this ❤️",  src: img007 },

// { id: 12, caption: "Love looks like this ❤️",  src: img012 },

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
                {/* <div className="aspect-square bg-muted rounded flex items-center justify-center">
                                                                                                                                                                                                                                                                                                                                                                          <span className="text-5xl">📷</span>
                                                                                                                                                                                                                                                                                                                                                                                          </div> */}

                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <span className="text-5xl">📷</span>
                  </div>
                )}


                {/* {photo.src ? (
                                                                                                                                                                                                                                                                                                                                                                                                                                                             <>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <img
                                                                                                                                                                                                                                                                                                                                                                                                                                                                           src={photo.src.replace(/&amp;/g, "&")}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   alt={photo.caption}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           className="w-full h-full object-cover"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <img
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               src={(photo.hoverSrc || photo.src).replace(/&amp;/g, "&")}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       alt={`${photo.caption} (hover)`}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ) : (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <div className="w-full h-full flex items-center justify-center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <span className="text-5xl">📷</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           )} */}

                {/* <motion.img
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 src={photo.src?.replace(/&amp;/g, "&")}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     alt={photo.caption}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         className="inset-0 w-full h-full object-cover"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             initial={{ opacity: 1, scale: 1 }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 whileHover={{ opacity: 0, scale: 1.05 }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     transition={{ duration: 0.3, ease: "easeOut" }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       />


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <motion.img
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             src={(photo.hoverSrc || photo.src)?.replace(/&amp;/g, "&")}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 alt={`${photo.caption} (hover)`}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     className="absolute inset-0 w-full h-full object-cover"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         initial={{ opacity: 0, scale: 1 }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             whileHover={{ opacity: 1, scale: 1 }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 transition={{ duration: 0.3, ease: "easeOut" }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   /> */}



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
