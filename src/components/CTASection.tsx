"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-r from-[#3a95ff] to-[#bc76ff] overflow-hidden">
      {/* Декоративные блобы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5fefb4]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Стань частью профсоюзной семьи
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Вступай в ППОС ОмГТУ и получи доступ к множеству возможностей:
            материальная поддержка, скидки, мероприятия, новые знакомства и
            многое другое.
          </p>

          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#3a95ff] font-bold rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Подать заявление
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}