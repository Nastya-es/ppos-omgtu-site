import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Calendar, Award, Heart, ChevronRight, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ConsultationForm from '../components/ConsultationForm';
import { newsData, projectsData } from '../data/mockData';

const stats = [
  { icon: Users, value: '3 500+', label: 'Членов профсоюза' },
  { icon: Calendar, value: '120+', label: 'Мероприятий в год' },
  { icon: Award, value: '15', label: 'Лет активной работы' },
  { icon: Heart, value: '98%', label: 'Довольных студентов' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div>
      {/* ─── HERO-СЕКЦИЯ (Шаг 3) ─── */}
      <Hero />

      {/* ─── Статистика (мобильная) ─── */}
      <section className="lg:hidden py-12 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                <stat.icon className="w-8 h-8 text-[#3a95ff] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[#1A1A1A]">{stat.value}</p>
                <p className="text-xs text-[#6B7280] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── О нас кратко ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
              Что мы делаем
            </h2>
            <p className="text-lg text-[#6B7280]">
              Мы — голос студенчества ОмГТУ. Наша миссия — делать студенческую жизнь ярче, защищать интересы каждого студента и создавать пространство для роста.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Защита прав',
                desc: 'Юридическая помощь, представительство интересов в учебных и административных вопросах.',
                gradient: 'from-[#3a95ff] to-[#bc76ff]',
                icon: '⚖️'
              },
              {
                title: 'Яркие события',
                desc: 'Фестивали, спортивные турниры, творческие конкурсы и культурные мероприятия круглый год.',
                gradient: 'from-[#bc76ff] to-[#5fefb4]',
                icon: '🎉'
              },
              {
                title: 'Поддержка',
                desc: 'Материальная помощь, стипендии, путёвки на отдых и программы развития для каждого члена профсоюза.',
                gradient: 'from-[#5fefb4] to-[#3a95ff]',
                icon: '🤝'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#3a95ff]/20 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Последние новости ─── */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-2">Последние новости</h2>
              <p className="text-[#6B7280]">Будь в курсе событий профсоюзной жизни</p>
            </div>
            <Link
              to="/news"
              className="hidden sm:inline-flex items-center gap-2 text-[#3a95ff] font-medium hover:text-[#2a7ae0] transition-colors"
            >
              Все новости
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((news, i) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#3a95ff]/20 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#3a95ff] text-xs font-medium rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#6B7280] mb-2">
                    {new Date(news.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#3a95ff] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] line-clamp-2">{news.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3a95ff] text-white font-medium rounded-2xl hover:bg-[#2a7ae0] transition-colors"
            >
              Все новости
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Проекты (превью) ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-2">Наши проекты</h2>
              <p className="text-[#6B7280]">Студенческие инициативы и мероприятия</p>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-[#3a95ff] font-medium hover:text-[#2a7ae0] transition-colors"
            >
              Все проекты
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#3a95ff]/20 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1A1A1A] text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'active'
                        ? 'bg-[#5fefb4]/90 text-[#1A1A1A]'
                        : 'bg-[#bc76ff]/90 text-white'
                    }`}>
                      {project.status === 'active' ? 'Активный' : 'Завершён'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#3a95ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Форма консультации ─── */}
      <ConsultationForm />

      {/* ─── CTA-секция ─── */}
      <section className="py-20 bg-gradient-to-br from-[#3a95ff] to-[#bc76ff] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5fefb4] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Стань частью профсоюзной семьи
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Вступай в ППОС ОмГТУ и получи доступ к множеству возможностей: материальная поддержка, скидки, мероприятия, новые знакомства и многое другое.
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#3a95ff] font-semibold rounded-2xl hover:bg-[#F5F7FA] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Подать заявление
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}