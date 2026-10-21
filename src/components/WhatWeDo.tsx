"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, TrendingUp, Sparkles } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Защита прав",
    description:
      "Юридическая помощь, представительство интересов в учебных и административных вопросах.",
    gradient: "from-ppos-blue to-ppos-violet",
  },
  {
    icon: Rocket,
    title: "Проекты и гранты",
    description:
      "Помогаем студентам получать гранты, участвовать в конкурсах и реализовывать свои идеи.",
    gradient: "from-ppos-violet to-ppos-birch",
  },
  {
    icon: TrendingUp,
    title: "Личностный рост",
    description:
      "Образовательные программы, мастер-классы, тренинги и менторство для развития навыков.",
    gradient: "from-ppos-birch to-ppos-blue",
  },
  {
    icon: Sparkles,
    title: "Яркие события",
    description:
      "Фестивали, спортивные турниры, творческие конкурсы и культурные мероприятия круглый год.",
    gradient: "from-ppos-blue to-ppos-birch",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Что мы делаем
          </h2>
          <p className="text-lg text-[#1A1A1A]/60">
            Мы — голос студенчества ОмГТУ. Наша миссия — делать студенческую
            жизнь ярче и создавать пространство для роста.
          </p>
        </motion.div>

        {/* Сетка карточек */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-500"
              >
                {/* Иконка */}
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Текст */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}