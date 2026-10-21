"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        mt-8 md:mt-20
        h-[85vh]
        w-full
        relative
        overflow-hidden
        bg-[#3a95ff]
        bg-[url('/fon.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* ═══════════════════════════════════════════════════
          РАМКА (obvodka.png) — z-0
          ✅ ЗАДАЧА 3: картинка вместо CSS border
          ═══════════════════════════════════════════════════ */}
      <div className="absolute top-5 left-4 right-4 bottom-4 md:top-10 md:left-2 md:right-0 md:bottom-0 z-0 pointer-events-none">
        <img
          src="/obvodka.png"
          alt=""
          className="w-full h-full object-contain rounded-[50px]"
        />
      </div>

      {/* ═══════════════════════════════════════════════════
          ЗВЁЗДОЧКИ (stars.png) — z-0
          Позади листьев
          ═══════════════════════════════════════════════════ */}
      <motion.img
        src="/stars.png"
        alt=""
        className="absolute top-1/4 right-1/4 w-12 h-12 md:w-16 md:h-16 z-0 opacity-7+0 object-contain hidden md:block"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.7,
          y: [0, -8, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* ═══════════════════════════════════════════════════
          3D-ЛИСТЬЯ (listok_3d.png) — z-10
          Поверх звёздочек
          ═══════════════════════════════════════════════════ */}
      <div className="absolute right-0 bottom-0 z-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Зеленое свечение позади листьев */}
        <div className="absolute right-0 bottom-0 z-[5] pointer-events-none">
        <img 
          src="/podsvetka.png" 
          alt="" 
          className="w-[500px] md:w-[1200px] h-auto opacity-60 blur-xl"
        />
        </div>
          <motion.img
          
            src="/listok_3d.png"
            alt=""
            className="h-[60vh] md:h-[75vh] w-auto object-contain"
            animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
            transition={{
              y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          
        </motion.div>
      </div>

      {/* Мобильная версия листьев */}
      <div className="md:hidden absolute right-0 bottom-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/listok_3d.png"
          alt=""
          className="h-[40vh] w-auto object-contain"
        />
      </div>

      {/* ═══════════════════════════════════════════════════
          ДЕВИЗ (podpis.png) — z-30
          По центру сверху
          ═══════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-25 left-1/2 -translate-x-1/2 z-30"
      >
        <img
          src="/podpis.png"
          alt="Живи настоящим вместе с ППОС ОмГТУ"
          className="w-[300px] md:w-[500px] h-auto object-contain"
        />
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          ШАРИК (bubble.png) — z-30
          ✅ ЗАДАЧА 4: на верхней линии рамки
          top-8 left-8 (рамка начинается с top-8)
          -translate-y-1/2 (центр шарика на линии)
          ═══════════════════════════════════════════════════ */}
      <motion.div
        className="absolute top-8 left-8 md:top-10 md:left-30 -translate-y-1/2 z-30"
        initial={{ opacity: 0, scale: 0.5, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="drop-shadow-lg"
        >
          <img
            src="/bubble.png"
            alt=""
            className="w-20 h-20 md:w-35 md:h-50 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════
          ТЕКСТОВЫЙ БЛОК — z-20
          ✅ ЗАДАЧА 5: max-w-3xl, заголовок mb-8, кнопки mt-4
          ═══════════════════════════════════════════════════ */}
<div className="relative z-10 flex flex-col justify-start h-full pl-8 md:pl-16 lg:pl-34 max-w-3xl pt-35 md:pt-60">        {/* Заголовок */}
        <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="text-white font-bold uppercase leading-[1] text-5xl md:text-7xl lg:text-8xl tracking-tight text-left mb-8"
>
  <span className="block whitespace-nowrap">Первичная </span>
  <span className="block whitespace-nowrap">Профсоюзная </span>
  <span className="block whitespace-nowrap">Организация</span>
   <span className="block whitespace-nowrap">студентов ОмГТУ</span>
</motion.h1>

        {/* Кнопки */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-4 mt-8"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-5 px-9 py-4 bg-white text-[#3a95ff] text-sm md:text-base font-bold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Узнать больше
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          
        </motion.div>
      </div>
    </section>
  );
}