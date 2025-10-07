import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import homehero1 from "../../assets/images/HomeHero/homehero4.webp";
import homehero2 from "../../assets/images/HomeHero/homehero2.jpeg";
import homehero3 from "../../assets/images/HomeHero/homehero1.jpg";
// import homehero3 from "../../assets/images/HomeHero/homehero3.jpg";

const heroSectionData = [
  {
    title: "Wedding",
    Image: homehero1,
    description:
      "Make your wedding unforgettable with our elegant decor and seamless planning.Make your wedding unforgettable with our elegant decor and seamless planning.Make your wedding unforgettable with our elegant decor and seamless planning.Make your wedding unforgettable with our elegant decor and seamless planning.Make your wedding unforgettable with our elegant decor and seamless planning.",
  },
  {
    title: "Birthday",
    Image: homehero2,
    description:
      "Celebrate your special day with vibrant themes, lights, and lasting memories.",
  },
  {
    title: "Corporate Event",
    Image: homehero3,
    description:
      "Professional setups for conferences, seminars, and networking events.",
  },
];

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = heroSectionData[activeIndex];

  return (
    <div className="relative h-screen overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0)), url(${activeData.Image})`,
          }}
          initial={{ opacity: 0, rotateY: 180 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -180 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Content section */}
      <div className="relative z-10 container h-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="content max-w-4xl text-center space-y-4"
          >
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {activeData.title}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl font-curly tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {activeData.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Indicator numbers */}
        <div className="absolute right-5 bottom-10 flex items-end gap-2">
          <span className="w-14 h-1 bg-black rounded-sm"></span>
          {heroSectionData.map((_, i) => (
            <motion.span
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{ textShadow: "1px 1px 0px rgba(255,255,255,0.3)" }}
              className={`cursor-pointer select-none ${
                activeIndex === i ? "text-5xl" : "text-2xl"
              }`}
              whileHover={{ scale: 1.5 }}
              animate={{
                scale: activeIndex === i ? 1.4 : 1,
                color: activeIndex === i ? "#000" : "#222222",
              }}
              transition={{ duration: 0.3 }}
            >
              {i + 1}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
