const services = [
  {
    icon: "👁️",
    title: "Мониторинг",
    description: "Боты наблюдения за событиями в вашей отрасли",
    items: ["Судебные дела и долги", "Конкуренты и цены", "Упоминания бренда"],
  },
  {
    icon: "✍️",
    title: "Контент",
    description: "Автоматическая генерация и публикация контента",
    items: ["Автогенерация постов", "Кросспостинг в соцсети", "AI-редактор"],
  },
  {
    icon: "📊",
    title: "Аналитика",
    description: "Данные которые читаются сами",
    items: ["Дашборды и отчёты", "Мониторинг медиа", "Поиск лидов"],
  },
  {
    icon: "🤖",
    title: "AI-ассистенты",
    description: "Умные боты для команды и клиентов",
    items: ["Корпоративный бот", "Помощник для команды", "Мультиагентный анализ"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">
          Что мы <span className="text-accent">делаем</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-7 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
              </div>
              <p className="text-text-secondary mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-text-secondary flex gap-2">
                    <span className="text-accent">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
