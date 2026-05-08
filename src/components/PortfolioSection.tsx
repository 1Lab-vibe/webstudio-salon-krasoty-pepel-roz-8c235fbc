import beforeAfter from "@/assets/before-after-1.jpg";
import nails from "@/assets/portfolio-nails.jpg";
import hair from "@/assets/portfolio-hair.jpg";

const images = [
  { src: beforeAfter, alt: "До и после окрашивания", label: "Окрашивание" },
  { src: nails, alt: "Маникюр в салоне Пепел роз", label: "Маникюр" },
  { src: hair, alt: "Балаяж в салоне Пепел роз", label: "Балаяж" },
];

const PortfolioSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-3">
            Наши работы
          </h2>
          <p className="text-muted-foreground font-body">
            Примеры реальных результатов наших мастеров
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-body text-sm font-medium text-cream">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
