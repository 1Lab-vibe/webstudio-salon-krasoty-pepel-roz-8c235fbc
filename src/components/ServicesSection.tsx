const services = [
  {
    category: "Волосы",
    items: [
      { name: "Женская стрижка", price: "от 1 500 ₽", duration: "60 мин" },
      { name: "Мужская стрижка", price: "от 800 ₽", duration: "30 мин" },
      { name: "Окрашивание в один тон", price: "от 3 000 ₽", duration: "120 мин" },
      { name: "Сложное окрашивание (балаяж, шатуш)", price: "от 5 500 ₽", duration: "180 мин" },
      { name: "Укладка", price: "от 1 000 ₽", duration: "40 мин" },
      { name: "Кератиновое выпрямление", price: "от 4 000 ₽", duration: "150 мин" },
    ],
  },
  {
    category: "Ногти",
    items: [
      { name: "Маникюр с покрытием гель-лак", price: "от 1 800 ₽", duration: "90 мин" },
      { name: "Педикюр с покрытием", price: "от 2 200 ₽", duration: "90 мин" },
      { name: "Снятие + маникюр", price: "от 2 000 ₽", duration: "100 мин" },
    ],
  },
  {
    category: "Брови и ресницы",
    items: [
      { name: "Коррекция + окрашивание бровей", price: "от 1 200 ₽", duration: "40 мин" },
      { name: "Ламинирование бровей", price: "от 1 800 ₽", duration: "50 мин" },
      { name: "Наращивание ресниц", price: "от 2 500 ₽", duration: "120 мин" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-3">
            Услуги и цены
          </h2>
          <p className="text-muted-foreground font-body">
            Актуальные цены · точную стоимость уточняйте при записи
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">{item.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{item.duration}</p>
                    </div>
                    <span className="font-body text-sm font-semibold text-rose-warm whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
