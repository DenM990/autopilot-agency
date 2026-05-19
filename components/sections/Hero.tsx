"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const subtitles = [
  "Один человек. Сто направлений.",
  "Ты думаешь. Система делает.",
  "Расти без команды.",
  "Используй потенциал на полную.",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Фоновая сетка */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-6">
          Бизнес который работает{" "}
          <span className="text-accent">без тебя.</span>
        </h1>

        <div className="h-10 mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl text-accent font-medium"
            >
              {subtitles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
          Автоматизируем рутину. Внедряем ИИ. Ты занимаешься главным.
        </p>

        <a
          href="#contacts"
          className="inline-block bg-accent hover:bg-accent/90 text-background font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
        >
          Записаться на бесплатный аудит
        </a>
      </div>
    </section>
  );
}
