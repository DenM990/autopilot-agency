const roles = [
  { icon: "🔍", label: "Аналитик" },
  { icon: "⚙️", label: "Автоматизатор" },
  { icon: "✍️", label: "Контент-редактор" },
  { icon: "🧭", label: "Стратег" },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-text-primary">
          За каждой задачей —{" "}
          <span className="text-accent">своя команда</span>
        </h2>

        <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
          Мы используем специализированных ИИ-агентов под каждое направление.
          Аналитик, автоматизатор, контент-редактор, стратег — каждый делает своё.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {roles.map((role) => (
            <div
              key={role.label}
              className="flex flex-col items-center gap-3 bg-card rounded-2xl p-6 w-36 hover:shadow-[0_0_15px_rgba(201,168,76,0.2)] transition-shadow duration-300"
            >
              <span className="text-4xl">{role.icon}</span>
              <span className="text-sm text-text-secondary font-medium">{role.label}</span>
            </div>
          ))}
        </div>

        <p className="text-text-secondary italic">
          Хочешь узнать как устроена система?{" "}
          <a href="#contacts" className="text-accent hover:underline">
            Спроси на аудите.
          </a>
        </p>
      </div>
    </section>
  );
}
