const pains = [
  { icon: "⚠️", text: "Всё держится на тебе — стоит отвлечься, всё останавливается" },
  { icon: "📉", text: "Теряешь лиды пока отвечаешь вручную" },
  { icon: "📅", text: "Контент выходит когда есть время — то есть никогда" },
  { icon: "📊", text: "Данные есть, но смотреть некогда" },
];

export function Pain() {
  return (
    <section id="pain" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">
          Узнаёшь <span className="text-accent">себя?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 flex gap-4 items-start hover:shadow-[0_0_15px_rgba(201,168,76,0.15)] transition-shadow duration-300"
            >
              <span className="text-3xl">{pain.icon}</span>
              <p className="text-text-secondary text-lg leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xl font-semibold text-accent">
          Мы это исправляем.
        </p>
      </div>
    </section>
  );
}
