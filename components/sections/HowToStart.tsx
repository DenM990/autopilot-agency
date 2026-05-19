const steps = [
  {
    number: "01",
    title: "Аудит (бесплатно)",
    description: "Разбираем твой бизнес за 30 минут. Находим главные точки роста.",
  },
  {
    number: "02",
    title: "Решение",
    description: "Предлагаем конкретный инструмент под твою задачу. Без лишнего.",
  },
  {
    number: "03",
    title: "Запуск",
    description: "Внедряем, настраиваем, сдаём. Ты получаешь работающую систему.",
  },
];

export function HowToStart() {
  return (
    <section id="how-to-start" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">
          Три шага до <span className="text-accent">результата</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="text-6xl font-bold text-accent/20">{step.number}</div>
              <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
              <p className="text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contacts"
            className="inline-block bg-accent hover:bg-accent/90 text-background font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
          >
            Записаться на бесплатный аудит
          </a>
        </div>
      </div>
    </section>
  );
}
