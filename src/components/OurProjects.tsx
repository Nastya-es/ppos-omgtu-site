"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Росмолодежь",
    description:
      "Федеральная платформа для молодёжи: гранты, конкурсы, образовательные программы и карьерные возможности.",
    status: "Активен",
    gradient: "from-ppos-blue to-ppos-violet",
  },
  {
    id: 2,
    title: "Гранты ОмГТУ",
    description:
      "Внутренние гранты университета для поддержки студенческих научных и творческих инициатив.",
    status: "Активен",
    gradient: "from-ppos-violet to-ppos-birch",
  },
  {
    id: 3,
    title: "Студенческая весна",
    description:
      "Ежегодный региональный фестиваль творчества: вокал, танцы, оригинальный жанр и студенческая журналистика.",
    status: "Активен",
    gradient: "from-ppos-birch to-ppos-blue",
  },
];

export default function OurProjects() {
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
            Наши проекты
          </h2>
          <p className="text-lg text-[#1A1A1A]/60">
            Студенческие инициативы, мероприятия и гранты — всё, чем живёт
            профсоюз
          </p>
        </motion.div>

        {/* Сетка проектов */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Градиентная полоска сверху */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />

              {/* Контент */}
              <div className="p-8">
                {/* Бейдж статуса */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-ppos-birch/20 text-ppos-blue text-xs font-semibold rounded-full">
                    <span className="w-1.5 h-1.5 bg-ppos-birch rounded-full" />
                    {project.status}
                  </span>
                </div>

                {/* Название */}
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-ppos-blue transition-colors">
                  {project.title}
                </h3>

                {/* Описание */}
                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Кнопка */}
                <Link
                  href={`/projects#${project.id}`}
                  className="inline-flex items-center gap-2 text-ppos-blue font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Подробнее
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}