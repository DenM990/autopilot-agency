"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Мы небольшая компания — это для нас?",
    a: "Да. Мы специализируемся именно на малом бизнесе. Большинство наших решений рассчитаны на компании от 1 до 10 человек — именно там автоматизация даёт максимальный эффект.",
  },
  {
    q: "Сколько времени занимает внедрение?",
    a: "Зависит от задачи. Простые инструменты (мониторинг, базовые боты) — от 3 до 7 дней. Комплексные решения — 2-4 недели. На аудите скажем точно.",
  },
  {
    q: "Нужен ли нам технический специалист на стороне?",
    a: "Нет. Мы берём задачу под ключ: настраиваем, тестируем, обучаем вас работать с результатом. Никаких IT-знаний с вашей стороны не нужно.",
  },
  {
    q: "Что если нам не подойдёт результат?",
    a: "Мы согласовываем результат до начала работы. Если что-то не так — дорабатываем. Наша репутация строится на том, что решение реально работает.",
  },
  {
    q: "Работаете ли вы удалённо?",
    a: "Да, полностью. Работаем с клиентами по всей России. Базируемся в Калининграде, но это не имеет значения — всё общение онлайн.",
  },
  {
    q: "Чем вы отличаетесь от фрилансера?",
    a: "Фрилансер делает задачу и уходит. Мы строим систему, которая работает без нас — и готовы её поддерживать. Плюс у нас команда специализированных агентов под каждое направление.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">
          Частые <span className="text-accent">вопросы</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-text-primary">{faq.q}</span>
                <span className="text-accent text-xl flex-shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <div
                data-testid="faq-answer"
                style={{ display: open === i ? "block" : "none" }}
                className="px-6 pb-5 text-text-secondary leading-relaxed"
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
