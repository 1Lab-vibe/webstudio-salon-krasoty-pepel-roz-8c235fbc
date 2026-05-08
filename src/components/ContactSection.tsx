import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-3">
              Записаться
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Оставьте заявку — мы перезвоним и подберём удобное время.
            </p>

            {submitted ? (
              <div className="bg-accent rounded-xl p-6 text-center">
                <p className="font-display text-xl font-semibold text-accent-foreground mb-2">
                  Спасибо за заявку!
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Мы перезвоним в течение 30 минут в рабочее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Анна"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+7 (900) 123-45-67"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">
                    Услуга
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Выберите услугу</option>
                    <option>Стрижка</option>
                    <option>Окрашивание</option>
                    <option>Маникюр / педикюр</option>
                    <option>Брови / ресницы</option>
                    <option>Другое</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-rose-warm text-primary-foreground font-body font-medium text-sm rounded-lg hover:bg-rose-glow transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Контакты
            </h3>
            <div className="space-y-4 font-body text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Адрес</p>
                <p className="text-foreground font-medium">г. Краснодар</p>
                <p className="text-muted-foreground text-xs mt-0.5">Точный адрес уточняйте при записи</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Телефон</p>
                <a href="tel:+79001234567" className="text-rose-warm font-medium hover:text-rose-glow transition-colors">
                  +7 (900) 123-45-67
                </a>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Режим работы</p>
                <p className="text-foreground">Пн–Сб: 9:00 – 20:00</p>
                <p className="text-foreground">Вс: 10:00 – 18:00</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Мессенджеры</p>
                <div className="flex gap-3">
                  <a href="#" className="text-rose-warm hover:text-rose-glow transition-colors font-medium">WhatsApp</a>
                  <a href="#" className="text-rose-warm hover:text-rose-glow transition-colors font-medium">Telegram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
