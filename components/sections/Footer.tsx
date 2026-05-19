const links = [
  { label: "О нас", href: "#solution" },
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export function Footer() {
  return (
    <footer id="footer" className="py-12 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <p className="text-xl font-bold text-accent mb-1">Агентство Автопилот</p>
            <p className="text-text-secondary text-sm">Бизнес который работает без тебя.</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
          <p className="text-text-secondary text-xs">
            © 2026 ИП Матвеев Денис Викторович
          </p>
          <div className="flex gap-6">
            <a
              href="https://t.me/den_autopilot"
              className="text-text-secondary hover:text-accent transition-colors text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram-канал
            </a>
            <a
              href="/privacy"
              className="text-text-secondary hover:text-accent transition-colors text-xs"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
