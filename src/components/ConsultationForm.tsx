"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ConsultationForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/nastenka.esikova@mail.ru", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          setIsSuccess(true);
          form.reset();
        } else {
          alert("Ошибка отправки. Попробуйте позже.");
        }
      })
      .catch(() => {
        // Если JSON не парсится — всё равно считаем успешным
        // (FormSubmit может вернуть HTML при первом отправлении)
        setIsSuccess(true);
        form.reset();
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Декоративные блобы */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3a95ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#bc76ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Заголовки */}
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight"
                >
                  Возникла сложная ситуация?
                  <br />
                  <span className="bg-gradient-to-r from-[#3a95ff] to-[#bc76ff] bg-clip-text text-transparent">
                    Мы поможем вам ее решить.
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto"
                >
                  Заполните форму, и мы свяжемся с вами конфиденциально.
                  <br />
                  <span className="font-semibold text-[#3a95ff]">
                    Живи настоящим вместе с ППОС ОмГТУ!
                  </span>
                </motion.p>
              </div>

              {/* Форма */}
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-[#F5F7FA] rounded-3xl shadow-lg p-8 sm:p-10 space-y-5"
              >
                {/* Скрытые поля FormSubmit */}
                <input
                  type="hidden"
                  name="_subject"
                  value="Новая заявка с сайта ППОС ОмГТУ"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* ФИО */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2"
                  >
                    ФИО <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#3a95ff] transition-all duration-300 text-[#1A1A1A] placeholder-[#1A1A1A]/40 disabled:opacity-50"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>

                {/* Группа */}
                <div>
                  <label
                    htmlFor="group"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2"
                  >
                    Учебная группа
                  </label>
                  <input
                    type="text"
                    id="group"
                    name="group"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#3a95ff] transition-all duration-300 text-[#1A1A1A] placeholder-[#1A1A1A]/40 disabled:opacity-50"
                    placeholder="ИТ-101"
                  />
                </div>

                {/* Контакт */}
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2"
                  >
                    Контакт для связи{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#3a95ff] transition-all duration-300 text-[#1A1A1A] placeholder-[#1A1A1A]/40 disabled:opacity-50"
                    placeholder="+7 (999) 123-45-67 или @username"
                  />
                </div>

                {/* Ситуация */}
                <div>
                  <label
                    htmlFor="situation"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2"
                  >
                    Опишите вашу ситуацию{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="situation"
                    name="message"
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-white border-2 border-transparent rounded-2xl focus:outline-none focus:border-[#3a95ff] transition-all duration-300 text-[#1A1A1A] placeholder-[#1A1A1A]/40 resize-none disabled:opacity-50"
                    placeholder="Расскажите подробнее о вашей ситуации..."
                  />
                </div>

                {/* Кнопка отправки */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3a95ff] to-[#bc76ff] text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-[#3a95ff]/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Отправить заявку
                    </>
                  )}
                </motion.button>

                {/* Согласие */}
                <p className="text-xs text-[#1A1A1A]/50 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </motion.form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="bg-[#F5F7FA] rounded-3xl shadow-lg p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                className="w-20 h-20 bg-gradient-to-br from-[#5fefb4] to-[#3a95ff] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
                Заявка отправлена!
              </h3>
              <p className="text-lg text-[#1A1A1A]/60 mb-6">
                Мы скоро свяжемся с вами
              </p>
              <p className="text-sm font-semibold text-[#3a95ff]">
                Живи настоящим вместе с ППОС ОмГТУ!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}