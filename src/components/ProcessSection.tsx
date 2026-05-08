const steps = [
  { num: "01", title: "Запись", desc: "Позвоните или напишите — подберём удобное время." },
  { num: "02", title: "Консультация", desc: "Мастер обсудит ваши пожелания и подберёт процедуру." },
  { num: "03", title: "Процедура", desc: "Работаем аккуратно, с профессиональными материалами." },
  { num: "04", title: "Результат", desc: "Уходите с готовым результатом и рекомендациями по уходу." },
];

const ProcessSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-3">
            Как мы работаем
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <span className="font-display text-4xl font-bold text-rose-light block mb-2">
                {step.num}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
