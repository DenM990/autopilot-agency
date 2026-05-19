export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-card/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-text-primary">
          <span className="text-accent">Стоимость</span>
        </h2>
        <p className="text-text-secondary text-lg mb-8">
          Стоимость зависит от задачи — обсудим на аудите.
          Простые решения можно запустить быстро, сложные — поэтапно.
        </p>
        <a
          href="#contacts"
          className="inline-block bg-accent hover:bg-accent/90 text-background font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
        >
          Узнать стоимость на аудите
        </a>
      </div>
    </section>
  );
}
