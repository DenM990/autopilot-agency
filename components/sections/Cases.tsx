const cases = [
  {
    title: "LegalPulse",
    task: "Мониторинг судебных дел и долгов контрагентов",
    result: "Более 50 пользователей, 200+ отслеженных дел",
    tag: "мониторинг",
  },
  {
    title: "ContentAuto",
    task: "Автоматическая генерация контента для бизнеса",
    result: "Экономия 10+ часов в неделю на создании постов",
    tag: "контент",
  },
  {
    title: "EridAudit",
    task: "Автоматический аудит ERID-меток в рекламных постах",
    result: "Проверка 100+ постов без ручного труда",
    tag: "аналитика",
  },
];

const tagColors: Record<string, string> = {
  мониторинг: "bg-blue-900/40 text-blue-300",
  контент: "bg-purple-900/40 text-purple-300",
  аналитика: "bg-green-900/40 text-green-300",
};

export function Cases() {
  return (
    <section id="cases" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">
          Что уже <span className="text-accent">работает</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-card rounded-2xl p-6 flex flex-col gap-4 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] transition-shadow duration-300"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-accent">{c.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${tagColors[c.tag]}`}>
                  {c.tag}
                </span>
              </div>
              <p className="text-text-secondary text-sm">{c.task}</p>
              <p className="text-text-primary text-sm font-medium border-t border-white/10 pt-4">
                {c.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
